import { use, useState } from "react";
import type { TechnologyType } from "../Types";
import Explore from "./Cards/Explore";
import YourStack from "./Cards/YourStack";
//
//
interface TechProps {
  TechDataPromise: Promise<TechnologyType[]>;
}
//
//
function TechSection({ TechDataPromise }: TechProps) {
  const technologyData = use(TechDataPromise);
  const [stack, setStack] = useState<TechnologyType[]>([]);
  //
  //
  return (
    <section className="px-2 container mx-auto md:grid grid md:grid-cols-12 gap-5">
      <div className="col-span-1 md:col-span-9 grid md:grid-cols-3 gap-3 mt-10">
        {technologyData.map((technology: TechnologyType) => {
          return (
            <Explore
              key={technology.id}
              technology={technology}
              stack={stack}
              setStack={setStack}
            ></Explore>
          );
        })}
      </div>
      <div className=" col-span-1 md:col-span-3 mt-10">
        <YourStack stack={stack} setStack={setStack}></YourStack>
      </div>
    </section>
  );
}

export default TechSection;
