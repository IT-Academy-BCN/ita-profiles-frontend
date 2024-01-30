import pencil from '../../../assets/svg/pencil.svg';
import Challenges from './Challenges';
import Resources from './Resources';

const Collaboration = () => {
  return (
    <>
      <div className="mb-2 flex justify-between gap-1">
        <h4 className="font-bold text-black-3">Colaboración</h4>
        <button className="hover:scale-125">
          <img src={pencil} alt="pencil icon" />
        </button>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Resources />
        <Challenges />
      </div>
    </>
  );
};

export default Collaboration;
