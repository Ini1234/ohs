import ContactFields from './ContactFields';

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col p-8'>
      <div>
        <p className='font-[Rufina] font-normal text-base sm:text-lg md:text-2xl text-center mb-6'>
          Get in touch with OneHealthSpace
        </p>
        <p className='font-[Inter] font-normal text-xs sm:text-sm text-center'>
          Are you are an individual or institution looking to learn more about
          how to get started? <br />
          <span className='leading-loose'>
            Please fill out the form below to reach out to our team.
          </span>
        </p>
        <div>
          <ContactFields />
        </div>
      </div>
    </section>
  );
};

export default Contact;
