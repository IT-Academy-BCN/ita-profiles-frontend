const BarProgress = () => {
  return (
    <div className="mt-8 flex flex-col gap-2 px-4 py-10">
      <p className="font-semibold">810% completado</p>
      <progress
        className="progress progress-primary max-w-md rounded-full"
        value="50"
        max="100"
      ></progress>
    </div>
  );
};

export default BarProgress;
