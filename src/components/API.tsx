// import React from 'react';
import axios from 'axios';


export const cms_sheet = "104iSuBzfBQz4LKxH0nNWoz3VqkHOr5aAVm-cj9MgIO4"

export const CMS_URL = `https://spreadsheets.google.com/feeds/cells/${cms_sheet}/2/public/full?alt=json`

// const [content, setContent] = useState([])

export const parseData = (data: any) => {
  let result: any = [];
  let keys: any = {};

  data.forEach((item: any) => {
    if (item.gs$cell.row === "1") {
      keys[item.gs$cell.col] = item.content.$t
    } else {
      if (item.gs$cell && item.gs$cell.col) {
        var entryIndex = parseInt(item.gs$cell.row)

        if (result[entryIndex - 2]) {
          result[entryIndex - 2][keys[item.gs$cell.col]] = item.content.$t
        } else {
          result[entryIndex - 2] = {}
          result[entryIndex - 2][keys[item.gs$cell.col]] = item.content.$t
        }
      }
    }
  });

  return result;
}

const closeLoading = () => {
  let cloader = document.getElementById('close-loader') as HTMLButtonElement;
  cloader.click()
}

export const fetchContent = () => {
  axios.all([
    axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/1/public/full?alt=json`),
    axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/2/public/full?alt=json`),
    axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/3/public/full?alt=json`),
    // axios.get(`https://spreadsheets.google.com/feeds/cells/${cms_sheet}/6/public/full?alt=json`),

  ]).then(cmsData => {
    let cms_content = {
      news: parseData(cmsData[0].data.feed.entry),
      contact: parseData(cmsData[1].data.feed.entry),
      announcements: parseData(cmsData[2].data.feed.entry),
    }

    console.log(cms_content)
    closeLoading()
  })
}

