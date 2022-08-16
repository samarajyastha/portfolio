import {
  declaration,
  designation,
  displayName,
  info,
} from "./constants/contents";
import Footer from "./components/Footer";
import Header from "./components/Header";

import heroImage from "./samarajya_shrestha.jpeg";

import "./App.css";

function App() {
  return (
    <>
      <Header
        designation={designation}
        displayName={displayName}
        heroImage={heroImage}
        info={info}
      />
      <Footer declaration={declaration} />
    </>
  );
}

export default App;
