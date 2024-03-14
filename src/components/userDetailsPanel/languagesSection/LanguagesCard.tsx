const LanguagesCard: React.FC = () => {
  return (
    <div>
      <h3 className="pb-6 pt-8 text-lg font-bold">Idiomas</h3>
      <div className="flex flex-col">
        <p className="text-sm font-semibold leading-tight text-black">
          Inglés · Intermedio
        </p>
        <p className="pt-4 text-sm font-semibold leading-tight text-black">
          Francés · Básico
        </p>
      </div>
    </div>
  );
};

export default LanguagesCard;