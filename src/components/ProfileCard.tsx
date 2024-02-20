import { useAppDispatch } from '../hooks/ReduxHooks';
import { toggleUserPanel } from '../store/reducers/getUserDetail/apiGetUserDetail';
import { IStudentList } from '../interfaces/interfaces';

const ProfileCard = ({ fullname, photo, subtitle, tags }: IStudentList) => {
  const dispatch = useAppDispatch();

  const handleUserDetailToggler = () => {
    dispatch(toggleUserPanel());
  };

  return (
    <div className="mb-4 mr-8 flex w-full cursor-pointer rounded-2xl p-3 hover:bg-[#F2F2F2] md:max-w-[380px]">
      <div
        className="flex w-full flex-col"
        onClick={handleUserDetailToggler}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUserDetailToggler();
          }
        }}
        tabIndex={0}
      >
        <div className="flex items-center">
          <div>
            <img
              src={photo}
              alt={`Foto de ${fullname}`}
              className="h-16 w-full rounded-md"
            />
          </div>
          <div className="ml-4 flex flex-col">
            <div className="mb-2 text-lg font-bold leading-4 text-black">
              {fullname}
            </div>
            <div className="leading-4 text-gray-3">{subtitle}</div>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-1 text-xs">
          {tags?.map((tag) => (
            <span key={tag.id} className="rounded-md bg-gray-4-base px-3 py-1 ">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
