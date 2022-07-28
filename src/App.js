import './App.css';
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Work from './Components/Work'
import Aboutme from './Components/Aboutme'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Work />
      <Aboutme />
      <Contact />
    </div>
  );
}

export default App;
