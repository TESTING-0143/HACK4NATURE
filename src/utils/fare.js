// Rule-based fare calculator (frontend-only)

export const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

const baseRates = {
  wm: { base: 49, perKm: 15, waitPerMin: 0, weightPerKg: 5 }, // Waste Management
  amb: { base: 199, perKm: 35, waitPerMin: 3, weightPerKg: 0 }, // Ambulance
};

const multipliers = {
  time: { normal: 1, peak: 1.15, night: 1.25 },
  wmPriority: { standard: 1, express: 1.15 },
  urgency: { normal: 1, priority: 1.2, critical: 1.4 },
  // New multipliers for material types
  materialType: {
    general: 1,
    organic: 0.9,
    recyclable: 0.8,
    construction: 1.3,
    electronic: 1.5,
    medical: 2.0,
    chemical: 2.5,
    animal: 1.2
  }
};

export function calcFare(data) {
  const rates = baseRates[data.service];
  const dKm = Math.max(0, data.distance || 0);
  const wait = Math.max(0, data.wait || 0);
  const weight = Math.max(0, data.wasteKg || 0);

  const timeMul = multipliers.time[data.time || 'normal'] || 1;
  const wmMul = data.service === 'wm' ? (multipliers.wmPriority[data.wmPriority || 'standard'] || 1) : 1;
  const ambMul = data.service === 'amb' ? (multipliers.urgency[data.urgency || 'normal'] || 1) : 1;
  const materialMul = multipliers.materialType[data.materialType || 'general'] || 1;

  const components = [];
  components.push({ label: 'Base fare', value: rates.base });
  components.push({ label: 'Distance', value: dKm * rates.perKm });
  if (rates.waitPerMin > 0 && wait > 0) components.push({ label: 'Waiting', value: wait * rates.waitPerMin });
  if (rates.weightPerKg > 0 && weight > 0) components.push({ label: 'Weight', value: weight * rates.weightPerKg });

  // Add quantity charge if more than 1 item
  if (data.quantity && data.quantity > 1) {
    const quantityCharge = Math.round((data.quantity - 1) * 10); // ₹10 per additional item
    if (quantityCharge > 0) components.push({ label: 'Additional items', value: quantityCharge });
  }

  const subtotal = components.reduce((s, c) => s + c.value, 0);
  const surgeMul = timeMul * wmMul * ambMul * materialMul;
  const surged = Math.round(subtotal * surgeMul);
  const gst = Math.round(surged * 0.18);
  const total = surged + gst;

  return { subtotal, surgeMul, surged, gst, total, components };
}

// Heuristic to derive fare inputs from report form fields
export function deriveFareInputFromReport(report) {
  // Map size to approximate weight and distance
  const sizeToWeight = { small: 5, medium: 15, large: 35, 'very-large': 60 };
  const sizeToDistance = { small: 3, medium: 5, large: 8, 'very-large': 12 };

  const service = 'wm';
  
  // Use provided weight or estimate from size
  const wasteKg = report.weight ? parseFloat(report.weight) : (sizeToWeight[report.size] ?? 10);
  const distance = sizeToDistance[report.size] ?? 5;

  // Accessibility influences pickup priority (express for harder access)
  const wmPriority = ['difficult', 'restricted'].includes(report.accessibility) ? 'express' : 'standard';

  // Daypart heuristic from local time
  const hour = new Date().getHours();
  const time = hour >= 22 || hour < 6 ? 'night' : (hour >= 8 && hour <= 11 ? 'peak' : 'normal');

  // Use provided urgency or default to normal
  const urgency = report.urgency || 'normal';

  return {
    service,
    distance,
    wait: 0,
    time,
    wasteKg,
    wmPriority,
    urgency,
    materialType: report.materialType || 'general',
    quantity: report.quantity ? parseInt(report.quantity) : 1
  };
}


