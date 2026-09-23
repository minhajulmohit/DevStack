import heroimg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className=" px-2 mt-10 container mx-auto md:mx-auto md:mt-5 md:flex md:justify-between md:items-center">
      <div className="flex flex-col">
        <h1 className="font-bold font-[INTER] text-5xl">
          Build Your Ideal <br />
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p className="text-[#475569] my-6 max-w-125">
          Explore frontend, backend, database, and tooling options. Compare them
          side by side and build the perfect stack for your next project.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-2 px-4 sm:grid-cols-2 md:mt-10 md:max-w-100 md:px-0">
          <button className="text-white gradient-bg py-0.5 px-3 rounded-[5px]">
            Explore Technologies
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
