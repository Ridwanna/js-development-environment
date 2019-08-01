
export default function getBaseUrl () {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://stormy-cliffs-99028.herokuapp.com/';
}

function getQueryStringParameterByName (name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  let results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


