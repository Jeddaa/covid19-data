import {
  Routes, Route,
} from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryItem from './components/CountryItem';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="w-11/12 my-0 mx-auto">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CountryList />} />
        <Route path="/:country" element={<CountryItem />} />
      </Routes>
    </div>
  );
}

export default App;
