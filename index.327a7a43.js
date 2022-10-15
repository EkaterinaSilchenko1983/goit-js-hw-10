document.querySelector(".country-list");var e;fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error;return e.json()})).then((e=>{console.log(e)})).catch((e=>console.log(e)));
//# sourceMappingURL=index.327a7a43.js.map
