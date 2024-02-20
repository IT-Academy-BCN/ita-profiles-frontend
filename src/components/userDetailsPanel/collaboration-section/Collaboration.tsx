import pencil from '../../../assets/svg/pencil.svg';
import Challenges from './Challenges';
import Resources from './Resources';
import { IisEdit } from '../../../interfaces/interfaces';

const Collaboration = ({ isEdit }: IisEdit) => {
  return (
    <>
      <div className="mb-2 flex justify-between gap-1">
        <h4 className="font-bold text-black-3">Colaboración</h4>
        {isEdit && (
          <button className="hover:scale-125">
            <img src={pencil} alt="pencil icon" />
          </button>
        )}
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Resources />
        <Challenges />
      </div>
    </>
  );
};

export default Collaboration;
