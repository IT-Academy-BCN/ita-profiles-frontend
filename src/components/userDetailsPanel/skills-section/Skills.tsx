import pencil from '../../../assets/svg/pencil.svg';
import plus from '../../../assets/svg/plus.svg';

const Skills = () => {
  return (
    <>
      <div className="flex justify-between gap-1">
        <h4 className="font-bold text-black-3">Skills</h4>
        <button className="hover:scale-125">
          <img src={pencil} alt="pencil icon" />
        </button>
      </div>

      {/* is this button an individual component? inside a modal? how does this behave */}
      <button className="flex items-center gap-2 rounded-md bg-gray-4-base px-2 py-1 text-sm ">
        Nueva skill
        <img src={plus} alt="plus icon" />
      </button>
    </>
  );
};

export default Skills;
