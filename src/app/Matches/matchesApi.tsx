'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import { MatchReInfo, ApiData, SeriesAdWrapper } from '@/app/Matches/data';

const MatchesApi = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const [searchQuery, setSearchQuery] = useState(' ');
 const news = document.getElementById('news')

  useEffect(() => {
    const fetchData = async () => {     
      const options = {
        method: 'GET',
        // url: `https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent`,
        // url: `https://cricbuzz-cricket.p.rapidapi.com/news/v1/index`,
        headers: {
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  // };
  // const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // The search logic is already applied in the filteredData below, so no need to call onSearch
  // };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  // const saTourOfWI = data?.typeMatches
  //   ?.flatMap((typeMatch) => typeMatch.seriesMatches)
  //   ?.find(
  //     (seriesMatch) =>
  //       seriesMatch?.seriesAdWrapper?.seriesName.toLowerCase()
  //     .includes(searchQuery.toLowerCase())     
  const saTourOfWI = data?.typeMatches
  ?.flatMap((typeMatch) => typeMatch.seriesMatches)
  ?.find((seriesMatch) => 
    seriesMatch.seriesAdWrapper.seriesName === 'South Africa tour of West Indies, 2024'
  );

  return (
    <div>
      <h1>South Africa tour of West Indies, 2024</h1>
      {saTourOfWI ? (
        saTourOfWI.seriesAdWrapper.matches.map((match) => (
          <div key={match.matchInfo.matchId}>
            <h2>{match.matchInfo.matchDesc || 'No Description Available'}</h2>
            <p>Status: {match.matchInfo.status || 'No Status Available'}</p>
            <p>
              Team 1: {match.matchInfo.team1?.teamName || 'Team Name Not Available'}
            </p>
            <p>
              Team 2: {match.matchInfo.team2?.teamName || 'Team Name Not Available'}
            </p>
            <p>
              Venue: {match.matchInfo.venueInfo?.ground || 'Unknown Ground'},{' '}
              {match.matchInfo.venueInfo?.city || 'Unknown City'}
            </p>
            <p>Result: {match.matchInfo.stateTitle || 'No Result Available'}</p>
          </div>
        ))
      ) : (
        <p>No matches found for South Africa tour of West Indies, 2024.</p>
      )}
    </div>
  );
};

export default MatchesApi;

