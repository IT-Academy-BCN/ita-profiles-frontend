import ChallengesCard from './ChallengesCard';
import ResourcesCard from './ResourcesCard';

const CollaborationCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-bold text-black-3">Colaboración</h3>
      <div className="flex flex-col gap-4 md:flex-row">
        <ResourcesCard />
        <ChallengesCard />
      </div>
    </div>
  );
};

export default CollaborationCard;
