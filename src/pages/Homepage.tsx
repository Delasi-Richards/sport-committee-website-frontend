// Components
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"

// Types
import type { carouselContent, match } from "../types/common.types"

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
    }
  ]
  const upcomingMatchesData : match[] = [
    {
      teamA: "Team A",
      teamB: "Team B",
      teamALogo: "https://picsum.photos/32",
      teamBLogo: "https://picsum.photos/33",
      datetime: new Date("2024-04-13T08:30:00Z")
    },
    {
      teamA: "Team C",
      teamB: "Team D",
      teamALogo: "https://picsum.photos/34",
      teamBLogo: "https://picsum.photos/35",
      datetime: new Date("2024-04-13T08:30:00Z")
    },
    {
      teamA: "Team E",
      teamB: "Team F",
      teamALogo: "https://picsum.photos/36",
      teamBLogo: "https://picsum.photos/37",
      datetime: new Date("2024-04-13T17:30:00Z")
    },
  ]
  const statistics = [
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
  ]

  // Options for displaying date and time
  let dateOptions: Intl.DateTimeFormatOptions = {
		weekday: "long",
    day: "numeric",
		month: "short",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
	};

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
            { upcomingMatchesData.map((match, _) => (
              <div className="flex flex-row p-1 items-center-safe bg-grey rounded-xl">
                <div className="flex flex-row mr-auto gap-1">
                  <img src={ match.teamALogo } width="32px" height="32px" alt={ match.teamA + "'s logo" } />
                  <p className="text-large">{ match.teamA } vs. { match.teamB }</p>
                  <img src={ match.teamBLogo } width="32px" height="32px" alt={ match.teamB + "'s logo" } />
                </div>

                <div className="justify-self-end-safe">
                  <p className="text-small">{ match.datetime.toLocaleString("en-US", dateOptions) }</p>
                </div>
              </div>
            ))}
          </div>
        </div>
          
        {/* Statistics */}
        <div className="p-1 bg-red rounded-xl">
          <p className="text-xlarge">Statistics</p>

          <div className="flex flex-row gap-1">
            { statistics.map((statistic, _) => (
              <div className={ `flex-[${statistics.length.toString()}] p-1 bg-grey rounded-xl` }>
                <p className="text-large">{ statistic.sport } - { statistic.statistic }</p>
                
                <ol className="list-inside list-decimal">
                  { statistic.standings.map((standing, _) => (
                    <li className="text-small">{ standing.name } - { standing.value }</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

      </div>

    </>
  )
}

export default Homepage
