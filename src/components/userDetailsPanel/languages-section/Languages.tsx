import pencil from '../../../assets/svg/pencil.svg';
import remote from '../../../assets/svg/remote.svg';

const Languages = () => {
  return (
    <>
      <div className="mb-2 flex justify-between gap-1">
        <h4 className="font-bold text-black-3">Idiomas</h4>
        <button className="hover:scale-125">
          <img src={pencil} alt="pencil icon" />
        </button>
      </div>

      <div className="flex flex-col">
        {/* comp indivi de idiomaCard?  */}
        <p className="my-1 font-medium">Inglés · Intermedio</p>
        <p className="my-1 font-medium">Francés · Básico</p>
      </div>

      <h4 className="my-3 font-bold text-black-3">Modalidad</h4>
      <div className="flex gap-2">
        <img src={remote} alt="remote work" />
        <p className="font-medium">Remoto</p>
      </div>
    </>
  );
};

export default Languages;
