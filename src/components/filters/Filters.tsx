const Filters = () => {
  return (
    <div>
      <h3 className="w-40 text-2xl font-bold text-colortext">Filtros</h3>
      <div className="font-bold">
        <h4>Roles</h4>
      <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
          </label>
          </div>

          <div className="font-bold">
        <h4>Desarollo</h4>
      <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
          </label>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox"
            />
          </label>
          </div>
          <div className="font-bold">
            <h4>Estados</h4>
            <label className="cursor-pointer label">
            <input type="checkbox" name="radio-3" className="radio radio-secondary checkbox" />
            {/* <h4>Tod@s</h4> */}
            </label>
            <label className="cursor-pointer label">
            <input type="checkbox" name="radio-3" className="radio radio-secondary checkbox" />
            </label>
            <label className="cursor-pointer label">
            <input type="checkbox" name="radio-3" className="radio radio-secondary checkbox" />
            </label>
          </div>
    </div>
  );
};

export default Filters;
