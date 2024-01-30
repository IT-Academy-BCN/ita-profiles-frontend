import folder from '../../../assets/img/folder.png';
const Resources = () => {
  return (
    <div className="bg-ita-wiki flex w-full items-start justify-between rounded-md p-4 md:w-96">
      <div className="flex flex-col">
        <p className="text-xl text-white">0</p>
        <p className="text-white">Recursos Subidos</p>
        <p className="font-light text-white">ita-wiki</p>
      </div>
      <div className="h-8 w-8">
        <img src={folder} alt="folder" className="h-full w-full " />
      </div>
    </div>
  );
};

export default Resources;
