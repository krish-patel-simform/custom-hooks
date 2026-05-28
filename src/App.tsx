import "./App.css";
import Main from "./Component/Main/Main";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Main />
      </section>
    </div>
  );
}

export default App;
