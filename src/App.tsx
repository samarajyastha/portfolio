import { declaration } from "./constants/contents";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Footer declaration={declaration} />
    </>
  );
}

export default App;
