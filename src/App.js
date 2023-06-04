import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Work></Work>
      <Timeline></Timeline>
      <Services></Services>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Toaster></Toaster>
      <Footer></Footer>
    </>
  );
}

export default App;
