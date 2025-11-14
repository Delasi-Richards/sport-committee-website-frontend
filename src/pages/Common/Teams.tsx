import { useState, useEffect } from "react";
import { useParams } from "react-router";

// Components
import { Navbar } from "../../components";

// Types
import type { team } from "../../types";

// Service
import { GetTeams } from "../../service";


export function TeamsPage() {
  let params = useParams();
  const sport = params.sport

  const [teams, setTeams] = useState<team[]>([]);

  useEffect(() => {
    GetTeams(setTeams);
  }, [sport]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-1 gap-1">
        <div className="grid grid-cols-3 gap-1 p-1 rounded-xl">
          { teams?.map((team, index) => (
            <a href={ `/${sport}/teams/${team.id}` }>
              <div key={ index } className="flex flex-col p-1 gap-1 bg-red rounded-xl">
                <img src={ team.logo } className="w-full aspect-3/1 object-cover rounded-xl" />
                <div>
                  <p className="text-large">{ team.name }</p>
                  <p className="text-small">{ team.sports.name }</p>
                </div>
              </div>
            </a>
          )) }
        </div>
      </div>
    </>
  )
}