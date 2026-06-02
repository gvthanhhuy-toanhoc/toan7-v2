import { useState, useRef } from 'react'
import MathText from './MathText'

// ── Solution Box ─────────────────────────────────────────────────
export function SolutionBox({ sol, visible }) {
  if (!visible || !sol) return null
  return (
    <div className="mt-3 bg-green-50 border-2 border-green-200 rounded-2xl p-4 slide-up">
      <p className="text-xs font-black text-green-700 mb-2">✅ Lời giải chi tiết</p>
      <div className="text-sm text-green-900 leading-relaxed overflow-x-auto">
        <MathText>{sol}</MathText>
      </div>
    </div>
  )
}

// ── Hint Box ─────────────────────────────────────────────────────
export function HintBox({ hint }) {
  const [open, setOpen] = useState(false)
  if (!hint) return null
  return (
    <div className="mb-3">
      <button onClick={() => setOpen(o => !o)}
        className="text-xs font-bold text-amber-700 bg-amber-50 border-2 border-amber-200 hover:bg-amber-100 px-3 py-1.5 rounded-xl transition-colors">
        💡 {open ? 'Ẩn gợi ý' : 'Xem gợi ý'}
      </button>
      {open && (
        <div className="mt-2 bg-amber-50 border-2 border-amber-200 rounded-xl p-3 text-sm text-amber-900 slide-up">
          <MathText>{hint}</MathText>
        </div>
      )}
    </div>
  )
}

// ── Multiple Choice ───────────────────────────────────────────────
export function MultipleChoice({ question, onAnswer, answered }) {
  const [sel, setSel] = useState(null)
  const LETTERS = ['A','B','C','D']

  function pick(i) {
    if (answered) return
    setSel(i); onAnswer(i === question.ans, question)
  }

  function cls(i) {
    if (!answered) return sel===i
      ? 'border-blue-400 bg-blue-50 scale-[1.01]'
      : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 hover:scale-[1.01] cursor-pointer'
    if (i === question.ans) return 'border-green-400 bg-green-50'
    if (i === sel) return 'border-red-400 bg-red-50 shake'
    return 'border-gray-100 bg-gray-50 opacity-40'
  }

  function lCls(i) {
    if (!answered) return sel===i ? 'bg-blue-500 text-white' : 'border-2 border-gray-300 text-gray-500'
    if (i===question.ans) return 'bg-green-500 text-white'
    if (i===sel) return 'bg-red-500 text-white'
    return 'border-2 border-gray-200 text-gray-300'
  }

  return (
    <div>
      <div className="text-sm font-bold text-gray-800 leading-relaxed mb-4">
        <MathText>{question.q}</MathText>
      </div>
      <div className="flex flex-col gap-2 mb-2">
        {question.opts.map((opt, i) => (
          <button key={i} onClick={() => pick(i)}
            className={`flex items-center gap-3 p-3 rounded-2xl border-2 text-sm text-left transition-all ${cls(i)}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 transition-all ${lCls(i)}`}>
              {LETTERS[i]}
            </span>
            <span className="text-gray-700 font-medium"><MathText>{opt}</MathText></span>
            {answered && i===question.ans && <span className="ml-auto text-green-600 text-xl">✓</span>}
            {answered && i===sel && i!==question.ans && <span className="ml-auto text-red-500 text-xl">✗</span>}
          </button>
        ))}
      </div>
      <SolutionBox sol={question.sol} visible={answered} />
    </div>
  )
}

