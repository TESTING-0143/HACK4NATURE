import React, { useEffect, useState } from 'react'
import { inr } from '../utils/fare'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const navigate = useNavigate()
  const [fare, setFare] = useState(null)

  useEffect(() => {
    const raw = sessionStorage.getItem('fare_result')
    if (!raw) {
      navigate('/')
      return
    }
    setFare(JSON.parse(raw))
  }, [navigate])

  if (!fare) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-emerald-50">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-2xl border border-emerald-200/50 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black text-gray-800">Payment</h1>
            <div className="text-2xl font-extrabold text-emerald-600">{inr.format(fare.total)}</div>
          </div>
          <div className="mt-4 space-y-2 text-gray-700">
            {fare.components?.map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{c.label}</span>
                <span>{inr.format(c.value)}</span>
              </div>
            ))}
            <hr className="my-2 border-emerald-100" />
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{inr.format(fare.surged)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>GST (18%)</span>
              <span>{inr.format(fare.gst)}</span>
            </div>
            <div className="flex items-center justify-between font-extrabold text-gray-900">
              <span>Total</span>
              <span>{inr.format(fare.total)}</span>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => { alert('Payment simulated. Thank you!'); sessionStorage.removeItem('fare_result'); navigate('/') }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold shadow-lg hover:from-emerald-600 hover:to-emerald-700"
            >
              Pay Now
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment


