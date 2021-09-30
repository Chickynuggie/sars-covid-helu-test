# helu-covid-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Unfortunately, COVID-19 is a serious issue nowadays. We would like you to create a SPA that helps to track data about this virus.

The SPA should consume data from https://covid19api.com/ and have the following features:

1. Display the data from the API in a tabular format, with the following columns:
    1.  Country name
    2.  The current total of the number of active cases,  since day 1
    3.  The current total of the number of deaths,  since day 1
    4.  The current total of the number of recoveries,  since day 1
2. The table view should also have a “TOTALS” row, which shows the sum of the displayed data in each column.
3. The user should be able to switch to another view that displays the data on a column chart.
4.  In the UI, there should be an input field that
    1.  Autocompletes for country names
    2.  Filters/searches for the input value in the data (country names) so that the views reflect the filtered dataset in both the tabular and the chart view


Premises
·  Please, only use publicly available resources during the creation of the SPA.
·  Please, publish the SPA so, that we can access both the UI (production version) and the development code, remotely.
·  Please, use Twitter Bootstrap 4 as the UI library.
·  Please, use Vue as the frontend framework (we are working with that).