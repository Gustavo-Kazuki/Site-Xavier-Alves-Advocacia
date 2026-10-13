'use client';

import { useEffect, useRef, useState } from 'react';

export function OfficeSlideshow() {
  const firstImage = useRef<HTMLImageElement>(null);
  const secondImage = useRef<HTMLImageElement>(null);
  const [showSecond, setShowSecond] = useState(false);
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [secondLoaded, setSecondLoaded] = useState(false);

  // Cached images may finish loading before React attaches the onLoad handlers.
  useEffect(() => {
    if (firstImage.current?.complete && firstImage.current.naturalWidth > 0) {
      setFirstLoaded(true);
    }
    if (secondImage.current?.complete && secondImage.current.naturalWidth > 0) {
      setSecondLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!firstLoaded || !secondLoaded) return;
    const interval = window.setInterval(() => setShowSecond((current) => !current), 3000);
    return () => window.clearInterval(interval);
  }, [firstLoaded, secondLoaded]);

  return (
    <figure
      className={`office-image office-slideshow parallax-image${showSecond ? ' office-slideshow--second-active' : ''}`}
      role="img"
      aria-label="Dayane Xavier e Dayanne Alves em atendimento no escritório"
    >
      <img
        ref={firstImage}
        src="/images/escritorio-dayane-xavier02.webp"
        width={1600}
        height={1600}
        alt=""
        loading="lazy"
        decoding="async"
        onLoad={() => setFirstLoaded(true)}
      />
      <img
        ref={secondImage}
        className="office-slideshow__second"
        src="/images/escritorio-dayanne-alves.webp"
        width={1597}
        height={1600}
        alt=""
        loading="lazy"
        decoding="async"
        onLoad={() => setSecondLoaded(true)}
      />
      <figcaption>XAVIER & ALVES · ADVOCACIA</figcaption>
    </figure>
  );
}
