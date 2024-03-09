import React, { useState, useEffect } from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json';

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function HeadingSection() {
  return (
    <header>
      <h1>Welcome to NCAA College Basketball Teams</h1>
    </header>
  );
}

function TeamCard({ team }: { team: Team }) {
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
}

function TeamList({ teams }: { teams: Team[] }) {
  return (
    <div className="team-list">
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </div>
  );
}

function App() {
  const [teamList, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    setTeams(teamData.teams);
  }, []);

  return (
    <div className="App">
      <HeadingSection />
      <TeamList teams={teamList} />
    </div>
  );
}

export default App;
