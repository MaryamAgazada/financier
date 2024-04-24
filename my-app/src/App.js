import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero'
// import "./OnTime/OnTime.jsx"
// import "./SecOnTime/SecOnTime.jsx"
import SecOnTime from './SecOnTime/SecOnTime';
import OurServis from './OurServices/OurServis';
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Hero/>
{/* <OnTime/> */}
<SecOnTime/>
<OurServis/>
    </div>
  );
}
export default App;
