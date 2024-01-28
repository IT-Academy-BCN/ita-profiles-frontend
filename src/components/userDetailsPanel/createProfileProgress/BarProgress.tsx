const BarProgress = () => {
  return (
    <div className="mt-8 flex flex-col gap-2 px-4 py-10">
      <p className="font-semibold">80% completado</p>
      <progress
        className="progress progress-primary max-w-md rounded-full"
        value="80"
        max="100"
      ></progress>
    </div>
  );
};

export default BarProgress;
