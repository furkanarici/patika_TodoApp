import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </>
  );
}

export default App;
