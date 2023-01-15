import './App.css';
import Info from './Components/Info.js'
import About from './Components/About.js'
import Interests from './Components/Interests.js'
import Footer from './Components/Footer.js'

function App() {
  return (
    <div className="App">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
  );
}

export default App;
