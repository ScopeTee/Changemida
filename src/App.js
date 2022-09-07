// import './App.css';
import Header from './components/header';
import Section2 from './components/section2';
import {Divide} from './styles/divider.styled'
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';

// import { Container } from "./styles/Container.styled";

// import Footer from './components/footer';



function App() {
  return (
    <>
      {/* <Container> */}
        <Header />
        <Section2 />
        <Divide />
        <Section3 />
        <Divide />
        <Section4 />
        <Section5 />
        {/* <Footer /> */}
      {/* </Container> */}
    </>
  );
}

export default App;
