import LoginForm from './LoginForm';
import { circularframe } from '../assets';

const Hero = () => {
  return (
    <section className={`flex w-full`}>
      <div className='w-full flex flex-col-reverse sm:flex-row items-center justify-center'>
        <div>
          <LoginForm />
        </div>
        <div className='flex w-full w-full max-w-[420px] max-h-[420px] lg:max-w-[450px] lg:max-h-[450px]'>
          <img
            src={circularframe}
            alt='space'
            className='object-contain no-repeat p-2 w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
