const { JSDOM } = require('jsdom');
const axios = require('axios');
const debug = require('debug')('scrape:scraper');

const baseurl = 'https://status.slack.com/';

const iconLookup = {
  '/img/v2/TableCheck.png': 'No Issues',
  '/img/v2/TableMaintenance.png': 'Maintenance',
  '/img/v2/TableNotice.png': 'Notice',
  '/img/v2/TableIncident.png': 'Incident',
  '/img/v2/TableOutage.png': 'Outage',
};

const scrape = async () => {
  debug('attempting to GET', baseurl);
  const { data } = await axios.get(baseurl);
  debug('Retrieved HTML, converting to DOM');
  const dom = new JSDOM(data);
  debug('parsed to DOM');

  // sometimes there's no main status
  debug('attempting to get main status');
  let main;
  try {
    main = dom.window.document.getElementsByTagName('h1')[0].textContent;
  } catch(err) {
    main = 'No Status';
  }

  debug('parsing remaining status');
  const services = Array
  .from(dom.window.document.querySelectorAll('.service.header.align_center'))
  .reduce((statusObj, serviceDOM) => {
    const [service, stat] = serviceDOM.children;
    const serviceName = service.children[0].textContent;
    debug('serviceName get', serviceName);
    const status = stat.children[0].src;
    debug('image get', status);
    statusObj[serviceName] = iconLookup[status];
    return statusObj;
  }, {});
  return {
    status: main,
    services,
  }
};

module.exports = scrape;