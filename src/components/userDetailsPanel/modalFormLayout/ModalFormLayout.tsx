import close from '../../../assets/svg/close.svg';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const ModalFormLayout = ({ children, onClose }: Props) => {
  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            onClick={onClose}
          >
            <img src={close} alt="" />
          </button>
        </form>
        {children}
        <div className="flex items-center justify-center gap-2">
          <button
            className="w-full rounded-lg border border-gray-3 px-6 py-4 hover:bg-gray-100 md:w-32"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button className="w-full rounded-lg bg-primary px-6 py-4 text-white hover:bg-primary-hover active:bg-primary-active md:w-32">
            Aceptar
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default ModalFormLayout;
