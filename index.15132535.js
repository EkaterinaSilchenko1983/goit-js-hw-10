!function(){var n;document.querySelector(".country-list");fetch("".concat("https://restcountries.com/v3.1","/name/").concat(n,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error;return n.json()})).then((function(n){console.log(n)})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.15132535.js.map
