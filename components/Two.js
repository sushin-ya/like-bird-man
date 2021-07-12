import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { textAnimation } from '../utility/textAnimation';

export default function Two() {
  let two = useRef(null);
  let text = useRef(null);
  const content =
    "AS THE POEMS GO INTO THE THOUSANDS YOU REALIZE THAT YOU'VE CREATED VERY LITTLE.";
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: two,
        start: 'top top',
        end: 'bottom center',
      },
    });
    textAnimation(tl, content, 'two');
  }, [text]);

  return (
    <section className='two' ref={(el) => (two = el)}>
      <div className='text' ref={(el) => (text = el)}>
        {content.split('').map((value, index) => (
          <span
            key={index}
            className={value !== ' ' ? 'two-' + value.toLowerCase() : null}
          >
            {value}
          </span>
        ))}
      </div>
    </section>
  );
}
