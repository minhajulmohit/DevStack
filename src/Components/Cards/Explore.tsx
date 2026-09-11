import { type Dispatch, type SetStateAction } from "react";
import type { TechnologyType } from "../../Types";
import { toast } from "react-toastify";

interface technologyDataType {
  technology: TechnologyType;
  stack: TechnologyType[];
  setStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

function Explore({ technology, stack, setStack }: technologyDataType) {
  // const [isAdded, setIsAdded] = useState(false);
  const isAdded = stack.some((item) => item.id === technology.id);

  //
  const handleTechnologi = () => {
    // setIsAdded(true);
    toast.success(`${technology.name} Added to stack`);
    setStack([...stack, technology]);
  };
 
  //
  //
  return (
    <div className="">
      <div
        className={`border border-gray-200 rounded-[10px] p-4 flex flex-col aria-disabled:border-[#D81B7E]`}
        aria-disabled={isAdded}
      >
        <div className="flex justify-between items-start">
          <img className="w-10" src={technology.icon} />
          <small className="border border-gray-200 rounded-2xl px-3 py-0.5 bg-[#e4d5fd] text-[#5e02fd]">
            {technology.badge}
          </small>
        </div>
        <div className="mt-5">
          <h4 className="font-bold">{technology.name}</h4>
          <small className="text-gray-500">{technology.description}</small>
        </div>
        <div className=" flex justify-between mt-6">
          <small className="text-gray-700 bg-gray-100 px-3 py-0.5 rounded-[5px]">
            {technology.category}
          </small>
          <small className="text-gray-500">{technology.difficulty}</small>
          <small>⭐ {technology.rating}</small>
        </div>
        <button
          onClick={() => handleTechnologi()}
          className={`bg-black text-white px-3 py-1 mt-5 rounded-[9px] enabled:hover:bg-linear-to-l from-[#ff5724] via-[#D81B7E] to-[#7C3AED]
            disabled:hover:bg-[#f9dceb] disabled:bg-[#f9dceb]
            disabled:text-[#f80181]
            disabled:
            `}
          disabled={isAdded}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}
export default Explore;
