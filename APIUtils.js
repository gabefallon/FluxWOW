var xhr = require('./lib/xhr');
var { API, Params, ActionTypes } = require('./Constants');
var ServerActionCreators = require('./ServerActionCreators');

var APIUtils = {
  loadCharacter: function (name) {
    xhr.getJSONP(`${API}${name}${Params}`, function (err, res) {
    	ServerActionCreators.loadedCharacter(res);
    });
  }
};

module.exports = APIUtils;
