import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';

function App() {
  return (
    <main className="app">
      <Header/>
      <Hero/>
      <Offers/>
    </main>
  );
}

export default App;