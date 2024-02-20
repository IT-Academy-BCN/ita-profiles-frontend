import { useState } from 'react';
import thumbUp from '../../../assets/svg/thumbsup.svg';
import thumbUpPink from '../../../assets/svg/thumbsupPink.svg';
import { IstepsProps } from '../../../interfaces/interfaces';

const StepsProgress = ({ step }: IstepsProps) => {
  // usestate temporal. for testing purposes. shouldnt be final!!
  const [thumbup, setThumbup] = useState(false);
  return (
    <div className="my-1 flex flex-col px-4">
      <button
        onClick={() => setThumbup(!thumbup)}
        className={`${
          thumbup ? 'text-primary' : 'text-gray-2'
        } flex items-center`}
      >
        <img src={`${thumbup ? thumbUpPink : thumbUp}`} alt="thumb up icon" />
        {step}
      </button>
    </div>
  );
};

export default StepsProgress;
