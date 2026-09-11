import type { TechnologyType } from "../../Types";

interface technologyDataType {
  technology: TechnologyType;
}

function Explore({ technology }: technologyDataType) {
  return (
    <div className="">
      <div className="border border-gray-200 rounded-[10px] p-4 flex flex-col">
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
        <button className="bg-black text-white px-3 py-1 mt-5 rounded-[9px] hover:bg-linear-to-l from-[#ff5724] via-[#D81B7E] to-[#7C3AED]">
          Add to Stack
        </button>
      </div>
    </div>
  );
}
export default Explore;
