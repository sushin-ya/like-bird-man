import { Fragment } from 'react';

import Title from '../components/Title';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';

export default function Home() {
  return (
    <Fragment>
      <Title />
      <One />
      <Two />
      <Three />
    </Fragment>
  );
}
