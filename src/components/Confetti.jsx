import { useEffect, useState } from 'react'

export function Confetti({ active }) {
  const [pieces, setPieces] = useState([])
  useEffect(() => {
    if (!active) return
    const colors = ['#22c55e','#3b82f6','#a855f7','#f97316','#ec4899','#eab308']
    const ps = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      size: 8 + Math.random() * 8,
    }))
    setPieces(ps)
    const t = setTimeout(() => setPieces([]), 1500)
    return () => clearTimeout(t)
  }, [active])
  return (
    <>
      {pieces.map(p => (
        <div key={p.id} className="confetti-piece" style={{
          left: p.left + '%', top: '-10px',
          background: p.color,
          width: p.size, height: p.size,
          animationDelay: p.delay + 's',
        }} />
      ))}
    </>
  )
}

export function BadgeToast({ badges }) {
  if (!badges.length) return null
  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
      {badges.map(b => (
        <div key={b.id} className="bounce-in bg-white rounded-2xl shadow-lg border-2 border-yellow-300 px-4 py-3 flex items-center gap-3 max-w-xs">
          <span className="text-3xl">{b.icon}</span>
          <div>
            <p className="font-bold text-sm text-gray-800">🏅 Huy hiệu mới!</p>
            <p className="font-bold text-yellow-600 text-sm">{b.label}</p>
            <p className="text-xs text-gray-500">{b.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
