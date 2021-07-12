import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Title() {
  let title = useRef(null);
  let text = useRef(null);
  let icon = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: 'top top',
        end: 'bottom center',
        markers: true,
      },
    });
    tl.fromTo(text, { opacity: 0 }, { opacity: 1 });
    tl.fromTo(icon, { opacity: 0 }, { opacity: 1 });
  }, [text]);
  return (
    <section className='title' ref={(el) => (title = el)}>
      <div ref={(el) => (text = el)}>AS THE POEMS GO</div>
      <a href='/#' ref={(el) => (icon = el)}>
        <FontAwesomeIcon icon={faGithub} className='github' />
      </a>
    </section>
  );
}
