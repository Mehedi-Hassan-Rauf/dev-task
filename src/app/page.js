import Header from "./components/header";
import Banner from "./components/banner";
import Work from "./components/work";
import Creative from "./components/creative";
import DefaultOne from "./components/default-one";
import Landscape from "./components/landscape";
import DefaultTwo from "./components/default-two";
import Cookie from "./components/cookie";
import Text from "./components/text";
import DefaultThree from "./components/default-three";
import BigMsg from "./components/big-msg";
import DefaultFour from "./components/default-four";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Work />
      <Creative />
      <DefaultOne />
      <Landscape />
      <DefaultTwo />
      <Text />
      <DefaultThree />
      <BigMsg />
      <DefaultFour />
      <Testimonials />
      <Footer />
      <Cookie />
    </main>
  );
}
