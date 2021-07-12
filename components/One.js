import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function One() {
  let one = useRef(null);
  let text = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: one,
        start: 'top top',
        end: 'bottom center',
        markers: true,
      },
    });
    tl.fromTo(text, { opacity: 0 }, { opacity: 1 });
  }, [text]);

  return (
    <section className='one' ref={(el) => (one = el)}>
      <div className='text' ref={(el) => (text = el)}>
        IT COMES DOWN TO THE RAIN, THE SUNLIGHT, THE TRAFFIC, THE NIGHTS AND THE
        DAYS OF THE YEARS, THE FACES.
      </div>
    </section>
  );
}
