import type { team, player } from "../types";


const backend_url = import.meta.env.VITE_BACKEND_API_KEY;

export async function GetTeams(setTeams: (teams: team[]) => void) {
  try {
    const res = await fetch(`${backend_url}teams`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);

    try {
      const raw = await res.json();
      const teams: team[] = raw.data.map((team: any) => ({
        id: team.id,
        name: team.name,
        logo: team.logo,
        sports: {
          id: team.sports.id,
          name: team.sports.name,
        },
      }));
      setTeams(teams);
    }
    catch (err) {
      throw new Error("Unable to parse response");
    }
  }
  catch (err) {
    console.error(err);
  }
}

export async function GetTeam(teamID: string, setTeam: (team: team) => void) {
  try {
    const res = await fetch(`${backend_url}teams/${teamID}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);

    try {
      const raw = await res.json();
      const team: team = {
        id: raw.data.id,
        name: raw.data.name,
        logo: raw.data.logo,
        coach: raw.data.coach,
        sportsId: raw.data.sportsId,
        division: raw.data.division,
        sports: {
          id: raw.data.sports.id,
          name: raw.data.sports.name,
        },
        players: raw.data.players.map((player: any) => ({
          id: player.id,
          name: player.name,
          positions: player.positions,
          jerseyNumber: player.jerseyNumber,
          teamID: player.teamId
        }))
      };
      setTeam(team);
    }
    catch (err) {
      throw new Error("Unable to parse response" + err);
    }
  }
  catch (err) {
    console.error(err);
  }
}

export async function GetPlayers(setPlayers: (players: player[]) => void) {
  try {
    const res = await fetch(`${backend_url}players`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);

    try {
      const raw = await res.json();
      const players: player[] = raw.data.map((player: any) => ({
        id: player.id,
        name: player.name,
        team: {
          id: player.team.id,
          name: player.team.name,
          logo: player.team.logo,
          sports: {
            id: player.team.sports.id,
            name: player.team.sports.name,
          }
        },
      }));
      setPlayers(players);
    }
    catch (err) {
      throw new Error("Unable to parse response");
    }
  }
  catch (err) {
    console.error(err);
  }
}

export async function GetPlayer(playerID: string, setPlayer: (player: player) => void) {
  try {
    const res = await fetch(`${backend_url}players/${playerID}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);

    try {
      const raw = await res.json();
      const player: player = {
        id: raw.data.id,
        name: raw.data.name,
        positions: raw.data.positions,
        jerseyNumber: raw.data.jerseyNumber,
        teamId: raw.data.teamId,
        team: raw.data.team,
        stats: raw.data.stats
      };
      setPlayer(player);
    }
    catch (err) {
      throw new Error("Unable to parse response: " + err);
    }
  }
  catch (err) {
    console.error(err);
  }
}