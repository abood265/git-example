import logo from './icon.png';
import './App.css';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         King Abd Salah
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         code
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
