import ModalFormLayout from '../modalFormLayout/ModalFormLayout';

interface Props {
  onClose: () => void;
}
const ModalAbout = ({ onClose }: Props) => {
  return (
    <ModalFormLayout onClose={onClose}>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-black-3">Editar Datos</h2>
        <form></form>
      </div>
    </ModalFormLayout>
  );
};

export default ModalAbout;
