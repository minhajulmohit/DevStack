import { Suspense } from "react";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import TechSection from "./Components/TechSection";
import type { TechnologyType } from "./Types";
import TechHeader from "./Components/TechHeader";
import Footer from "./Components/Footer";

async function TechDataPromise(): Promise<TechnologyType[]> {
  const res = await fetch("/Data.json");
  const techData = await res.json();
  return techData;
}

function App() {
  return (
    <section>
      <Nav></Nav>
      <Hero></Hero>
      <TechHeader></TechHeader>
      <Suspense
        fallback={<h1 className="text-center text-2xl">Loading Data...</h1>}
      >
        <TechSection TechDataPromise={TechDataPromise()}></TechSection>
      </Suspense>
      <Footer></Footer>
    </section>
  );
}

export default App;
