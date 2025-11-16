import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Offers/>
      </main>
      <Footer/>
    </>
  );
}

export default App;