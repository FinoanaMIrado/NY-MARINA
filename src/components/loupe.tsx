import { useEffect, useRef, useState } from "react";

/**
 * Curseur "loupe de recherche" : une lentille qui suit la souris et
 * affiche le contenu en dessous en couleurs inversées.
 * Désactivée sur les écrans tactiles.
 */
const SIZE = 120;

export function Loupe() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;
    setEnabled(true);
    document.documentElement.classList.add("loupe-active");

    let x = -200, y = -200, cx = x, cy = y, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.25;
      cy += (y - cy) * 0.25;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cx - SIZE / 2}px, ${cy - SIZE / 2}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => { x = e.clientX; y = e.clientY; setVisible(true); };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.classList.remove("loupe-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="loupe"
      data-visible={visible}
      data-pressed={pressed}
      style={{ width: SIZE, height: SIZE }}
    >
      <div className="loupe-lens" />
      <div className="loupe-handle" />
    </div>
  );
}
