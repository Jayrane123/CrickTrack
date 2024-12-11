// 'use client';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import Navbar from '../component/Navbar';
// import { MatchReInfo, ApiData, SeriesAdWrapper } from '@/app/Matches/data';

// const RankingApi = () => {
//   const [data, setData] = useState<ApiData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//  const news = document.getElementById('news')

//   useEffect(() => {
//     const fetchData = async () => {     
//       const options = {
//         method: 'GET',
        
//         // url: `https://cricbuzz-cricket.p.rapidapi.com/news/v1/index`,
//         headers: {
//           'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
//           'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         setData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Failed to load data');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   // const saTourOfWI = data?.typeMatches
//   //   ?.flatMap((typeMatch) => typeMatch.seriesMatches)
//   //   ?.find(
//   //     (seriesMatch) =>
//   //       seriesMatch?.seriesAdWrapper?.seriesName.toLowerCase()
//   //     .includes(searchQuery.toLowerCase())     
//   const saTourOfWI = data?.typeMatches
//   ?.flatMap((typeMatch) => typeMatch.seriesMatches)
//   ?.find((seriesMatch) => 
//     seriesMatch.seriesAdWrapper.seriesName === 'South Africa tour of West Indies, 2024'
//   );

//   return (
//     <div>
//       <h1>South Africa tour of West Indies, 2024</h1>
//       {saTourOfWI ? (
//         saTourOfWI.seriesAdWrapper.matches.map((match) => (
//           <div key={match.matchInfo.matchId}>
//             <h2>{match.matchInfo.matchDesc || 'No Description Available'}</h2>
//             <p>Status: {match.matchInfo.status || 'No Status Available'}</p>
//             <p>
//               Team 1: {match.matchInfo.team1?.teamName || 'Team Name Not Available'}
//             </p>
//             <p>
//               Team 2: {match.matchInfo.team2?.teamName || 'Team Name Not Available'}
//             </p>
//             <p>
//               Venue: {match.matchInfo.venueInfo?.ground || 'Unknown Ground'},{' '}
//               {match.matchInfo.venueInfo?.city || 'Unknown City'}
//             </p>
//             <p>Result: {match.matchInfo.stateTitle || 'No Result Available'}</p>
//           </div>
//         ))
//       ) : (
//         <p>No matches found for South Africa tour of West Indies, 2024.</p>
//       )}
//     </div>
//   );
// };

// export default RankingApi;



// Import necessary modules
'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import jsondata from '../Ranking/test'
// const jsondataTyped = jsondata as ApiData;
import jsondata from '../Ranking/test.json'
const jsondataTyped = jsondata as ApiData;

// Define TypeScript interfaces
interface CoverImage {
  id: number;
  caption: string;
  source: string;
}

interface Story {
  id: number;
  hline: string;
  intro: string;
  imageId: number;
  coverImage: CoverImage;
}

interface StoryOrAd {
  story?: Story;
}

interface ApiData {
  storyList: StoryOrAd[];
}

// Main App Component
// const Api: React.FC = () => {
//   const [data, setData] = useState<ApiData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         // url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
//         headers: {
//           'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY ,
//           'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
//         },
//       };
      
//       try {
//         const response = await axios.request<ApiData>(options);
//         setData(response.data);
//       } catch (error: any) {
//         console.error('Error details:', error.response ? error.response.data : error.message);
//         setError('Failed to load data');
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchData();
//   }, []);
   // Empty dependency array ensures this runs once on mount




    const Api: React.FC = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  return (
    <div>
      <h1>Latest News</h1>
      {/* <pre style={{ background: '#f4f4f4', padding: '1em', borderRadius: '5px' }}>
        {JSON.stringify(data, null, 2)}
      </pre> */}
      {data ? (
        data.storyList.map((item, index) =>
          item.story ? (
            <div key={index}>
              <h2>{item.story.hline}</h2>
              <p>{item.story.intro}</p>
              <Image
                src={`/images/${item.story.coverImage.id}.jpg`} // Construct the image URL using imageId
                alt={item.story.coverImage.caption || 'News image'}
                width={300}
                height={200}
              />
            </div>
          ) : null
        )
      ) : (
        <p>No stories available.</p>
      )}
    </div>
  );
};

export default Api;
