const compose = require('next-compose');
const withMDX = require('@zeit/next-mdx');
const withSourceMaps = require('@zeit/next-source-maps');
const glob = require('glob');

const withMDXConfig = {
  pageExtensions: ['js', 'md', 'mdx'],
};

const exportPathMap = defaultPathMap => {
  // Don't show our templates
  delete defaultPathMap['/posts'];
  delete defaultPathMap['/landingPages'];

  const paths = defaultPathMap;
  // Grab all the mds files
  glob.sync('**/*.mdx').map(file => {
    // Grab the file name and use that as the url
    const template = file.split('/').shift();
    const url = file
      .split('/')
      .pop()
      .split('.')
      .shift();
    paths[`/${url}`] = {
      page: `/${template}`,
      query: { url },
    };
  });
  return paths;
};

const config = compose([[withMDX, withMDXConfig], [withSourceMaps]]);

config.exportPathMap = exportPathMap;

module.exports = config;
