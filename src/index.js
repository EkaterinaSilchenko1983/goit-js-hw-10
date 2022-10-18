import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
import markuplist from './templates/markuplist.hbs';
import markupinfo from './templates/markupinfo.hbs';
const DEBOUNCE_DELAY = 300;

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const searchValue = e.target.value.trim();
  if (!searchValue) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
  }

  fetchCountries(searchValue)
    .then(countries => {
      if (countries.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (2 <= countries.length && countries.length <= 10) {
        countryInfo.innerHTML = '';
        renderList(countries);
      } else if (countries.length === 1) {
        countryList.innerHTML = '';
        renderInfo(countries);
      }
    })
    .catch(err => {
      Notiflix.Notify.failure(err.message);
    });
}

function renderList(countries) {
  const markupListCountries = markuplist(countries);
  countryList.innerHTML = markupListCountries;
}
function renderInfo(countries) {
  const markupInfoCountries = markupinfo(countries);
  countryInfo.innerHTML = markupInfoCountries;
}
