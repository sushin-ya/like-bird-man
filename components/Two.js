import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { textAnimation } from '../utility/textAnimation';

export default function Two() {
  let two = useRef(null);
  let text = useRef(null);
  const content =
    'IT COMES DOWN TO THE RAIN, THE SUNLIGHT, THE TRAFFIC, THE NIGHTS AND THE DAYS OF THE YEARS, THE FACES.';
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: two,
        start: 'top top',
        end: 'bottom center',
      },
    });
    textAnimation(tl, content, 'two');
  }, [two]);

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
