import target from '../../../assets/img/target.png';

const ChallengesCard = () => {
  return (
    <div className="flex w-full items-start justify-between rounded-md bg-ita-challenges p-4 md:w-72">
      <div className="flex flex-col">
        <p className="text-2xl text-white">0</p>
        <p className="text-white">Retos completados</p>
        <p className="mt-2 text-sm font-light text-white">ita-challenges</p>
      </div>
      <div className="h-8 w-8">
        <img src={target} alt="folder" className="h-full w-full " />
      </div>
    </div>
  );
};

export default ChallengesCard;
