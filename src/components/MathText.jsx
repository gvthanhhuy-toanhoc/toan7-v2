import React from 'react'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

export function parseMath(str) {
  if (!str) return null
  const parts = []; let rem = String(str), k = 0
  while (rem.length > 0) {
    const bi = rem.indexOf('$$'), ii = rem.indexOf('$')
    if (bi !== -1 && (ii === -1 || bi <= ii)) {
      if (bi > 0) parts.push(<TextNode key={k++} t={rem.slice(0, bi)} />)
      const e = rem.indexOf('$$', bi + 2)
      if (e === -1) { parts.push(<TextNode key={k++} t={rem} />); break }
      parts.push(<span key={k++} className="block my-1 overflow-x-auto"><BlockMath math={rem.slice(bi+2,e)} /></span>)
      rem = rem.slice(e + 2)
    } else if (ii !== -1) {
      if (ii > 0) parts.push(<TextNode key={k++} t={rem.slice(0, ii)} />)
      const e = rem.indexOf('$', ii + 1)
      if (e === -1) { parts.push(<TextNode key={k++} t={rem} />); break }
      parts.push(<InlineMath key={k++} math={rem.slice(ii+1,e)} />)
      rem = rem.slice(e + 1)
    } else { parts.push(<TextNode key={k++} t={rem} />); break }
  }
  return parts
}

function TextNode({ t }) {
  return (
    <>
      {t.split('\n').map((line, i, arr) => {
        const bold = line.split(/\*\*(.+?)\*\*/)
        return (
          <React.Fragment key={i}>
            {bold.map((p, j) => j%2===1 ? <strong key={j}>{p}</strong> : <span key={j}>{p}</span>)}
            {i < arr.length-1 && <br />}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default function MathText({ children, className = '' }) {
  return <span className={`leading-relaxed ${className}`}>{parseMath(children)}</span>
}
