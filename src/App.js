import logo from './logo.svg';
import './App.css';

import TopicsCollection from './components/topicsCollection/TopicsCollection';
import Search from './components/search/Search';
import Header from './components/header/Header';
import PostsCollection from './components/postsCollection/PostsCollection';
import Comments from './components/comments/Comments';

import { useSelector } from 'react-redux';


function App() {
  const subredditName = useSelector((state) => state.post.subredditName);
  const commentsLink = useSelector((state) => state.comment.commentsLink);
  return (
    <div className="App section__padding">
      <Header/>
      <Search/>
      <div className='body__container'>
        <TopicsCollection />
        {subredditName && <PostsCollection />}
        {commentsLink && <Comments />}
      </div>
    </div>
  );
}

export default App;