// ── True/False ────────────────────────────────────────────────────
export function TrueFalse({ question, onAnswer, answered }) {
  const [picks, setPicks] = useState({})

  function pick(i, val) {
    if (answered) return
    setPicks(p => ({ ...p, [i]: val }))
  }

  function submit() {
    if (answered) return
    const ok = question.stmts.every((s, i) => picks[i] === s.c)
    onAnswer(ok, question)
  }

  function itemCls(i) {
    if (!answered) return 'bg-white border-gray-200'
    return picks[i]===question.stmts[i].c ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
  }

  const allPicked = Object.keys(picks).length >= question.stmts.length

  return (
    <div>
      <p className="text-sm font-bold text-gray-700 mb-3">Xác định mỗi mệnh đề là <span className="text-green-600">Đúng</span> hay <span className="text-red-500">Sai</span>:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
        {question.stmts.map((s, i) => (
          <div key={i} className={`p-3 rounded-2xl border-2 transition-colors ${itemCls(i)}`}>
            <div className="text-sm text-gray-700 mb-2 leading-relaxed font-medium">
              <MathText>{s.s}</MathText>
            </div>
            <div className="flex gap-2">
              {[true, false].map(val => (
                <button key={String(val)} onClick={() => pick(i, val)} disabled={answered}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-black border-2 transition-all disabled:opacity-60 ${
                    picks[i]===val
                      ? val ? 'bg-green-500 text-white border-green-500' : 'bg-red-500 text-white border-red-500'
                      : val ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' : 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
                  }`}>
                  {val ? '✓ Đúng' : '✗ Sai'}
                  {answered && s.c===val && ' 🎯'}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!answered && (
        <button onClick={submit} disabled={!allPicked}
          className="btn btn-primary w-full disabled:opacity-40">
          ✅ Kiểm tra
        </button>
      )}
      <SolutionBox sol={question.sol} visible={answered} />
    </div>
  )
}

// ── Short Answer ──────────────────────────────────────────────────
function norm(s) { return String(s).trim().toLowerCase().replace(/\s+/g,'').replace(/°/g,'') }

export function ShortAnswer({ question, onAnswer, answered }) {
  const [val, setVal] = useState('')
  const [res, setRes] = useState(null)

  function check() {
    if (answered || !val.trim()) return
    const ok = norm(val)===norm(question.ans) || (question.alts??[]).some(a=>norm(val)===norm(a))
    setRes(ok); onAnswer(ok, question)
  }

  return (
    <div>
      <div className="text-sm font-bold text-gray-800 leading-relaxed mb-4"><MathText>{question.q}</MathText></div>
      <div className="flex gap-2 mb-2">
        <input type="text" value={val} onChange={e=>setVal(e.target.value)}
          onKeyDown={e=>e.key==='Enter'&&check()} disabled={answered}
          placeholder={question.placeholder ?? 'Nhập đáp án...'}
          className={`flex-1 px-4 py-2.5 rounded-2xl border-2 text-sm font-medium outline-none transition-colors disabled:opacity-70 ${
            res===null ? 'border-gray-200 focus:border-blue-400'
            : res ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'
          }`} />
        <button onClick={check} disabled={answered||!val.trim()}
          className="btn btn-primary px-5 disabled:opacity-40">Kiểm tra</button>
      </div>
      {answered && (
        <p className={`text-xs font-bold mb-1 ${res ? 'text-green-600' : 'text-red-600'}`}>
          {res ? '🎉 Chính xác!' : `❌ Đáp án đúng: ${question.ans}`}
        </p>
      )}
      <SolutionBox sol={question.sol} visible={answered} />
    </div>
  )
}

// ── Essay ─────────────────────────────────────────────────────────
export function EssayAnswer({ question, level, onAnswer, answered }) {
  const [text, setText] = useState('')
  const [sub, setSub] = useState(false)
  const showHint = level==='gioi'||level==='xs'

  function submit() {
    if (answered) return
    setSub(true); onAnswer(true, question)
  }

  return (
    <div>
      <div className="text-sm font-bold text-gray-800 leading-relaxed mb-4"><MathText>{question.q}</MathText></div>
      {showHint && <HintBox hint={question.hint} />}
      <textarea value={text} onChange={e=>setText(e.target.value)} disabled={sub}
        placeholder="Trình bày lời giải của bạn tại đây..."
        className="w-full min-h-[110px] p-3 rounded-2xl border-2 border-gray-200 text-sm font-medium text-gray-700 outline-none focus:border-purple-400 transition-colors resize-y disabled:opacity-60 font-mono mb-2" />
      <div className="flex gap-2">
        {!sub
          ? <button onClick={submit} disabled={!text.trim()} className="btn btn-primary flex-1 disabled:opacity-40">📤 Nộp bài</button>
          : <div className="flex-1 py-2.5 bg-green-50 text-green-700 text-sm font-bold rounded-2xl text-center border-2 border-green-200">✅ Đã nộp — xem lời giải mẫu</div>
        }
      </div>
      <SolutionBox sol={question.sol} visible={answered} />
    </div>
  )
}
