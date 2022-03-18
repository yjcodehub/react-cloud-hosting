// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner';
import Hosting from './components/Hosting';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar title={"Cloud"} subtitle={"Hosting"} />
      <Banner />
      <Hosting />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
