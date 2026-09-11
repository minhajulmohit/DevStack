import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../Types";
import { toast } from "react-toastify";

interface yourStackType {
  stack: TechnologyType[];
  setStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

function YourStack({ stack, setStack }: yourStackType) {
  //
  const handleRemoveAStack = (technology: TechnologyType) => {
    const restStack = stack.filter((astack) => astack.name !== technology.name);
    setStack(restStack);
    toast.info(`${technology.name} removed`);
  };
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All Stack Removed");
  };
  //
  return (
    <section className="border border-gray-300 p-4 rounded-2xl">
      <h1 className="font-bold text-xl">Your Stack</h1>
      {stack.length === 0 ? (
        <section>
          <small className="text-gray-400">No technologies selected yet.</small>
          <div className="border border-gray-300 p-4 rounded-2xl text-center mt-5">
            <small className="text-gray-300">Your stack is empty.</small>
          </div>
        </section>
      ) : (
        <section className="flex flex-col">
          <small className="text-gray-400">
            {stack.length} Technologies Selected.
          </small>
          {stack.map((technology) => (
            <div className="flex justify-between items-center border border-gray-300 rounded-xl p-2 mt-2">
              <div className="flex gap-2">
                <img className="w-10" src={technology.icon} />
                <div className="flex flex-col gap-0">
                  <p className="font-bold">{technology.name}</p>
                  <small className="text-[12px] text-gray-400 leading-none">
                    {technology.category}
                  </small>
                </div>
              </div>

              <button onClick={() => handleRemoveAStack(technology)}>✕</button>
            </div>
          ))}
          <button
            onClick={handleRemoveAll}
            className="border border-red-600 rounded-[10px] py-2 font-bold text-red-600 mt-15"
          >
            Remove All
          </button>
        </section>
      )}
    </section>
  );
}

export default YourStack;
