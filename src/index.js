import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const countryList = document.querySelector('.country-list');

import { fetchCountries } from './js/fetchCountries';

fetchCountries()
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));

function markupCreate(arr) {}
