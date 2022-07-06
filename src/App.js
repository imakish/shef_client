import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Whatis from "./components/Whatis";
import Testimonial from "./components/Testimonial";
// import Slider from 'react-slick';
import Sliders from "./components/Slider";
import Whyus from "./components/Whyus";
import Faq from "./components/Faq";
import End from "./components/End";
import { useState } from "react";
import BannerUser from "./components/BannerUser";
import Featured from "./components/Featured";

function App() {
  const [chef, setChef] = useState(false);
  return (
    <div className=" overflow-hidden" style={{ fontFamily: "Poppins" }}>
      <Header />
      {chef ? (
        <>
          <Banner />
          <Whatis />
          <Testimonial />
          <Sliders />
          <Whyus />
          <Faq />
        </>
      ) : (
        <>
          <BannerUser />
          <Featured />
        </>
      )}

      <End />
    </div>
  );
}

export default App;
