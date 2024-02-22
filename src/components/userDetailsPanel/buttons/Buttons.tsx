import bookmark from '../../../assets/svg/bookmark.svg';
import email from '../../../assets/svg/email.svg';

const Buttons = () => {
  return (
    // not good. Make a single component with just 1 button that through props pass the img svg  and allows to change classnames outside as props.
    <>
      <button className="h-12 w-12 rounded-2xl border-2 border-gray">
        <img src={bookmark} alt="bookmark icon" className="h-5 w-16" />
      </button>
      <button className="h-12 w-12  rounded-2xl bg-primary hover:bg-primary-hover active:bg-primary-active">
        <img src={email} alt="email icon" className="h-5 w-16" />
      </button>
    </>
  );
};

export default Buttons;
