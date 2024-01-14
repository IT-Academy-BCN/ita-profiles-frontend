const Filters = () => {
  // filterModal
  return (
    <div className="hidden flex-col md:flex">
      <h3 className="w-40 text-2xl font-bold text-colortext">Filtros</h3>
      <div>
        <h4 className="mb-2 mt-4 font-bold">Roles</h4>
        <label className="label cursor-pointer justify-start p-1">
          <input type="checkbox" className="checkbox mr-2" />
          <span>Frontend</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input type="checkbox" className="checkbox  mr-2" />
          <span>Backend</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input type="checkbox" className="checkbox  mr-2" />
          <span>Fullstack</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input type="checkbox" className="checkbox  mr-2" />
          <span>Data Science</span>
        </label>
      </div>

      <div>
        <h4 className="mb-2 mt-4 font-bold">Desarrollo</h4>
        <label className="label cursor-pointer justify-start p-1">
          <input type="checkbox" className="checkbox  mr-2" />
          <span>Spring</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input type="checkbox" className="checkbox mr-2" />
          <span>Laravel</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input type="checkbox" className="checkbox  mr-2" />
          <span>Angular</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input type="checkbox" className="checkbox  mr-2" />
          <span>React</span>
        </label>
      </div>
      <div>
        <h4 className="mb-2 mt-4 font-bold">Estados</h4>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="radio-secondary checkbox radio  mr-2"
          />
          <span>Tod@s</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="radio-secondary checkbox radio  mr-2"
          />
          <span>Contratad@s</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="radio-secondary checkbox radio  mr-2"
          />
          <span>Entrevistad@s</span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
