import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Bootcamp from './components/Bootcamp';
import Learning from './components/Learning';
import Tournaments from './components/Tournaments';
// import Camp from './components/Camp';

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Bootcamp />
      {/* <Camp/> */}
      <Learning />
      <Tournaments />
    </div>
  );
}

export default App;
