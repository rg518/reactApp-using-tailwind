import logo from './logo.svg';
import Navbar from './components/Navbar';
import Ques from './components/Ques';
import Banner from './components/Banner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Ques/>
    </div>
  );
}

export default App;
