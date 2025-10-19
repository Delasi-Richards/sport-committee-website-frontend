import { useState, useEffect } from "react";
import { useParams } from "react-router";

// Components
import { Navbar } from "../../components";

// Constants
import { dateOptions } from "../../constants";

// Types
import type { news } from "../../types";

// Mock Data
import { footballNewsData, basketballNewsData, volleyballNewsData } from "../../constants";

export function NewsPage() {
  let params = useParams();
  const sport = params.sport

  const [news, setNews] = useState<news[]>([]);

  useEffect(() => {
    let selectedNews: any[];
    switch (sport) {
      case "football":
        selectedNews = footballNewsData;
        break;
      case "basketball":
        selectedNews = basketballNewsData;
        break;
      case "volleyball":
        selectedNews = volleyballNewsData;
        break;
      default:
        selectedNews = [...footballNewsData, ...basketballNewsData, ...volleyballNewsData];
        break;
    }
    setNews(selectedNews);
  }, [sport]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-1 gap-1">
        <div className="grid grid-cols-3 gap-1 p-1 rounded-xl">
          { news?.map((news, index) => (
            <div key={ index } className="flex flex-col p-1 gap-1 bg-red rounded-xl">
              <img src={ news.imageCard } className="w-full aspect-3/1 object-cover rounded-xl" />
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
          )) }
        </div>
      </div>
    </>
  )
}