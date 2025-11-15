import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className="app">
      <Header/>
      <Hero/>
      <Offers/>
      <Footer/>
    </main>
  );
}

export default App;