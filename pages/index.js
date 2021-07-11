import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <Fragment>
      <section className='title'>
        <div>AS THE POEMS GO</div>
        <a href='/#'>
          <FontAwesomeIcon icon={faGithub} className='github' />
        </a>
      </section>
      <section className='one'>
        <div className='text'>
          IT COMES DOWN TO THE RAIN, THE SUNLIGHT, THE TRAFFIC, THE NIGHTS AND
          THE DAYS OF THE YEARS, THE FACES.
        </div>
      </section>
      <section className='two'>
        <div className='text'>
          AS THE POEMS GO INTO THE THOUSANDS YOU REALIZE THAT YOU'VE CREATED
          VERY LITTLE.
        </div>
      </section>
      <section className='three'>
        <div className='text'>
          LEAVING THIS WILL BE EASIER THAN LIVING IT, TYPING ONE MORE LINE NOW
          AS A MAN PLAYS A PIANO THROUGH THE RADIO, THE BEST WRITERS HAVE SAID
          VERY LITTLE AND THE WORST, FAR TOO MUCH.
        </div>
        <div className='author'>by CHARLES BUKOWSKI</div>
      </section>
    </Fragment>
  );
}
