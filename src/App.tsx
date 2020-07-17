import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  parseData,
  cms_sheet
} from './components/API';
import axios from 'axios';

function App() {

  const [content, setContent] = useState<any>({})

  const closeLoading = () => {
    let cloader = document.getElementById('close-loader') as HTMLButtonElement;
    let pageloader = document.getElementById('initPage') as HTMLButtonElement;
    cloader.click()
    pageloader.click()
  }

  const fetchContent = () => {
    axios.all([
      axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/1/public/full?alt=json`),
      axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/2/public/full?alt=json`),
      axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/3/public/full?alt=json`),
      axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/4/public/full?alt=json`),
      axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/5/public/full?alt=json`),
      axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/6/public/full?alt=json`),

    ]).then(cmsData => {
      let cms_content = {
        news: parseData(cmsData[0].data.feed.entry),
        contact: parseData(cmsData[1].data.feed.entry),
        announcements: parseData(cmsData[2].data.feed.entry),
        admissions: parseData(cmsData[3].data.feed.entry),
        programs: parseData(cmsData[4].data.feed.entry),
        about: parseData(cmsData[5].data.feed.entry)
      }

      // console.log(cms_content)
      setContent(cms_content)
      closeLoading()
    })
  }

  useEffect(() => {
    fetchContent()
  }, [])

  return (
    <>
      <div id="preloader" />
      {
        Object.values(content).length !== 0 && (
          <Router>
            <Switch>
              <Route path="/">
                <Home content={content} />
              </Route>
            </Switch>
          </Router>

        )
      }
    </>
  );
}

export default App;
