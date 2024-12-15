import React, { useState } from 'react';
import './search.css';


function Search() {
  const [status, setStatus] = useState(false);
  const [subreddits, setSubreddits] = useState([]);

const API_ROOT = 'https://www.reddit.com';

const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();
  return json.data.children.map((post) => post.data);
};

const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  console.log(json);
  return json.data.children.map((subreddit) => subreddit.data);
};

  const handleSearch = async () => {
    setStatus(true);
    const data = await getSubreddits();
    setSubreddits(data);
    setStatus(false);
  };

  return (
    <div className='search__container section__padding'>
      <input className='searchInput' type="text" placeholder="Search for a subreddit" />
      <button className='searchButton' type="button" onClick={handleSearch}>Search</button>
      <p>{status && 'Searching'}</p>
      <div className='results'>
        {subreddits.length > 0 && (
          <ul>
            {subreddits.map((subreddit, index) => (
              <li key={index}>{subreddit.display_name}{subreddit.public_description}</li>
            ))}            
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;