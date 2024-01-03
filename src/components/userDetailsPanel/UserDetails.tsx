import { useAppSelector } from '../../hooks/ReduxHooks';

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
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-colortext">Detalle Perfil</h3>
        <div className="cursor-pointer">X</div>
      </div>
      <div className="flex">
        <div>
          <img src="" alt="image here" className="h-16 w-full" />
        </div>
        <div className="flex flex-col">
          <p>nombreUsu</p>
          <p>Full stack</p>
          <div className="flex">
            <div>github</div>
            <div>linkedin</div>
          </div>
        </div>
        <div className="flex">
          <div className="rounded-md border border-red-400">bookmark</div>
          <div className="rounded-md border border-red-400">email</div>
        </div>
      </div>
      {/* about */}
      <div>
        <h4 className="text-lg font-bold text-colortext">About</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro ea
          incidunt cumque perferendis corporis nobis! Deserunt vero quod
          assumenda?
        </p>
        <div>
          map on each tech. make an individual component from ProfileCard for
          the tags to be also reusable here.
        </div>
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
