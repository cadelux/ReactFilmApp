import './App.css';
import { Routes, Route } from "react-router-dom";
import Iamlegend from './components/films/2'
import Avatar from './components/films/1'
import F300 from './components/films/3';
import F400 from './components/films/4';
import F500 from './components/films/5';
import F600 from './components/films/6';
import F700 from './components/films/7';
import F800 from './components/films/8';
import F900 from './components/films/9';
import F1000 from './components/films/10';
import F1100 from './components/films/11';
import F1200 from './components/films/12';
import F1300 from './components/films/13';
import F1400 from './components/films/14';
import F1500 from './components/films/15';
import F1600 from './components/films/16';

import List from './components/List';
import Homepage from './Homepage';

function App() {

  return (
    <div className="App">
    <Routes>
       <Route  path="/" element={<Homepage />}/> 
       <Route  path="/films" element={<List />}/> 
       <Route path="/films/1" element={<Avatar />} />
       <Route path="/films/2" element={<Iamlegend/>} />
       <Route path="/films/3" element={<F300/>} />
       <Route path="/films/4" element={<F400/>} />
       <Route path="/films/5" element={<F500/>} />
       <Route path="/films/6" element={<F600/>} />
       <Route path="/films/7" element={<F700/>} />
       <Route path="/films/8" element={<F800/>} />
       <Route path="/films/9" element={<F900/>} />
       <Route path="/films/10" element={<F1000/>} />
       <Route path="/films/11" element={<F1100/>} />
       <Route path="/films/12" element={<F1200/>} />
       <Route path="/films/13" element={<F1300/>} />
       <Route path="/films/14" element={<F1400/>} />
       <Route path="/films/15" element={<F1500/>} />
       <Route path="/films/16" element={<F1600/>} />


     </Routes>

 
    </div>
  );
}

export default App;
