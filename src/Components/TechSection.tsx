import { use } from "react";
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

  return (
    <section className="container mx-auto grid grid-cols-12 gap-5">
      <div className="col-span-9 grid grid-cols-3 gap-3 mt-10">
        {technologyData.map((technology: TechnologyType) => {
          return <Explore technology={technology}></Explore>;
        })}
      </div>
      <div className="col-span-3 mt-10">
        <YourStack></YourStack>
      </div>
    </section>
  );
}

export default TechSection;
