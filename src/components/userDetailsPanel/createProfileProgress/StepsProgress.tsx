import { useState } from 'react';
import thumbUp from '../../../assets/svg/thumbsup.svg';
import thumbUpPink from '../../../assets/svg/thumbsupPink.svg';
import { IstepsProps } from '../../../interfaces/interfaces';

const StepsProgress = ({ step }: IstepsProps) => {
  // usestate temporal. for testing purposes. shouldnt be final!!
  const [thumbup, setThumbup] = useState(false);
  return (
    <div className="my-1 flex flex-col px-4">
      <p
        onClick={() => setThumbup(!thumbup)}
        className={`${
          thumbup ? 'text-primary' : 'text-gray-300'
        } flex items-center text-primary`}
      >
        <img
          src={`${thumbup ? thumbUpPink : thumbUp}`}
          alt="thumb up icon"
          sizes=""
        />
        {step}
      </p>
    </div>
  );
};

export default StepsProgress;
