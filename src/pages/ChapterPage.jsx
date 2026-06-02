import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CHAPTERS, LEVEL_META, TYPE_META, DB } from '../data/questions'

function countQs(chId, lv, tp) {
  return (DB[lv]?.[tp] ?? []).filter(q => q._ch === chId).length
}

export default function ChapterPage({ quiz }) {
  const [selected, setSelected] = useState(null)
  const [selLevel, setSelLevel] = useState('dat')
  const [selType,  setSelType]  = useState('tn')
  const navigate = useNavigate()

  function startChapter() {
    quiz.setChapter(selected)
    quiz.setLevelExt?.(selLevel) || quiz.setLevel(selLevel)
    quiz.setType(selType)
    navigate('/')
  }

  const ch = selected ? CHAPTERS.find(c => c.id === selected) : null

  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      <div className="text-center mb-6">
        <div className="text-5xl mb-2 float">📚</div>
        <h2 className="text-2xl font-black text-gray-800">Luyện tập theo Chương</h2>
        <p className="text-sm text-gray-500">Chọn chương → cấp độ → dạng bài → Bắt đầu</p>
      </div>

      {/* Chapter grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
        {CHAPTERS.map(c => {
          const totalQs = Object.keys(DB).reduce((acc, lv) =>
            acc + Object.keys(DB[lv]).reduce((a, tp) => a + countQs(c.id, lv, tp), 0), 0)
          return (
            <button key={c.id} onClick={() => setSelected(c.id)}
              style={selected===c.id ? {background:c.color,borderColor:c.color,color:'#fff'} : {borderColor:c.color+'40'}}
              className={`p-4 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] active:scale-[.98] ${selected!==c.id?'bg-white':''}`}>
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="text-xs font-bold opacity-70 mb-0.5">
                {CHAPTERS.indexOf(c) === CHAPTERS.findIndex(x => x.id === c.id) ? `Chương ${CHAPTERS.indexOf(c)+1}` : ''}
              </div>
              <div className={`text-sm font-black leading-snug mb-1 ${selected===c.id?'text-white':'text-gray-800'}`}>{c.title}</div>
              <div className={`text-xs leading-relaxed ${selected===c.id?'text-white/80':'text-gray-400'}`}>{c.desc}</div>
              <div className={`mt-2 text-xs font-bold px-2 py-0.5 rounded-full inline-block ${selected===c.id?'bg-white/20 text-white':'bg-gray-100 text-gray-500'}`}>
                {totalQs} câu hỏi
              </div>
            </button>
          )
        })}
      </div>

      {/* Config panel */}
      {selected && ch && (
        <div className="card bounce-in mb-4">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
            <span className="text-3xl">{ch.icon}</span>
            <div>
              <h3 className="font-black text-gray-800">{ch.title}</h3>
              <p className="text-xs text-gray-400">{ch.desc}</p>
            </div>
          </div>

          {/* Level */}
          <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Cấp độ</p>
          <div className="flex gap-2 flex-wrap mb-4">
            {Object.entries(LEVEL_META).map(([k,m]) => {
              const cnt = Object.keys(TYPE_META).reduce((a, tp) => a + countQs(ch.id, k, tp), 0)
              return (
                <button key={k} onClick={() => setSelLevel(k)}
                  style={selLevel===k ? {background:m.color,borderColor:m.color,color:'#fff'} : {borderColor:m.color,color:m.dark}}
                  className={`px-3 py-1.5 rounded-full text-xs font-black border-2 transition-all ${selLevel!==k?'bg-white':''}`}>
                  {m.symbol} {m.label}
                  <span className="ml-1 opacity-70">({cnt})</span>
                </button>
              )
            })}
          </div>

          {/* Type */}
          <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Dạng bài</p>
          <div className="flex gap-2 flex-wrap mb-4">
            {Object.entries(TYPE_META).map(([k,m]) => {
              const cnt = countQs(ch.id, selLevel, k)
              return (
                <button key={k} onClick={() => setSelType(k)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 transition-all ${selType===k?'bg-gray-800 text-white border-gray-800':'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}>
                  {m.icon} {m.label}
                  {cnt > 0 && <span className="ml-1 text-green-500">({cnt})</span>}
                  {cnt === 0 && <span className="ml-1 text-red-400">(0)</span>}
                </button>
              )
            })}
          </div>

          <button onClick={startChapter}
            style={{background: ch.color}}
            className="w-full py-3 text-white text-sm font-black rounded-2xl transition-opacity hover:opacity-90 shadow-lg">
            🚀 Bắt đầu luyện {ch.title}
          </button>
        </div>
      )}

      {/* Progress overview */}
      <div className="card">
        <h3 className="font-black text-gray-700 mb-3 flex items-center gap-2"><span>📊</span> Tổng quan câu hỏi</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-gray-400 font-bold">
                <th className="text-left py-1.5 pr-3">Chương</th>
                <th className="text-center px-2">⭐ Đạt</th>
                <th className="text-center px-2">⭐⭐ Khá</th>
                <th className="text-center px-2">⭐⭐⭐ Giỏi</th>
                <th className="text-center px-2">🏆 XS</th>
              </tr>
            </thead>
            <tbody>
              {CHAPTERS.map(c => (
                <tr key={c.id} className={`border-t border-gray-50 ${selected===c.id?'bg-gray-50':''}`}>
                  <td className="py-2 pr-3 font-bold" style={{color:c.color}}>{c.icon} {c.title.substring(0,12)}{c.title.length>12?'…':''}</td>
                  {['dat','kha','gioi','xs'].map(lv => {
                    const cnt = Object.keys(TYPE_META).reduce((a, tp) => a + countQs(c.id, lv, tp), 0)
                    return <td key={lv} className="text-center px-2">
                      <span className={`font-bold ${cnt>0?'text-green-600':'text-gray-300'}`}>{cnt}</span>
                    </td>
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
