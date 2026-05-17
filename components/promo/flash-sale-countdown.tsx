"use client"

import { useEffect, useState } from "react"

export function FlashSaleCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59

          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59

            if (hours > 0) {
              hours--
            }
          }
        }

        return {
          hours,
          minutes,
          seconds,
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-3">
      <TimeBox
        label="Jam"
        value={timeLeft.hours}
      />

      <TimeBox
        label="Menit"
        value={timeLeft.minutes}
      />

      <TimeBox
        label="Detik"
        value={timeLeft.seconds}
      />
    </div>
  )
}

type TimeBoxProps = {
  label: string
  value: number
}

function TimeBox({
  label,
  value,
}: TimeBoxProps) {
  return (
    <div className="flex min-w-[70px] flex-col items-center rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
      <span className="text-2xl font-bold">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-1 text-xs uppercase tracking-wider opacity-80">
        {label}
      </span>
    </div>
  )
}