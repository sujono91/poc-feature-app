#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ejs = require('ejs');

const filesDirectory = path.join(__dirname, '../src');
const targetEnvironmentTemplateFileName = 'environments/environment.prod.ts.template';
const targetEnvironmentFileName = 'environments/environment.prod.ts';
const appRoutesTemplate = 'app/app-routes.ts.template';
const appRoutesTarget = 'app/app-routes.ts';

const convertFeatureToClassName = (feature) => {
  return `${feature.charAt(0).toUpperCase()}${feature.slice(1)}PageModule`;
}

// Define default values in case there are no defined ones,
// but you should define only non-crucial values here,
// because build should fail if you don't provide the correct values
// for your production environment
const templateVariables = {
  PREFIX_FEATURES: ['contact', 'promotions']
};
// get features
const { features } = process.env;
templateVariables.PREFIX_FEATURES = features ? features.split(' ') : templateVariables.PREFIX_FEATURES;

let templateFile;
let output;
/* GENERATE ANGULAR ENVIRONMENT */
// Load template file
templateFile = fs.readFileSync(
  path.join(filesDirectory, targetEnvironmentTemplateFileName),
  {encoding: 'utf-8'}
);
// Generate output data
output = ejs.render(templateFile, templateVariables);
// Write environment file
fs.writeFileSync(path.join(filesDirectory, targetEnvironmentFileName), output);

/* GENERATE ANGULAR APP ROUTES */
templateVariables.PREFIX_APP_ROUTES = templateVariables.PREFIX_FEATURES.map((feature) => {
  return {
    path: feature,
    loadChildren: `./${feature}/${feature}.module#${convertFeatureToClassName(feature)}`
  }
});
templateFile = fs.readFileSync(
  path.join(filesDirectory, appRoutesTemplate),
  {encoding: 'utf-8'}
);
output = ejs.render(templateFile, templateVariables);
fs.writeFileSync(path.join(filesDirectory, appRoutesTarget), output);

process.exit(0);