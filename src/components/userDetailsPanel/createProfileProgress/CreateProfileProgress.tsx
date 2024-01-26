import BarProgress from './BarProgress';
import StepsProgress from './StepsProgress';
import steps from './stepsArr';
const CreateProfileProgress = () => {
  return (
    <div className="flex w-2/4 flex-col">
      {/* n% & bar */}
      <BarProgress />
      {/* list of steps */}
      {steps.map((steps) => (
        <StepsProgress key={steps.id} step={steps.step} />
      ))}
    </div>
  );
};

export default CreateProfileProgress;
