import BarProgress from './BarProgress';
import StepsProgress from './StepsProgress';
import steps from './stepsArr';
const CreateProfileProgress = () => {
  return (
    <div className="flex w-2/4 flex-col">
      <BarProgress />
      {steps.map((steps) => (
        <StepsProgress key={steps.id} step={steps.step} />
      ))}
    </div>
  );
};

export default CreateProfileProgress;
