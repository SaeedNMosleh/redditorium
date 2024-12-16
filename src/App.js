import logo from './logo.svg';
import './App.css';

import TopicsCollection from './components/topicsCollection/TopicsCollection';
import Search from './components/search/Search';
import Header from './components/header/Header';
import PostsCollection from './components/postsCollection/PostsCollection';

import { useSelector } from 'react-redux';


function App() {
  const subredditName = useSelector((state) => state.post.subredditName);
  return (
    <div className="App">
      <Header/>
      <Search/>
      <TopicsCollection />
      {subredditName && <PostsCollection />}
      
    </div>
  );
}

export default App;
