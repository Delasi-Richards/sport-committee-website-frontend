// Components
import { Navbar } from "../components"

// Constants
import { dateOptions, basketballIntroText } from "../constants"

function BasketballPage() {

  // Temporary placeholder data. Replace with API calls to Sanity
  const leagueTableData = [
    {
      name: "Team A",
      W: "0",
      L: "0",
      W_PCT: "0%",
      GB: "0",
      STRK: "W0"
    },
    {
      name: "Team B",
      W: "0",
      L: "0",
      W_PCT: "0%",
      GB: "0",
      STRK: "W0"
    },
    {
      name: "Team C",
      W: "0",
      L: "0",
      W_PCT: "0%",
      GB: "0",
      STRK: "W0"
    },
    {
      name: "Team D",
      W: "0",
      L: "0",
      W_PCT: "0%",
      GB: "0",
      STRK: "W0"
    }
  ]
  const statisticsData = [
    {
      "sport": "Basketball",
      "statistic": "Points",
      "standings": [
        {"name": "Player 1", "team": "Team", "value": 23},
        {"name": "Player 2", "team": "Team", "value": 21},
        {"name": "Player 3", "team": "Team", "value": 19},
        {"name": "Player 4", "team": "Team", "value": 15},
      ]
    },
    {
      "sport": "Basketball",
      "statistic": "3-Pointers",
      "standings": [
        {"name": "Player 1", "team": "Team", "value": 19},
        {"name": "Player 2", "team": "Team", "value": 18},
        {"name": "Player 3", "team": "Team", "value": 17},
        {"name": "Player 4", "team": "Team", "value": 16},
      ]
    }
  ]
  const newsData = [
    {
      "title": "League Starts Next Week",
      "imageCard": "https://picsum.photos/800",
      "date": new Date("2025-01-01"),
      "tags": ["Basketball", "League"]
    },
    {
      "title": "Player Moves To New Team",
      "imageCard": "https://picsum.photos/801",
      "date": new Date("2025-02-02"),
      "tags": ["Basketball", "Transfers"]
    },
    {
      "title": "Inter-school Competition Kicks Off",
      "imageCard": "https://picsum.photos/802",
      "date": new Date("2025-03-03"),
      "tags": ["Football", "Basketball", "Volleyball"]
    },
  ]

  return (
    <>
      <Navbar />
      
      <div className="flex flex-col p-1 gap-1">

        {/* Intro */}
        <div className="relative w-full h-[90vh] overflow-hidden">
          <img src="src/assets/basketball.jpg" className="size-full rounded-xl object-cover" />
          <div className="absolute bottom-1/9 left-0 right-0 mx-auto p-2 w-9/10 justify-items-center-safe bg-red rounded-xl">
            <p className="mb-2 text-large text-center">
              { basketballIntroText }
            </p>
            <ol className="flex flex-row w-full gap-2 justify-evenly">
              <li className="text-medium">Fixtures</li>
              <li className="text-medium">Statistics</li>
              <li className="text-medium">News</li>
              <li className="text-medium">Teams</li>
              <li className="text-medium">Players</li>
            </ol>
          </div>
        </div>

        <div className="flex flex-row gap-1">

          {/* League Table */}
          <div className="flex-auto p-1 bg-red rounded-xl">
            <p className="text-xlarge">League Table</p>
            <table className="w-full bg-grey text-medium border-collapse rounded-xl">
              <thead>
                <tr className="flex flex-row pr-1">
                  <th className="p-1 mr-auto font-normal">Team</th>
                  <th className="p-1 w-2/25 font-normal text-center">W</th>
                  <th className="p-1 w-2/25 font-normal text-center">L</th>
                  <th className="p-1 w-2/25 font-normal text-center">W%</th>
                  <th className="p-1 w-2/25 font-normal text-center">GB</th>
                  <th className="p-1 w-2/25 font-normal text-center">STK</th>
                </tr>
              </thead>
              <tbody>
                { leagueTableData.map((team, index) => (
                  <tr key={ index } className="flex flex-row pr-1 border-t-1 border-white">
                    <td className="p-1 mr-auto">{ team.name }</td>
                    <td className="p-1 w-2/25 text-center">{ team.W }</td>
                    <td className="p-1 w-2/25 text-center">{ team.L }</td>
                    <td className="p-1 w-2/25 text-center">{ team.W_PCT }</td>
                    <td className="p-1 w-2/25 text-center">{ team.GB }</td>
                    <td className="p-1 w-2/25 text-center">{ team.STRK }</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stat Leaders */}
          <div className="flex-auto p-1 bg-red rounded-xl">
            <p className="text-xlarge">Stat Leaders</p>
            <div className="flex flex-row gap-1">
              { statisticsData.map((statistic, index) => (
                <div key={ index } className={ `flex-1 p-1 h-full bg-grey rounded-xl` }>
                  <p className="text-large">{ statistic.statistic }</p>
                  <ul className="flex flex-col gap-1">
                    { statistic.standings.map((standing, index) => (
                      <li className="flex flex-row list-none" key={ index }>
                        <div className="mr-auto">
                          <p className="text-medium">{ standing.name }</p>
                          <p className="text-small">{ standing.team }</p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-medium">{ standing.value }</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Lastest News */}
        <div className="p-1 bg-red rounded-xl">
          <p className="text-xlarge">Lastest News</p>
          <div className="flex flex-row gap-1">
            { newsData.map((news, index) => (
              <div key={ index } className={ `flex-1 flex flex-col p-1 gap-1 bg-grey rounded-xl` }>
                <img src={ news.imageCard } className="w-full aspect-3/1 object-cover rounded-xl"></img>
                <p className="text-large">{ news.title }</p>
                <div className="flex flex-row">
                  <div className="flex flex-row gap-1.5">
                    { news.tags.map((tag, index) => (
                      <p key={ index } className="text-small">{ tag }</p>
                    )) }
                  </div>
                  <div className="ml-auto">
                    <p className="text-small">{ news.date.toLocaleDateString("en-UK", dateOptions) }</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default BasketballPage