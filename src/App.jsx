import Deal from "./pages/Deal";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Team from "./pages/Team";
import Why from "./pages/Why";

function App() {
  return (
    <>
      <Header />
      <main className="mx-4 lg:m-0">
        <Deal />
        <Team />
        <Why />
      </main>
      <Footer />
    </>
  );
}

export default App;
