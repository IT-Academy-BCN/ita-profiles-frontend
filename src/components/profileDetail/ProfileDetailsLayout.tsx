import { useContext, useEffect } from 'react';
import { SmallScreenContext } from '../../context/SmallScreenContext';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import type { TSmallScreenContext } from '../../interfaces/interfaces';
import { toggleUserPanel } from '../../store/reducers/getUserDetail/apiGetUserDetail';
import ProfileDetailsContent from './ProfileDetailsContent';

const ProfileDetailsLayout: React.FC = () => {
  // aqui cogemos el estado que viene por default "false".
  const isPanelOpen = useAppSelector(
    (state) => state.ShowUserReducer.isUserPanelOpen,
  );
  const dispatch = useAppDispatch();

  // aquí transformamos el estado a true o false con la action.
  const handleIsPanelOpen = () => {
    dispatch(toggleUserPanel());
  };

  const { isMobile, setIsMobile }: TSmallScreenContext =
    useContext(SmallScreenContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  const mobileScreen = isMobile
    ? 'modal modal-open md:hidden'
    : 'max-h-[90vh] overflow-hidden overflow-y-auto md:block';

  return (
    <div className={`${isPanelOpen ? mobileScreen : 'hidden'}`}>
      <ProfileDetailsContent handleIsPanelOpen={handleIsPanelOpen} />
    </div>
  );
};

export default ProfileDetailsLayout;
