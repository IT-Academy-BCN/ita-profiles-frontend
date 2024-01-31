import pencil from '../../../assets/svg/pencil.svg';
import medal from '../../../assets/img/medal.png';
import { IisEdit } from '../../../interfaces/interfaces';
import FormationCard from './FormationCard';
const Bootcamp = ({ isEdit }: IisEdit) => {
  return (
    <>
      <div className="mb-2 flex justify-between gap-1">
        <h4 className="font-bold text-black-3">Datos del bootcamp</h4>
        {isEdit && (
          <button className="hover:scale-125">
            <img src={pencil} alt="pencil icon" />
          </button>
        )}
      </div>
      {/* gray card */}
      <div className="flex h-24 w-full min-w-min items-center justify-start rounded-md bg-gray-4-base px-2 shadow-md shadow-gray-300">
        <div className="h-16 w-16">
          <img src={medal} alt="medal icon" className="h-auto w-full" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Full-Stack PHP</p>
          <p className="text-md">Finalizado el 12 de noviembre de 2023</p>
        </div>
      </div>
      <h4 className="mt-6 font-bold text-black-3">Otra formación</h4>
      <div className="flex flex-col">
        <FormationCard />
        <FormationCard />
      </div>
    </>
  );
};

export default Bootcamp;
