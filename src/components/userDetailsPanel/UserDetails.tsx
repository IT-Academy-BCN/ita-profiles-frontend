import bookmark from '../../assets/svg/bookmark.svg';
import close from '../../assets/svg/close.svg';
import email from '../../assets/svg/email.svg';
import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { toggleUserPanel } from '../../store/reducers/getUserDetail/apiGetUserDetail';

const UserDetails = () => {
  const isPanelOpen = useAppSelector(
    (state) => state.ShowUserReducer.isUserPanelOpen,
  );
  const dispatch = useAppDispatch();

  const handleIsPanelOpen = () => {
    dispatch(toggleUserPanel());
  };

  return (
    <div
      className={`${
        isPanelOpen ? 'block' : 'hidden'
      } mr-2 max-h-[90vh] px-2 pt-4`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-colortext">Detalle Perfil</h3>
        <div className="cursor-pointer border">
          <button onClick={handleIsPanelOpen}>
            <img src={close} alt="close icon" />
          </button>
        </div>
      </div>
      {/* user bookmark and message */}
      <div className="flex">
        <div>
          <img src="" alt="image here" className="h-16 w-full" />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-lg font-bold text-black">nombreUsu</p>
            <p className="">Full stack</p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-1"
              >
                <img src={github} alt="github icon" />
                <span className="text-gray-400">Github</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-1"
              >
                <img src={linkedin} alt="linkedin icon" />
                <span className="text-gray-400">Linkedin</span>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-16 w-16 rounded-xl border-2 border-[#808080]">
              <img src={bookmark} alt="bookmark icon" className="h-6 w-16" />
            </button>
            <button className="h-16 w-16  rounded-xl bg-pinkit hover:bg-pinkit_hover active:bg-pinkit_active">
              <img src={email} alt="email icon" className="h-6 w-16" />
            </button>
          </div>
        </div>
      </div>
      {/* about */}
      <div>
        <h4 className="text-lg font-bold text-colortext">About</h4>
        <p className="my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro ea
          incidunt cumque perferendis corporis nobis! Deserunt vero quod
          assumenda?
        </p>
        <div>map on each tech.</div>
      </div>

      {/* Proyectos */}
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-colortext">Proyectos</h4>
          <div>"left""right"</div>
        </div>
        <div>Componente proyectos. Do a map here.</div>
      </div>
      {/* Colaboración */}
      <div>
        <h4 className="text-lg font-bold text-colortext">Colaboración</h4>
        <div>
          <div>Recursos subidos componente</div>
          <div>Retos completados componente</div>
        </div>
      </div>
      {/* Datos del bootcamp */}
      <div>
        <h4 className="text-lg font-bold text-colortext">Datos del bootcamp</h4>
        <div>Full-stack PHP!!</div>
      </div>
    </div>
  );
};

export default UserDetails;
