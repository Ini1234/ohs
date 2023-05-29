import styles from '../style';

const LearnMore = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-white border border-black shadow shadow-black hover:bg-green-700 cursor-pointer text-black font-light py-2 px-4 rounded w-[160px] h-[40px]`}
    >
      Learn More
    </div>
  );
};

export default LearnMore;
