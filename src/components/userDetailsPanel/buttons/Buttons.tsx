import bookmark from '../../../assets/svg/bookmark.svg';
import email from '../../../assets/svg/email.svg';

const Buttons = () => {
  return (
    // not good. Make a single component with just 1 button that through props pass the img svg  and allows to change classnames outside as props.
    <>
      <button className="h-16 w-16 rounded-xl border-2 border-[#808080]">
        <img src={bookmark} alt="bookmark icon" className="h-6 w-16" />
      </button>
      <button className="h-16 w-16  rounded-xl bg-pinkit hover:bg-pinkit_hover active:bg-pinkit_active">
        <img src={email} alt="email icon" className="h-6 w-16" />
      </button>
    </>
  );
};

export default Buttons;
