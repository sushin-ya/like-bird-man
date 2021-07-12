import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { textAnimation } from '../utility/textAnimation';

export default function One() {
  let one = useRef(null);
  let text = useRef(null);
  const content =
    "AS THE POEMS GO INTO THE THOUSANDS YOU REALIZE THAT YOU'VE CREATED VERY LITTLE.";
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: one,
        start: 'top top',
        end: 'bottom center',
      },
    });
    textAnimation(tl, content, 'one');
  }, [one]);

  return (
    <section className='one' ref={(el) => (one = el)}>
      <div className='text' ref={(el) => (text = el)}>
        {content.split('').map((value, index) => (
          <span
            key={index}
            className={value !== ' ' ? 'one-' + value.toLowerCase() : null}
          >
            {value}
          </span>
        ))}
      </div>
    </section>
  );
}
