import medal from '../assets/img/medal-dynamic-color.png'; 
const Bootcamp = () => {
  return (
    <div>
       <h1 className="text-start font-bold mb-5 mt-8 text-lg">Datos del bootcamp</h1>
      <div className="relative bg-bootcamp flex items-center rounded-md shadow-custom">
        <img src={medal} alt="Medal" className="w-66 h-66 ml-4 mt-6 mb-6 mr-1.25" />
        <div className="h-[63px]">
          <h2 className="font-poppins text-xl font-semibold leading-tight text-left text-black">Full-stack PHP</h2>
          <p className="font-poppins font-semibold text-left text-base mb-5 text-black-3">Finalizado el 12 de noviembre de 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;