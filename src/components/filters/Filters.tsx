const Filters = () => {
  return (
    <div>
      <h3 className="w-40 text-2xl font-bold text-colortext">Filtros</h3>
      <div>
        <h4 className="font-bold">Roles</h4>
      <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
          <span>Frontend</span>
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
            <span>Backend</span>
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
            <span>Fullstack</span>
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
            <span>Data Science</span>
          </label>
          </div>

          <div >
        <h4 className="font-bold">Desarollo</h4>
      <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
            <span>Spring</span>
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
            <span>Laravel</span>
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
            <span>Angular</span>
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
            <span>React</span>
          </label>
          </div>
          <div >
            <h4 className="font-bold">Estados</h4>
            <label className="cursor-pointer label">
            <input type="checkbox" name="radio-3" className="radio radio-secondary checkbox" />
            <span>Tod@s</span>
            </label>
            <label className="cursor-pointer label">
            <input type="checkbox" name="radio-3" className="radio radio-secondary checkbox" />
            <span>Contratad@s</span>
            </label>
            <label className="cursor-pointer label">
            <input type="checkbox" name="radio-3" className="radio radio-secondary checkbox" />
            <span>Con entrevistas</span>
            </label>
          </div>
    </div>
  );
};

export default Filters;
