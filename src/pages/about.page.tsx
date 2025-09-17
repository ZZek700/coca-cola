import About from "../components/About";
import Header from "../components/Header";

export default function AboutPage() {
  return <>
    <div className="min-h-screen bg-crown-dark text-crown-primary overflow-x-hidden w-full">
      <Header />
      <About />
    </div>
  </>
}