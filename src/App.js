import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SliderSelect/>
      <TenureSelect/>
      <Result/>
    </div>
  );
}

export default App;
