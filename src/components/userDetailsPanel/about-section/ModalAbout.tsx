import ModalFormLayout from '../modalFormLayout/ModalFormLayout';

interface Props {
  onClose: () => void;
}
const ModalAbout = ({ onClose }: Props) => {
  return (
    <ModalFormLayout onClose={onClose}>
      <div className="my-2 flex flex-col overflow-hidden overflow-y-auto">
        <h2 className="text-2xl font-bold text-black-3">Editar Datos</h2>
        <form className="flex h-auto flex-col items-center md:max-h-96 lg:max-h-fit">
          {/* nombre y apellidos */}
          <label className="form-control w-full max-w-xs p-1">
            <span>Nombre y apellidos</span>
            <input
              type="text"
              placeholder="Maria Oliveras Guerra"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          {/* Role */}
          <label className="form-control w-full max-w-xs p-1">
            <span>Titular</span>
            <input
              type="text"
              placeholder="Full-stack developer PHP"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          {/* add an input-file here for the photo */}

          <div className="my-3 w-full max-w-xs border border-gray-4-base/50" />
          {/* Link Perfil Github */}
          <label className="form-control w-full max-w-xs p-1">
            <span>Link perfil de Github</span>
            <input
              type="text"
              placeholder="github.com/martaoli"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          {/* Link Perfil Linkedin */}

          <label className="form-control w-full max-w-xs p-1">
            <span>Link perfil de Linkedin</span>
            <input
              type="text"
              placeholder="linkedin.com/martaoli"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <div className="my-3 w-full max-w-xs border border-gray-4-base/50" />

          {/* Descripción */}

          <label className="form-control w-full max-w-xs p-1">
            <span>Descripción</span>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Escribir código es mega chuli!"
            ></textarea>
          </label>
        </form>
      </div>
    </ModalFormLayout>
  );
};

export default ModalAbout;
