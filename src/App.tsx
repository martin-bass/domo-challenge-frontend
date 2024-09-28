import "./App.css";

//Components
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Fotter from "./components/footer";

function App() {
  return (
    <main className="container">
      <section className="d-flex flex-column position-relative">
        <Navbar />
      </section>
      <section className="p-md-3">
        <Landing />
      </section>
      <section className="d-flex flex-column position-relative">
        <Fotter />
      </section>
    </main>
  );
}

export default App;
