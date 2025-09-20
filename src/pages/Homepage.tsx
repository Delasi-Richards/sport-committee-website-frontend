// Components
import { Navbar, Carousel } from "../components"

// Constants
import { dateOptions, timeOptions } from "../constants"

// Types
import type { carouselContent, match } from "../types"

function Homepage() {

  // Temporary placeholder data. Replace with API calls to Sanity
  const carouselData : carouselContent[] = [
    {
      image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "Image 1",
      subHeader: "This is image 1"
    },
    {
      image: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "Image 2",
      subHeader: "This is image 2"
    },
    {
      image: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "Image 3",
      subHeader: "This is image 3"
    },
    {
      image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
      header: "Image 4",
      subHeader: "This is image 4"
    }
  ]
  const upcomingMatchesData : match[] = [
    {
      teamA: "Team A",
      teamB: "Team B",
      teamALogo: "https://picsum.photos/32",
      teamBLogo: "https://picsum.photos/33",
      datetime: new Date("2025-01-01T11:30:00Z")
    },
    {
      teamA: "Team C",
      teamB: "Team D",
      teamALogo: "https://picsum.photos/34",
      teamBLogo: "https://picsum.photos/35",
      datetime: new Date("2025-02-02T13:30:00Z")
    },
    {
      teamA: "Team E",
      teamB: "Team F",
      teamALogo: "https://picsum.photos/36",
      teamBLogo: "https://picsum.photos/37",
      datetime: new Date("2025-03-03T15:30:00Z")
    },
    {
      teamA: "Team G",
      teamB: "Team H",
      teamALogo: "https://picsum.photos/38",
      teamBLogo: "https://picsum.photos/39",
      datetime: new Date("2025-04-04T17:30:00Z")
    },
  ]
  const statisticsData = [
    {
      "sport": "Basketball",
      "statistic": "3 Pointers",
      "standings": [
        {"name": "Player 1", "value": 10},
        {"name": "Player 2", "value": 8},
        {"name": "Player 3", "value": 6},
        {"name": "Player 4", "value": 5},
      ]
    },
    {
      "sport": "Football",
      "statistic": "Goals",
      "standings": [
        {"name": "Player 1", "value": 23},
        {"name": "Player 2", "value": 21},
        {"name": "Player 3", "value": 19},
        {"name": "Player 4", "value": 15},
      ]
    },
    {
      "sport": "Volleyball",
      "statistic": "Points",
      "standings": [
        {"name": "Player 1", "value": 15},
        {"name": "Player 2", "value": 10},
        {"name": "Player 3", "value": 9},
        {"name": "Player 4", "value": 5},
      ]
    },
    {
      "sport": "Basketball",
      "statistic": "Points",
      "standings": [
        {"name": "Player 1", "value": 50},
        {"name": "Player 2", "value": 40},
        {"name": "Player 3", "value": 30},
        {"name": "Player 4", "value": 20},
      ]
    },
    {
      "sport": "Football",
      "statistic": "Assists",
      "standings": [
        {"name": "Player 1", "value": 19},
        {"name": "Player 2", "value": 18},
        {"name": "Player 3", "value": 17},
        {"name": "Player 4", "value": 16},
      ]
    },
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
      "tags": ["Football", "Transfers"]
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
        {/* Carousel */}
        <Carousel content={ carouselData } />

        {/* Upcoming Matches */}
        <div className="p-1 bg-red rounded-xl">
          <p className="text-xlarge">Upcoming Matches</p>

          <div className="flex flex-col gap-1">
            { upcomingMatchesData.map((match, index) => (
              <div key={ index } className="flex flex-row p-1 items-center-safe bg-grey rounded-xl">
                <div className="flex flex-row mr-auto gap-1">
                  <img src={ match.teamALogo } width="32px" height="32px" alt={ match.teamA + "'s logo" } />
                  <p className="text-large">{ match.teamA } vs. { match.teamB }</p>
                  <img src={ match.teamBLogo } width="32px" height="32px" alt={ match.teamB + "'s logo" } />
                </div>

                <div className="justify-self-end-safe">
                  <p className="text-small">
                    { match.datetime.toLocaleDateString("en-UK", dateOptions) }, { match.datetime.toLocaleTimeString("en-US", timeOptions) }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
          
        {/* Statistics */}
        <div className="p-1 bg-red rounded-xl">
          <p className="text-xlarge">Statistics</p>

          <div className="flex flex-row gap-1">
            { statisticsData.map((statistic, index) => (
              <div key={ index } className={ `flex-1 p-1 bg-grey rounded-xl` }>
                <p className="text-large">{ statistic.sport } - { statistic.statistic }</p>
                
                <ol className="list-inside list-decimal">
                  { statistic.standings.map((standing, index) => (
                    <li className="text-small" key={ index }>{ standing.name } - { standing.value }</li>
                  ))}
                </ol>
              </div>
            ))}
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

export default Homepage
