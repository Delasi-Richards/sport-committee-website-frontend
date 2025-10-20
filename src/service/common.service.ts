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
      const teams: team[] = raw.data.map((d: any) => ({
        id: d.id,
        name: d.name,
        logo: d.logo,
        sports: {
          id: d.sports.id,
          name: d.sports.name,
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

export async function GetPlayers(setPlayers: (players: player[]) => void) {
  try {
    const res = await fetch(`${backend_url}players`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);

    try {
      const raw = await res.json();
      const players: player[] = raw.data.map((d: any) => ({
        id: d.id,
        name: d.name,
        team: {
          id: d.team.id,
          name: d.team.name,
          logo: d.team.logo,
          sports: {
            id: d.team.sports.id,
            name: d.team.sports.name,
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
