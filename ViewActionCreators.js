var ActionTypes = require('./Constants').ActionTypes;
var AppDispatcher = require('./AppDispatcher');
var APIUtils = require('./APIUtils');

var ViewActionCreators = {
	loadCharacter: function(name) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.LOAD_JAGNO
		});
		APIUtils.loadCharacter(name);
	}
};

module.exports = ViewActionCreators;
