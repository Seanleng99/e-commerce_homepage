import Topbar from './components/topbar/Topbar';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';
import './app.css';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
