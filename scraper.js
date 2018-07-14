const { JSDOM } = require('jsdom');
const axios = require('axios');
const debug = require('debug')('scrape:scraper');

const baseurl = 'https://status.slack.com/';

const scrape = async () => {
  debug('attempting to GET', baseurl);
  const { data } = await axios.get(baseurl);
  const dom = new JSDOM(data);

  // sometimes there's no main status
  let main;
  try {
    main = dom.window.document.getElementsByTagName('h1')[0].textContent;
  } catch(err) {
    main = 'No Status';
  }

  const services = Array.from(dom.window.document.querySelectorAll('.service.header.align_center'));
};


module.exports = scrape;