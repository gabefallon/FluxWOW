module.exports = {
	API: 'http://us.battle.net/api/wow/character/bonechewer/',
	Params: '?fields=reputation&jsonp=retrieved',

	ActionTypes: {
		LOAD_CHARACTER: null,
		CHARACTER_LOADED: null
	},

	PayloadSources: {

	}
};
