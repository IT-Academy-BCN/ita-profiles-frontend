import ChallengesCard from './ChallengesCard';
import ResourcesCard from './ResourcesCard';

const CollaborationCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-bold text-black-3">Colaboración</h4>
      <div className="flex flex-col gap-4 md:flex-row">
        <ResourcesCard />
        <ChallengesCard />
      </div>
    </div>
  );
};

export default CollaborationCard;
