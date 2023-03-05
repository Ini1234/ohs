import styles from './style';
import {
  NavBar,
  About,
  Belt,
  CTA,
  Footer,
  GetStarted,
  Hero,
  Contact,
  Features,
  GreenPalette,
} from './components';

const App = () => {
  return (
    <div className='bg-primary w-full h-screen'>
      <div id='home' className='mb-12'>
        <NavBar />
      </div>
      <div className='mt-15 py-4'>
        <Hero />
      </div>
      <div className='mt-15 md:mt-28 py-4'>
        <About />
      </div>
      <div className='mt-15 md:mt-28 py-4'>
        <Belt />
      </div>
      <div className='mt-8 py-4'>
        <Contact />
      </div>
    </div>
  );
};

export default App;
