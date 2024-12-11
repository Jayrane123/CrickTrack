// Api.tsx
// 'use client';
// import React, { useState, useEffect } from 'react';
// import { fetchData } from '../utils/apiUtils'; // Adjust the path based on your file structure
// import { MatchReInfo, ApiData, SeriesAdWrapper } from '../component/data';

// const Api = () => {
//   const [data, setData] = useState<ApiData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchData(
//       setData,
//       setLoading,
//       setError,
//       'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent' // or any other URL
//     );
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   // ...rest of your component rendering logic
// };

// export default Api;

'use client';
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import { fetchData } from '../util/api';
import { json } from 'stream/consumers';
import { ApiData} from './data';
// import { CardDemo } from './CardDemo';
import { CardDemo } from './CardDemocopy';

import jsondata from '../news/test.json'
const jsondataTyped = jsondata as ApiData;

const NewsApi: React.FC = () => {
  const [data, setData] = useState<ApiData | null>(null);
  // const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const [searchQuery, setSearchQuery] = useState(' ');
//  const news = document.getElementById('news')

  // useEffect(() => {
  //   // fetchData(
  //   //   setData,
  //   //   setLoading,
  //   //   setError,
  //   //   'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index' // or any other URL
  //   // );
  // }, []);
  useEffect(() => {
    if (jsondataTyped && Array.isArray(jsondataTyped.storyList)) {
      setData(jsondataTyped);
      setLoading(false);
    } else {
      setError("Invalid data format");
      setLoading(false);
    }
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const allStories = data?.storyList?.flatMap((item) => item.story);

  return (
    <div>
      <h1>Latest News</h1>
      {allStories ? (
        allStories.map((story,index) => (
          <div key={story?.id || `story-${index}`}>
            <CardDemo
            title={story?.hline || 'Headline not found'}
            description={story?.intro || 'No introduction available'}
            // ImageUrl={story?.imageId: undefined}
            ImageUrl={story?.imageId || 540950}
            caption={story?.coverImage?.caption || " "}
            // ImageUrl={story?.imageId ? `/images/${story.imageId}.jpg` : '/img/news.jpg'}
            ></CardDemo>
            {/* <h2>{story?.hline || 'Headline not found'}</h2>
            <p>{story?.intro || 'No introduction available'}</p> */}
          </div>
        ) 
      )
      ) : (
        <p>No stories available.</p>
      )}
    </div>
  );
};

export default NewsApi;

