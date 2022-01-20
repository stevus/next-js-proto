import _ from 'lodash';

const filenames = preval`

  module.exports = require('glob').sync('**/*.mdx')
`;

const files = () => {
  const filesByTemplate = {};
  _.forEach(filenames, file => {
    const template = file.split('/').shift();
    if (_.has(filesByTemplate, template)) {
      filesByTemplate[template].push(file);
    } else {
      filesByTemplate[template] = [file];
    }
  });
  return filesByTemplate;
};

export const posts = files().posts.map(file => {
  const {
    default: Component,
    meta: { title, excerpt, publishDate },
  } = require('../posts/' + file.replace('posts/', ''));

  const url = file
    .split('/')
    .pop()
    .split('.')
    .shift();

  return {
    Component,
    url,
    title,
    excerpt,
    publishDate: new Date(publishDate),
  };
});

export const landingPages = files().landingPages.map(file => {
  const {
    default: Component,
    meta: { title, excerpt, publishDate },
  } = require('../landingPages/' + file.replace('landingPages/', ''));

  const url = file
    .split('/')
    .pop()
    .split('.')
    .shift();

  return {
    Component,
    title,
    url,
    publishDate: new Date(publishDate),
  };
});
