import heroimg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="container mx-auto mt-5 flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="font-bold font-[INTER] text-5xl">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#475569] my-6 max-w-125">
          Explore frontend, backend, database, and tooling options. Compare them
          side by side and build the perfect stack for your next project.
        </p>
        <div className="grid grid-cols-2 gap-2 w-100 mt-10">
          <button className="text-white bg-linear-to-r from-[#F97316] to-[#EC4899] py-0.5 px-3 rounded-[5px]">
            Exprore Technologies
          </button>
          <button className="text-[#475569] border border-[#c8cdd4] py-0.5 px-3 rounded-[5px]">
            Learn More
          </button>
        </div>
      </div>
      <img src={heroimg} alt="Hero banner image" />
    </section>
  );
}
