import { useState, useEffect } from "react";
import { useParams } from "react-router";

// Constants
import { dateOptions, timeOptions } from "../../constants";

// Components
import { Navbar } from "../../components";

// Types
import type { match } from "../../types";

// Mock Data
import { footballMatchData, basketballMatchData, volleyballMatchData } from "../../constants";

export function MatchesPage() {
  let params = useParams();
  const sport = params.sport

  const [matches, setMatches] = useState<match[]>([]);

  useEffect(() => {
    let selectedTeams: any[];
    switch (sport) {
      case "football":
        selectedTeams = footballMatchData;
        break;
      case "basketball":
        selectedTeams = basketballMatchData;
        break;
      case "volleyball":
        selectedTeams = volleyballMatchData;
        break;
      default:
        selectedTeams = [...footballMatchData, ...basketballMatchData, ...volleyballMatchData];
        break;
    }
    setMatches(selectedTeams);
  }, [sport]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-1 gap-1">
        <div className="grid grid-cols-2 gap-1 p-1 rounded-xl">
          { matches?.map((match, index) => (
            <div key={ index } className="grid grid-cols-3 p-1 gap-1 bg-red rounded-xl">
              <div className="justify-self-start flex flex-row gap-1 items-center">
                <img src={ match.teamALogo } width="32px" height="32px" alt={ match.teamA + "'s logo" } />
                <p className="text-large">{ match.teamA }</p>
              </div>
              <div className="justify-self-center-safe flex flex-col items-center">
                <p className="text-small">
                  { match.datetime.toLocaleDateString("en-UK", dateOptions) }
                </p>
                <p className="text-small">
                  { match.datetime.toLocaleTimeString("en-US", timeOptions) }
                </p>
              </div>
              <div className="justify-self-end-safe flex flex-row gap-1 items-center">
                <p className="text-large">{ match.teamB }</p>
                <img src={ match.teamBLogo } width="32px" height="32px" alt={ match.teamB + "'s logo" } />
              </div>
            </div>
          )) }
        </div>
      </div>
    </>
  )
}