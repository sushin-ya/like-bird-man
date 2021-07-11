import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function One() {
  let line = useRef(null);
  useEffect(() => {
    gsap.fromTo(line, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, [line]);
  return (
    <section className='one'>
      <div className='text'>
        <div ref={(el) => (line = el)} className='line'>
          IT COMES DOWN TO THE RAIN, THE SUNLIGHT, THE TRAFFIC, THE NIGHTS AND
          THE DAYS OF THE YEARS, THE FACES.
        </div>
      </div>
    </section>
  );
}
