function getJSONP(url, cb) {
  var script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}

module.exports = {
  getJSONP,
};
