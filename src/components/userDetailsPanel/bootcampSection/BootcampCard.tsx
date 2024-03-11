import medal from '../../../assets/img/medal-dynamic-color.png';
const BootcampCard:React.FC= () => {
  return (
    <div>
       <h1 className="font-bold pb-5 pt-8 text-lg">Datos del bootcamp</h1>
      <div className="bg-gray-5-background shadow-[0_4px_0_0_rgba(0,0,0,0.25)] flex items-center rounded-md gap-1 p-5">
        <img src={medal} alt="Medal" className="w-20" />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold leading-tight text-black">Full-stack PHP</h2>
          <p className="font-semibold text-base text-black-3">Finalizado el 12 de noviembre de 2023</p>
        </div>
      </div>
    </div>
  );
};

export default BootcampCard;