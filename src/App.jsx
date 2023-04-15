import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import NewsCard from "./components/NewsCard"
import Footer from "./components/Footer"

export default function App() {
  const url = 'https://hn.algolia.com/api/v1/search?query=G20'

  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('G20');
  const [mode, setMode] = useState("light");
  useEffect(() => {
    // fetchAPI("https://gnews.io/api/v4/top-headlines?category=g20&apikey=f96a71cb3c6a6802916af709d91f00e2")
    fetchAPI(url)
  }, [])

  const fetchAPI = async (url) => {
    const data = await fetch(url);
    const dataDisplayed = await data.json();
    setNews(dataDisplayed.hits)
  }

  const toggleTheme = () => {
    if (mode == "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      document.body.style.color = "white";
    }
  }

  const homeOnClick = () => {
    setQuery('G20')
    fetchAPI(`https://hn.algolia.com/api/v1/search?query=${query}`)
    returnPart()
  }
  const tradeOnClick = () => {
    setQuery('trade')
    fetchAPI(`https://hn.algolia.com/api/v1/search?query=${query}`)
    returnPart()
  }
  const politicsOnClick = () => {
    setQuery('politics')
    fetchAPI(`https://hn.algolia.com/api/v1/search?query=${query}`)
    returnPart()
  }
  const financeOnClick = () => {
    setQuery('finance')
    fetchAPI(`https://hn.algolia.com/api/v1/search?query=${query}`)
    returnPart()
  }
  const searchOnChange = (e) => {
    const val = e.target.value
    setQuery(val)
    fetchAPI(`https://hn.algolia.com/api/v1/search?query=${query}`)
    returnPart()
  }

  const returnPart = () => {
    return (
      <div className="container my-3">
        <div className="row">
          {
            news.map(news => {
              return (
                <div className="col-6">
                  <NewsCard nT={news.title} nA={news.author} nURL={news.url} nCA={news.created_at} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  return (
    <main>
      <Navbar hOC={homeOnClick} tOC={tradeOnClick} pOC={politicsOnClick} fOC={financeOnClick} sOC={searchOnChange} mode={mode} tT={toggleTheme} />

      <div className="container my-3">
        <div className="row">
          {
            news.map(news => {
              return (
                <div className="col-6">
                  <NewsCard nT={news.title} nA={news.author} nURL={news.url} nCA={news.created_at} mode={mode} />
                </div>
              )
            })
          }
        </div>
      </div>
      <br />
      <Footer mode={mode} />
    </main>
  )
}






