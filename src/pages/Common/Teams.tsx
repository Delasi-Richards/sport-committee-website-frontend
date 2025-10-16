import { useState, useEffect } from "react";
import { useParams } from "react-router";

// Components
import { Navbar } from "../../components";

// Mock Data
import { footballTeams, basketballTeams, volleyballTeams } from "../../constants";

export function TeamsPage() {
  let params = useParams();
  const sport = params.sport

  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    let selectedTeams: any[];
    switch (sport) {
      case "football":
        selectedTeams = footballTeams;
        break;
      case "basketball":
        selectedTeams = basketballTeams;
        break;
      case "volleyball":
        selectedTeams = volleyballTeams;
        break;
      default:
        selectedTeams = [...footballTeams, ...basketballTeams, ...volleyballTeams];
        break;
    }
    setTeams(selectedTeams);
  }, [sport]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-1 gap-1">
        <img src="src/assets/football.jpg" className="size-full rounded-xl object-cover" />

        <div className="grid grid-cols-3 p-1 gap-1 bg-white rounded-xl">
          { teams?.map((team, index) => (
            <div key={ index } className="flex flex-col p-1 gap-1 bg-red rounded-xl">
              <img src={ team.logo } className="w-full aspect-3/1 object-cover rounded-xl"></img>
              <div>
              <p className="text-large">{ team.name }</p>
              <p className="text-small">{ team.sport }</p>
              </div>
            </div>
          )) }
        </div>

      </div>
    </>
  )
}