import { useEffect, useCallback } from 'react'
import './Lightbox.css'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback(e => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div className="lb-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lb-close" onClick={onClose} aria-label="Fermer">✕</button>

      <button
        className="lb-nav lb-nav--prev"
        onClick={e => { e.stopPropagation(); onPrev() }}
        aria-label="Photo précédente"
        disabled={index === 0}
      >‹</button>

      <div className="lb-img-wrap" onClick={e => e.stopPropagation()}>
        <img src={images[index]} alt={`Photo ${index + 1} sur ${images.length}`} className="lb-img" />
        <div className="lb-counter">{index + 1} / {images.length}</div>
      </div>

      <button
        className="lb-nav lb-nav--next"
        onClick={e => { e.stopPropagation(); onNext() }}
        aria-label="Photo suivante"
        disabled={index === images.length - 1}
      >›</button>
    </div>
  )
}
