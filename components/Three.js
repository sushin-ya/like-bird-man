import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { textAnimation } from '../utility/textAnimation';

export default function Two() {
  let three = useRef(null);
  let text = useRef(null);
  let author = useRef(null);
  const content =
    'LEAVING THIS WILL BE EASIER THAN LIVING IT, TYPING ONE MORE LINE NOW AS A MAN PLAYS A PIANO THROUGH THE RADIO, THE BEST WRITERS HAVE SAID VERY LITTLE AND THE WORST, FAR TOO MUCH.';
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: three,
        start: 'top top',
        end: 'center center',
        // markers: true,
      },
    });
    textAnimation(tl, content, 'three');
    tl.fromTo(author, { opacity: 0 }, { opacity: 1, duration: 2, delay: 1 });
  }, [text]);
  return (
    <section className='three' ref={(el) => (three = el)}>
      <div className='text' ref={(el) => (text = el)}>
        {content.split('').map((value, index) => (
          <span
            key={index}
            className={value != ' ' ? 'three-' + value.toLowerCase() : null}
          >
            {value}
          </span>
        ))}
      </div>
      <div className='author' ref={(el) => (author = el)}>
        by CHARLES BUKOWSKI
      </div>
    </section>
  );
}
