import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Title() {
  return (
    <section className='title'>
      <div>AS THE POEMS GO</div>
      <a href='/#'>
        <FontAwesomeIcon icon={faGithub} className='github' />
      </a>
    </section>
  );
}
