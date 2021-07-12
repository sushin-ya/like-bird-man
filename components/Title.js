import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { textAnimation } from '../utility/textAnimation';

export default function Title() {
  let title = useRef(null);
  let text = useRef(null);
  let icon = useRef(null);
  const content = 'AS THE POEMS GO';
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: 'top top',
        end: 'bottom center',
      },
    });
    textAnimation(tl, content, 'title');
    tl.fromTo(icon, { opacity: 0 }, { opacity: 1 });
  }, [text]);
  return (
    <section className='title' ref={(el) => (title = el)}>
      <div ref={(el) => (text = el)}>
        {content.split('').map((value, index) => (
          <span
            key={index}
            className={value !== ' ' ? 'title-' + value.toLowerCase() : null}
          >
            {value}
          </span>
        ))}
      </div>
      <a
        href='https://github.com/tsuka-ryu/like-bird-man'
        ref={(el) => (icon = el)}
      >
        <FontAwesomeIcon icon={faGithub} className='github' />
      </a>
    </section>
  );
}
