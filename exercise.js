////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - render DATA.title in an <h1>
// - render a <ul> with each of DATA.items as an <li>
// - now only render an <li> for mexican food (hint: use DATA.items.filter(...))
// - sort the items in alphabetical order by name (hint: use sort-by https://github.com/staygrimm/sort-by#example)
// - try this again without JSX
//
// Got extra time?
// - add a select dropdown to make filtering on `type` dynamic
// - add a button to toggle the sort order
// - Hint: you'll need an `updateThePage` function that calls `React.render`,
//   and then you'll need to call it in the event handlers of the form controls
////////////////////////////////////////////////////////////////////////////////

var React = require('react');
var sortBy = require('sort-by');
var ViewActionCreators = require('./ViewActionCreators');

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

var Reputations = React.createClass({
  render: function() {
    return (
      <div>
        {
          this.props.loading ? <img src="ajax-loader.gif" /> :
          <div>
            {this.props.data.map(reputation => (
              <Reputation data={reputation} />
            ))}
          </div> 
        }
      </div>
    );
  }
})

var Reputation = React.createClass({
  render: function() {
    var classString = 'color-'+this.props.data.standing;
    return (
      <div>
        <span className={classString}>{this.props.data.name}</span>
      </div>
    );
  }

});

var App = React.createClass({
  anything: function(event) {
    this.setState({type: event.target.value});
  },

  getInitialState: function() {
    return {
      type: 'mexican', 
      order: 'name', 
      character: {
        reputation: []
      }, 
      name: 'Jagno',
      loading: true
    };
  },

  componentDidMount: function() {
    var that = this;
    window.retrieved = function(data) {
      console.log(data);
      that.setState({character: data, loading: false});
    };

    ViewActionCreators.loadCharacter(this.state.name);
  },

  updateSort: function() {
    var newState = 'name';
    if(this.state.order == 'name') {
      newState = '-name';
    }
    this.setState({order: newState})
  },

  whatever: function() {
    return DATA.items.filter((item) =>{
      return item.type === this.state.type;
    }).sort(sortBy(this.state.order))
  },

  handleChange: function(e) {
    this.setState({name: e.target.value})
  },

  loadCharacter: function() {
    this.setState({loading: true});
    ViewActionCreators.loadCharacter(this.state.name);
  },

  render: function() {
    return (
      <div>
        <h1>{DATA.title}</h1>
        <ul>
          {this.whatever().map(item => (
            <li>{item.name}</li>
          ))}
        </ul>
        <select id="sortFilter" onChange={this.anything}>
          <option value="mexican">Mexican</option>
          <option value="southern">Southern</option>
        </select>
        <button onClick={this.updateSort}>Reverse!</button><br/><br/>


        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.loadCharacter}>Go!</button><br/>
        <Reputations data={this.state.character.reputation} loading={this.state.loading} />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('app'), () => {
  require('./tests').run();
});
