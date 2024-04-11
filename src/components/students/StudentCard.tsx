import { useAppDispatch } from '../../hooks/ReduxHooks';
import { useContext } from 'react';
import { toggleUserPanel } from '../../store/reducers/getUserDetail/apiGetUserDetail';
import { IStudentList } from '../../interfaces/interfaces';
import { SelectedStudentIdContext } from '../../context/StudentIdContext';

const StudentCard = ({ fullname, photo, subtitle, tags, id }: IStudentList) => {
  const dispatch = useAppDispatch();
  const { setStudentUUID } = useContext(SelectedStudentIdContext);

  const handleUserDetailToggler = () => {
    dispatch(toggleUserPanel());
  };
  const handleStudentSelect = () => {
    // el id del usuario
    setStudentUUID(id);
  };

  return (
    <div
      className="flex max-w-md cursor-pointer flex-col gap-3 rounded-2xl px-6 py-4 hover:bg-gray-4-base"
      onClick={() => {
        handleUserDetailToggler(), handleStudentSelect();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleUserDetailToggler();
        }
      }}
      tabIndex={0}
    >
      <div className="flex gap-5">
        <div className="flex-none">
          <img
            src={photo}
            alt={`Foto de ${fullname}`}
            className="w-20 rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <div className="text-xl font-bold leading-5 text-black-3">
            {fullname}
          </div>
          <div className="leading-5 text-gray-3">{subtitle}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {tags?.map((tag) => (
          <span
            key={tag.id}
            className="rounded-md bg-gray-3 bg-opacity-30 px-2 py-1 text-xs text-black-2"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
