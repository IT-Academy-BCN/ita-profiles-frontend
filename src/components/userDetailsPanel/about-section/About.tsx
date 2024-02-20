import { useState } from 'react';
import dog from '../../../assets/img/stud_1.png';
import github from '../../../assets/svg/github.svg';
import linkedin from '../../../assets/svg/linkedin.svg';
import pencil from '../../../assets/svg/pencil.svg';
import ModalAbout from './ModalAbout';
import Buttons from '../buttons/Buttons';
import { IisEdit } from '../../../interfaces/interfaces';

const About = ({ isEdit }: IisEdit) => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleAboutModal = () => {
    setIsAboutModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex gap-2">
        {/* user img */}
        <div className="min-w-fit">
          <img
            src={dog}
            alt="image here"
            className="h-full max-w-full rounded-md"
          />
        </div>
        {/* name - rol- links */}
        <div className="flex h-full w-full flex-col">
          <div className="text-lg font-bold text-black">Your Name</div>
          <div>Your role</div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="flex items-center gap-1"
            >
              <img src={github} alt="github icon" />
              <span className="text-gray-3">Github</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-1"
            >
              <img src={linkedin} alt="linkedin icon" />
              <span className="text-gray-3">Linkedin</span>
            </a>
          </div>
        </div>

        {isEdit ? (
          <button
            className="min-w-fit hover:scale-125"
            onClick={handleAboutModal}
          >
            <img src={pencil} alt="pencil icon" />
          </button>
        ) : (
          <Buttons />
        )}

        {/* <button
          className="min-w-fit hover:scale-125"
          onClick={handleAboutModal}
        >
          <img src={pencil} alt="pencil icon" />
        </button> */}
      </div>
      {/* About - description. */}
      <h4 className="mt-6 font-bold text-black-3">About</h4>
      <div className="">
        {/* ### ISSUE
          flex flex-col ???
          Div is empty until we know how to ->
          Integrate the Ver Mas / Ver Menos button  */}
        <p className="max-h-12 overflow-hidden">
          <span className="text-red-500">
            overflowhidden small issue: how to do a see more button at the end
            of the text!!! max-characters?{' '}
          </span>{' '}
          Lorem ipsum dolor, sit asum, dolor sit amet consectetur adipisicing
          elit. Officiis, ipsam!
        </p>
        {/* <button className="rounded-lg border border-gray-3 p-1">
          ... ver más
        </button> */}
      </div>

      {isAboutModalOpen && <ModalAbout onClose={handleAboutModal} />}
    </>
  );
};

export default About;
