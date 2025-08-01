import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';
import Heroslider from './component/Heroslider';
import Boxes from './component/Boxes';
import About from './component/About';
import About1 from './component/Image';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Heroslider />
        <Boxes/>
        <About/>
        <About1/>
    </BrowserRouter>
  );
}

export default App;