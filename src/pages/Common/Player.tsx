import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Navbar } from "../../components";
import { GetPlayer } from "../../service";
import type { player } from "../../types";

export function PlayerPage() {
  let params = useParams();
  const playerID = params.playerID || "";

  const [player, setPlayer] = useState<player>();

  useEffect(() => {
    GetPlayer(playerID, setPlayer);
  }, [playerID]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-1 gap-1">
        <div className="flex flex-col p-1 gap-1 bg-red rounded-xl">
          <p className="text-xlarge">{ player?.name }</p>
          <div className="flex flex-col p-1 gap-1 bg-grey rounded-xl">
            <p className="text-medium">Jersey Number: { player?.jerseyNumber }</p>
            <a href={ `/${player?.team.sports.name}/teams/${player?.team.id}` }>
              <p className="text-medium">Team: { player?.team.name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()) }</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col p-1 gap-1 bg-red rounded-xl">
          <p className="text-xlarge">Positions:</p>
          <div className="grid grid-cols-5 gap-1 rounded-xl">
            { player?.positions.map((position, index) => (
              <div className="p-1 bg-grey rounded-xl">
                <p key={ index } className="text-medium">{ position }</p>
              </div>
            )) }
          </div>
        </div>

        <div className="flex flex-col p-1 gap-1 bg-red rounded-xl">
          <p className="text-xlarge">Statistics</p>
          <div className="grid grid-cols-5 gap-1 rounded-xl">
            {/* { player?.stats.map((stat, index) => (
              <div className="p-1 bg-grey rounded-xl">
                <p key={ index } className="text-medium">{ stat }</p>
              </div>
            )) } */}
          </div>
        </div>
      </div>
    </>
  )
}