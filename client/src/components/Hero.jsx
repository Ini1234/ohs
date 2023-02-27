import styles from '../style';
import GreenPalette from './GreenPalette';

const Hero = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex ${styles.flexStart} flex-col px-6 sm:hidden md:px-20 lgl:px-20`}
      >
        <GreenPalette />
      </div>
    </section>
  );
};

export default Hero;
