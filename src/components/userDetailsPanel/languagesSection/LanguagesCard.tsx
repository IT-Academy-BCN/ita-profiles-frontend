const LanguagesCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-lg font-bold">Idiomas</h3>
      <div className="flex flex-col gap-6">
        <p className="text-sm font-semibold text-black">
          Inglés · Intermedio
        </p>
        <p className="text-sm font-semibold text-black">
          Francés · Básico
        </p>
      </div>
    </div>
  );
};

export default LanguagesCard;