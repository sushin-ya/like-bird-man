import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Title from '../components/Title';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div>
      <Title />
      <One />
      <Two />
      <Three />
    </div>
  );
}
