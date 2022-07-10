import './App.css';
import Welcome from './welcome/welcome'
import Game from './game/game'
import SearchBarRoot from './searchbar/searchbar';
import StarRating from './state/state';
import TheRouter from './routes/router';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserMemoExample from './state/usememo'
import TheRedux from './myredux';
import ConRedux from './redux-sample';
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
            <Route path='/usememo' element={<UserMemoExample />} />
            <Route path='/redux' element={<TheRedux />} />
            <Route path='/redux_console' element={<ConRedux />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
