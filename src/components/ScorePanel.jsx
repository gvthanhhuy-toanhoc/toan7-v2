import { useState } from 'react'
import { Confetti } from './Confetti'

export default function ScorePanel({ score, total, level, onRestart, onSaveScore }) {
  const [name, setName] = useState('')
  const [saved, setSaved] = useState(false)
  const pct = total > 0 ? score / total : 0
  const stars = pct >= .8 ? 3 : pct >= .6 ? 2 : pct >= .4 ? 1 : 0

  const info =
    pct >= .9 ? { emoji:'🏆', msg:'Xuất sắc! Bạn thật giỏi!',     color:'#f97316' } :
    pct >= .7 ? { emoji:'🌟', msg:'Rất tốt! Tiếp tục phát huy!',   color:'#22c55e' } :
    pct >= .5 ? { emoji:'💪', msg:'Khá tốt! Luyện thêm nhé!',      color:'#3b82f6' } :
               { emoji:'📚', msg:'Xem lại lý thuyết rồi thử lại!', color:'#a855f7' }

  function handleSave() {
    if (!name.trim() || saved) return
    onSaveScore(name.trim(), score)
    setSaved(true)
  }

  return (
    <div className="card bounce-in text-center relative overflow-hidden">
      <Confetti active={pct >= .6} />

      {/* Stars */}
      <div className="flex justify-center gap-2 mb-4">
        {[1,2,3].map(i => (
          <span key={i} className={`text-4xl transition-all duration-300 ${i <= stars ? 'star lit' : 'star'}`}>★</span>
        ))}
      </div>

      {/* Score ring */}
      <div className="w-28 h-28 rounded-full border-8 flex flex-col items-center justify-center mx-auto mb-4 relative"
        style={{ borderColor: info.color, background: info.color + '18' }}>
        <span className="text-4xl font-black" style={{ color: info.color }}>{score}</span>
        <span className="text-xs font-bold" style={{ color: info.color }}>/ {total}</span>
      </div>

      <div className="text-3xl mb-1">{info.emoji}</div>
      <h2 className="text-xl font-black text-gray-800 mb-1">{info.msg}</h2>
      <p className="text-sm text-gray-500 mb-5">Bạn đúng {score}/{total} câu ({Math.round(pct*100)}%)</p>

      {/* Save to leaderboard */}
      {!saved ? (
        <div className="flex gap-2 mb-4 max-w-xs mx-auto">
          <input value={name} onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key==='Enter' && handleSave()}
            placeholder="Tên của bạn..."
            className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-xl text-sm font-bold outline-none focus:border-yellow-400"/>
          <button onClick={handleSave} disabled={!name.trim()}
            className="btn px-4 py-2 bg-yellow-400 text-white font-black rounded-xl disabled:opacity-40 text-sm">
            🏆 Lưu
          </button>
        </div>
      ) : (
        <div className="mb-4 text-green-600 font-bold text-sm">✅ Đã lưu vào Bảng vàng!</div>
      )}

      <div className="flex gap-2 justify-center flex-wrap">
        <button onClick={onRestart} className="btn btn-primary">↺ Làm lại</button>
        <button onClick={() => window.location.hash='#/review'} className="btn btn-secondary">🔁 Ôn bài sai</button>
      </div>
    </div>
  )
}
