import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Two() {
  let two = useRef(null);
  let text = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: two,
        start: 'top top',
        end: 'bottom center',
        markers: true,
      },
    });
    tl.fromTo(text, { opacity: 0 }, { opacity: 1 });
  }, [text]);

  return (
    <section className='two' ref={(el) => (two = el)}>
      <div className='text' ref={(el) => (text = el)}>
        AS THE POEMS GO INTO THE THOUSANDS YOU REALIZE THAT YOU'VE CREATED VERY
        LITTLE.
      </div>
    </section>
  );
}
