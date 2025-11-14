import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Navbar } from "../../components";
import { GetTeam } from "../../service";
import type { team } from "../../types";

export function TeamPage() {
  let params = useParams();
  const teamID = params.sportsID || "";

  const [team, setTeam] = useState<team>();

  useEffect(() => {
    GetTeam(teamID, setTeam);
  }, [teamID]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-1 gap-1">
        {/* { team?.logo } */}

        <div className="flex flex-col p-1 gap-1 bg-red rounded-xl">
          <p className="text-xlarge">{ team?.name }</p>
          <div className="flex flex-col p-1 gap-1 bg-grey rounded-xl">
            <p className="text-medium">Sport: { team?.sports.name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()) }</p>
            <p className="text-medium">Division: { team?.division.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()) }</p>
            <p className="text-medium">Coach: { team?.coach }</p>
          </div>
        </div>

        <div className="flex flex-col p-1 gap-1 bg-red rounded-xl">
          <p className="text-xlarge">Players</p>
          <div className="grid grid-cols-3 gap-1 rounded-xl">
            { team?.players?.map((player, index) => (
              <a href="#">
                <div key={ index } className="flex flex-col p-1 gap-1 bg-grey rounded-xl">
                  <img src={ team.logo } className="w-full aspect-3/1 object-cover rounded-xl"/>
                  <div>
                    <div className="flex flex-row">
                      <p className="mr-auto text-medium">{ player.name }</p>
                      <p className="text-large">{ player.jerseyNumber }</p>
                    </div>
                    <div className="flex flex-row">
                      { player.positions.map((position, index) => (
                        <p key={ index } className="text-small">{ position }</p>
                      )) }
                    </div>
                  </div>
                </div>
              </a>
            )) }
          </div>
        </div>
      </div>
    </>
  )
}