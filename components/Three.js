import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Two() {
  let three = useRef(null);
  let text = useRef(null);
  let author = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: three,
        start: 'top top',
        end: 'bottom center',
        markers: true,
      },
    });
    tl.fromTo(text, { opacity: 0 }, { opacity: 1 });
    tl.fromTo(author, { opacity: 0 }, { opacity: 1 });
  }, [text]);
  return (
    <section className='three' ref={(el) => (three = el)}>
      <div className='text' ref={(el) => (text = el)}>
        LEAVING THIS WILL BE EASIER THAN LIVING IT, TYPING ONE MORE LINE NOW AS
        A MAN PLAYS A PIANO THROUGH THE RADIO, THE BEST WRITERS HAVE SAID VERY
        LITTLE AND THE WORST, FAR TOO MUCH.
      </div>
      <div className='author' ref={(el) => (author = el)}>
        by CHARLES BUKOWSKI
      </div>
    </section>
  );
}
