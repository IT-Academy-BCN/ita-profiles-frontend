import ModalFormLayout from '../modalFormLayout/ModalFormLayout';

interface Props {
  onClose: () => void;
}

const ModalProjects = ({ onClose }: Props) => {
  return <ModalFormLayout onClose={onClose}>ModalProjects</ModalFormLayout>;
};

export default ModalProjects;
