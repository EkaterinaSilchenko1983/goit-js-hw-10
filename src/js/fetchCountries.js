const base_url = 'https://restcountries.com/v3.1';

export function fetchCountries(name) {
  return fetch(
    `${base_url}/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok || response.status === 404) {
      throw new Error();
    }
    return response.json();
  });
}
