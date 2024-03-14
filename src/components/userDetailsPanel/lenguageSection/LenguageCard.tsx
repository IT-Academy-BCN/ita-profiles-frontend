const LenguageCard: React.FC = () => {
  return (
    <div>
      <h1 className="pb-6 pt-8 text-lg font-bold">Idiomas</h1>
      <div className="flex flex-col">
        <h2 className="text-sm font-semibold leading-tight text-black">
          Inglés · Intermedio
        </h2>
        <h2 className="pt-4 text-sm font-semibold leading-tight text-black">
          Francés · Básico
        </h2>
      </div>
    </div>
  );
};

export default LenguageCard;