import { useState } from 'react'
import Lightbox from './Lightbox'
import './GalerieBtn.css'

export default function GalerieBtn({ images }) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  if (!images || images.length === 0) return null

  const openAt = i => { setIdx(i); setOpen(true) }
  const prev = () => setIdx(i => Math.max(0, i - 1))
  const next = () => setIdx(i => Math.min(images.length - 1, i + 1))

  return (
    <>
      <div className="galerie-block">
        <div className="galerie-thumbs">
          {images.slice(0, 4).map((src, i) => (
            <button key={i} className="galerie-thumb" onClick={() => openAt(i)} aria-label={`Ouvrir photo ${i + 1}`}>
              <img src={src} alt="" loading="lazy" />
              {i === 3 && images.length > 4 && (
                <div className="galerie-thumb-more">+{images.length - 4}</div>
              )}
            </button>
          ))}
        </div>
        <button className="galerie-cta" onClick={() => openAt(0)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          Voir les {images.length} photos
        </button>
      </div>

      {open && (
        <Lightbox images={images} index={idx} onClose={() => setOpen(false)} onPrev={prev} onNext={next} />
      )}
    </>
  )
}
