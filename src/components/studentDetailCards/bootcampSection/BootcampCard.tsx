import medal from '../../../assets/img/medal-dynamic-color.png';
const BootcampCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold">Datos del bootcamp</p>
      <div className="flex items-center gap-1 rounded-md bg-gray-5-background p-5 shadow-[0_4px_0_0_rgba(0,0,0,0.25)]">
        <img src={medal} alt="Medal" className="w-16" />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold leading-tight text-black">
            Full-stack PHP
          </h2>
          <p className="text-base font-semibold text-black-3">
            Finalizado el 12 de noviembre de 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootcampCard;
