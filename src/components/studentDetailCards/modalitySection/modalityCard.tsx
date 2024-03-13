import remoto from '../../../assets/svg/remoto.svg';

const ModalityCard: React.FC = () => {

    return (

        <div className="modal-card">
            <h1 className="font-bold pb-5 pt-8 text-lg">Modalidad</h1>
            <div className="flex row">
                <img src={remoto} className="w- full pr-2" />
                <h2 className="text-sm font-semibold leading-tight text-black pt-1">Remoto</h2>
            </div>
        </div>

    );
}
export default ModalityCard;