import { useAppSelector } from '../../hooks/ReduxHooks';
import bookmark from '../../assets/svg/bookmark.svg';
import email from '../../assets/svg/email.svg';
import close from '../../assets/svg/close.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import github from '../../assets/svg/github.svg';

const UserDetails = () => {
  const isPanelOpen = useAppSelector(
    (state) => state.ShowUserReducer.isUserPanelOpen,
  );
  return (
    <div
      className={`${
        isPanelOpen ? 'block' : 'hidden'
      } mr-2 max-h-[90vh] border border-red-400 px-2 pt-10`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-colortext">Detalle Perfil</h3>
        <div className="cursor-pointer">
          <img src={close} alt="close icon" />
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
              <div className="flex items-center gap-1">
                <img src={github} alt="github icon" />
                <span className="text-gray-400">Github</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={linkedin} alt="linkedin icon" />
                <span className="text-gray-400">Linkedin</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-16 w-16 rounded-xl border-2 border-[#808080]">
              <img src={bookmark} alt="bookmark icon" className="h-6 w-16" />
            </button>
            <button className="hover:bg-pinkit_hover active:bg-pinkit_active  h-16 w-16 rounded-xl bg-pinkit">
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
        <div>
          <h4 className="text-lg font-bold text-colortext">Proyectos</h4>
          <div>arrow left and right</div>
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
