"use client"
import { useEffect, useState } from "react"

export default function Page() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    // Simple fetch to backend
    fetch("http://localhost:4000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend error"))
  }, [])

  return <div className="bg-amber-400 p-4">{message}</div>
}
