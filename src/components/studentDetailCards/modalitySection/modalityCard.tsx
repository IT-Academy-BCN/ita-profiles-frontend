import remoto from '../../../assets/svg/remoto.svg';

const ModalityCard: React.FC = () => {

    return (

        <div className="flex flex-col gap-5">
            <h3 className="font-bold text-lg">Modalidad</h3>
            <div className="flex items-center gap-2">
                <img src={remoto} className="pr-2" />
                <p className="text-sm font-semibold leading-tight text-black-2">Remoto</p>
            </div>
        </div>

    );
}
export default ModalityCard;
