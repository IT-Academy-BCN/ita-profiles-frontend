import UserDetailsContent from './UserDetailsContent';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { toggleUserPanel } from '../../store/reducers/getUserDetail/apiGetUserDetail';
import { useEffect, useState } from 'react';

const UserDetails = () => {
  // aqui cogemos el estado que viene por default "false".
  const isPanelOpen = useAppSelector(
    (state) => state.ShowUserReducer.isUserPanelOpen,
  );
  const dispatch = useAppDispatch();

  // aquí transformamos el estado a true o false con la action.
  const handleIsPanelOpen = () => {
    dispatch(toggleUserPanel());
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isPanelOpen
            ? isMobile
              ? 'modal modal-open md:hidden'
              : 'max-h-[90vh] overflow-hidden overflow-y-auto md:block'
            : 'hidden'
        } mr-2 px-2 pt-4 `}
      >
        <UserDetailsContent handleIsPanelOpen={handleIsPanelOpen} />
      </div>
    </>
  );
};

export default UserDetails;
