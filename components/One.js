import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { textAnimation } from '../utility/textAnimation';

export default function One() {
  let one = useRef(null);
  let text = useRef(null);
  const content =
    'IT COMES DOWN TO THE RAIN, THE SUNLIGHT, THE TRAFFIC, THE NIGHTS AND THE DAYS OF THE YEARS, THE FACES.';
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: one,
        start: 'top top',
        end: 'bottom center',
      },
    });
    textAnimation(tl, content, 'one');
  }, [text]);

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
