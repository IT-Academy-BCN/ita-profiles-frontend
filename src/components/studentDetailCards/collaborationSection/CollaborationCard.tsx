import ChallengesCard from './ChallengesCard';
import ResourcesCard from './ResourcesCard';

const CollaborationCard = () => {
  return (
    <div>
      <h4 className="mb-5 font-bold text-black-3">Colaboración</h4>
      <div className="flex flex-col gap-2 md:flex-row">
        <ResourcesCard />
        <ChallengesCard />
      </div>
    </div>
  );
};

export default CollaborationCard;
