// Types
import type { team } from "../types";

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
        sportsId: d.sportsId,
        division: d.division,
        sports: {
          id: d.sports?.id ?? null,
          name: d.sports?.name ?? "",
        },
      }));
  
      setTeams(teams);
    } catch (err) {
      throw new Error("Unable to parse response");
    }
  }
  catch (err) {
    console.error(err);
  }
}
