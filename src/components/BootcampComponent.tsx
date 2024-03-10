import medalla from '../assets/img/medal-dynamic-color.png'; 
const BootcampComponent = () => {
  return (
    <div>
       <h1 className="text-start font-bold mb-5 mt-8">Datos del bootcamp</h1>
      <div className="relative bg-gray-4-base w-475 h-113 mt-4274 ml-6953 flex items-center rounded-md shadow-custom">
        <img src={medalla} alt="Medalla" className="w-66 h-66 ml-6967" />
        <div className="w-[321px] h-[63px]">
          <h2 className="font-bold text-lg">Full-stack PHP</h2>
          <p className="font-poppins font-semibold text-left text-base leading-5 mb-5">Finalizado el 12 de noviembre de 2023</p>
        </div>
      </div>
    </div>
  );
};

export default BootcampComponent;