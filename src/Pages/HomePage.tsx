import Navbar from "../Component/Navbar/Navbar";
import Main from "../Component/Main/Main";

export default function HomePage() {
  return (
    <div className="h-full app-container flex">
      <section className="text-white bg-[var(--navbar-bg-color)] h-full min-w-[20rem] overflow-y-scroll">
        <Navbar />
      </section>
      <section className="flex-1">
        <Main />
      </section>
    </div>
  );
}
