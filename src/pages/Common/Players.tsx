import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Navbar } from "../../components";
import type { player } from "../../types";
import { GetPlayers } from "../../service";


export function PlayersPage() {
  let params = useParams();
  const sport = params.sport

  const [players, setPlayers] = useState<player[]>([]);

  useEffect(() => {
    GetPlayers(setPlayers)
  }, [sport]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-1 gap-1">
        <div className="grid grid-cols-3 gap-1 p-1 rounded-xl">
          { players?.map((player, index) => (
            <div key={ index } className="flex flex-col p-1 gap-1 bg-red rounded-xl">
              <img src={ player.team.logo } className="w-full aspect-3/1 object-cover rounded-xl" />
              <div>
                <p className="text-large">{ player.name }</p>
                <div className="flex flex-row gap-1">
                  <p className="text-small">{ player.team.name }</p>
                  <p className="text-small">{ player.team.sports.name }</p>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </>
  )
}