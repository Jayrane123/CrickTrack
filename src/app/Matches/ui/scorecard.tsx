// components/Scorecard.tsx
import React from 'react';
// import "../../../styles/scorecard.css";
import "../../../public/styles/scorecard.css";

// Define types for the player and team data
interface Player {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

interface Team {
  name: string;
  score: string;
  overs: number;
  extras: string;
  players: Player[];
}

const Scorecard: React.FC = () => {
  // Example team data (replace with API data as needed)
  const team: Team = {
    name: 'Team A',
    score: '150/5',
    overs: 20,
    extras: '10 (b 2, lb 3, wd 5, nb 0)',
    players: [
      { name: 'Player 1', runs: 50, balls: 35, fours: 6, sixes: 2, strikeRate: 142.85 },
      { name: 'Player 2', runs: 30, balls: 20, fours: 4, sixes: 1, strikeRate: 150.0 },
      // Add more players as needed
    ],
  };

  return (
    // <div className="max-w-7xl max-h-7xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
    <div className="scorecard">
      <h2 className="text-2xl font-bold text-center mb-6">Cricket Scorecard</h2>

      {/* Team Info */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">{team.name}</h3>
          <p className="text-sm text-gray-600">Overs: {team.overs}</p>
        </div>
        <div className="text-xl font-bold">{team.score}</div>
      </div>

      {/* Player List */}
      <table className="min-w-full text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Player</th>
            <th className="py-2 px-4">Runs</th>
            <th className="py-2 px-4">Balls</th>
            <th className="py-2 px-4">4s</th>
            <th className="py-2 px-4">6s</th>
            <th className="py-2 px-4">SR</th>
          </tr>
        </thead>
        <tbody>
          {team.players.map((player, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{player.name}</td>
              <td className="py-2 px-4">{player.runs}</td>
              <td className="py-2 px-4">{player.balls}</td>
              <td className="py-2 px-4">{player.fours}</td>
              <td className="py-2 px-4">{player.sixes}</td>
              <td className="py-2 px-4">{player.strikeRate.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Extras and Total */}
      <div className="mt-4 flex justify-between">
        <p className="text-sm text-gray-600">Extras: {team.extras}</p>
        <p className="text-sm font-bold">Total: {team.score}</p>
      </div>
    </div>
  );
};

export default Scorecard;
