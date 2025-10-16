// Components
import { Navbar, Carousel } from "../../components"

// Constants
import { dateOptions, timeOptions } from "../../constants"

// Mock Data
import { homeCarouselData, homeUpcomingMatchesData, homeStatisticsData, homeNewsData } from "../../constants"

export function Homepage() {

  return (
    <>
      <Navbar />

      <div className="flex flex-col p-1 gap-1">
        {/* Carousel */}
        <Carousel content={ homeCarouselData } />

        {/* Upcoming Matches */}
        <div className="p-1 bg-red rounded-xl">
          <p className="text-xlarge">Upcoming Matches</p>

          <div className="flex flex-col gap-1">
            { homeUpcomingMatchesData.map((match, index) => (
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
            { homeStatisticsData.map((statistic, index) => (
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
            { homeNewsData.map((news, index) => (
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
