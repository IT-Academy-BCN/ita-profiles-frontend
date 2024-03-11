import folder from '../../../assets/img/folder.png';
const ResourcesCard = () => {
  return (
    <div className="flex w-full items-start justify-between rounded-md bg-ita-wiki p-4 md:w-72">
      <div className="flex flex-col">
        <p className="text-2xl text-white">0</p>
        <p className="text-white">Recursos subidos</p>
        <p className="mt-2 text-sm font-light text-white">ita-wiki</p>
      </div>
      <div className="h-8 w-8">
        <img src={folder} alt="folder" className="h-full w-full " />
      </div>
    </div>
  );
};

export default ResourcesCard;
