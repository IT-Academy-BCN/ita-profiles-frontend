import target from '../../../assets/img/target.png';

const Challenges = () => {
  return (
    <div className="flex w-full items-start justify-between rounded-md bg-[#F29559] p-4 md:w-96">
      <div className="flex flex-col">
        <p className="text-xl text-white">0</p>
        <p className="text-white">Retos Completados</p>
        <p className="font-light text-white">ita-challenges</p>
      </div>
      <div className="h-8 w-8">
        <img src={target} alt="folder" className="h-full w-full " />
      </div>
    </div>
  );
};

export default Challenges;
