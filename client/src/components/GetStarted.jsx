import styles from '../style';

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-black hover:bg-green-700 cursor-pointer shadow shadow-black text-white font-light py-2 px-4 rounded w-[160px] h-[40px]`}
    >
      Get Started
    </div>
  );
};

export default GetStarted;
