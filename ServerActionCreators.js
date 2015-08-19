var ActionTypes = require('./Constants').ActionTypes;
var AppDispatcher = require('./AppDispatcher');

var ServerActionCreators = {
	loadedCharacter: function(character) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.CHARACTER_LOADED,
			character: character
		});
	}
};

module.exports = ServerActionCreators;
