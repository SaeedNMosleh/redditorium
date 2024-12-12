import logo from './logo.svg';
import './App.css';

import TopicsCollection from './components/topicsCollection/TopicsCollection';
import Search from './components/search/Search';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <TopicsCollection/>
    </div>
  );
}

export default App;
