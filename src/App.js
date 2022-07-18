import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ContextApp from './context/app';
import Game from './game/game';
import TheRedux from './myredux';
import Parent from './parent-children/parent';
import ConRedux from './redux-sample';
import SearchBarRoot from './searchbar/searchbar';
import StarRating from './state/state';
import Styled from './styled';
import MemoIndex from './usememo';
import NoUseMemo from './usememo/noUseMemo';
import UseMemo from './usememo/useMemo';
import Welcome from './welcome/welcome';
function App() {
  let _name = "zhang huan";
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route path='/' element={<Welcome name={_name} />} />
            <Route path="/game" element={<Game />} />
            <Route path='/search' element={<SearchBarRoot />} />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path='/star' element={<StarRating />} />
            <Route path='/redux' element={<TheRedux />} />
            <Route path='/redux_console' element={<ConRedux />} />
            <Route path='/parent_children' element={<Parent />} />
            <Route path='/context' element={<ContextApp />} />
            <Route path='/styled' element={<Styled />} />
            <Route path="/usememo_index" element={<MemoIndex />} />
            <Route path='/no_usememo' element={<NoUseMemo />} />
            <Route path='/usememo' element={<UseMemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
