"use client"
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function BottomActionButtons() {
  // Ensure client-side rendering
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted, return null
  if (!mounted) return null

  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 
      bg-red-500 shadow-lg p-4 flex justify-between
      z-50 mobile:block hidden">
      <button 
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => {
          // Handle cancel action
        }}
      >
        Cancel
      </button>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          // Handle save action
        }}
      >
        Save
      </button>
    </div>,
    document.body
  )
}