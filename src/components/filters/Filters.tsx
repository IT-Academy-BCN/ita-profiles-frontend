import FiltersContent from './FiltersContent';

const Filters = () => {
  return (
    <div>
      <h3 className="w-40 text-2xl font-bold text-colortext">Filtros</h3>
      <div>
        <h4 className="font-bold mt-4 mb-2">Roles</h4>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="checkbox mr-2 border-primary [--chkbg:theme(colors.pink.700)]" />
          <span>Frontend</span>
        </label>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="checkbox  mr-2 border-primary [--chkbg:theme(colors.pink.700)]" />
          <span>Backend</span>
        </label>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="checkbox  mr-2 border-primary [--chkbg:theme(colors.pink.700)]" />
          <span>Fullstack</span>
        </label>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="checkbox  mr-2 border-primary [--chkbg:theme(colors.pink.700)]" />
          <span>Data Science</span>
        </label>
      </div>

      <div>
        <h4 className="font-bold mt-4 mb-2">Desarollo</h4>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="checkbox  mr-2 border-primary [--chkbg:theme(colors.pink.700)]" />
          <span>Spring</span>
        </label>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="checkbox mr-2 border-primary [--chkbg:theme(colors.pink.700)]" />
          <span>Laravel</span>
        </label>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="checkbox  mr-2 border-primary [--chkbg:theme(colors.pink.700)]" />
          <span>Angular</span>
        </label>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="checkbox  mr-2 border-primary [--chkbg:theme(colors.pink.700)]" />
          <span>React</span>
        </label>
      </div>
      <div>
        <h4 className="font-bold mt-4 mb-2">Estados</h4>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="radio-secondary checkbox radio  mr-2" />
          <span>Tod@s</span>
        </label>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="radio-secondary checkbox radio  mr-2" />
          <span>Contratad@s</span>
        </label>
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="radio-secondary checkbox radio  mr-2" />
          <span>Entrevistad@s</span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
