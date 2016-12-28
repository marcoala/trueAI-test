import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isError: false,
      sudgestions: [],
    }
  }

  componentDidMount(){
    /* this timeout simulate the delay between the page loading and getitng some context */
    setTimeout(function() {
      this.fetchSudgestion();
    }.bind(this),
    5000);
  }

  fetchSudgestion(){
    this.setState({isLoading: true});
    /* this timeout simulate the delay of an ajax request */
    setTimeout(
      function() {
        this.setState({
          sudgestions: [
            'Have you tried to turn it off and on again?',
            'Is it definitvly plugged in?',
            'If you give me your postcode, I can chekc the status of the network in your area',
            'Lorem ipsum dolor sit amet',
          ],
          isLoading: false
        });
      }.bind(this),
      3000);
  }

  handleClickOnSudgestion(sudgestion_index){
    /* this leave room for logic related to events */
    this.selectSudgestion(sudgestion_index);
  }

  selectSudgestion(sudgestion_index){
    document.getElementById('msg_input').value = this.state.sudgestions[sudgestion_index];
  }

  render() {
    const {isLoading, isError, sudgestions} = this.state;
    const isEmpty = (sudgestions.length === 0);

    const containerStyle = {
      display: 'block',
      position: 'fixed',
      bottom: '70px',
      right: '40px',
      zIndex: '9999999',
      width: '25vw',
    };

    return (
      <div style={containerStyle}>
        <div className="thumbnail">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-10">
                <h4>TrueAI Test</h4>
              </div>
              <div className="col-xs-2">
                <span className="glyphicon glyphicon-remove pull-right"></span>
              </div>
              <div className="col-xs-12">&nbsp;</div>
            </div>
              {(isEmpty && !isLoading) && <div className="text-center">
                <h3>No sudgestions yet</h3>
                <p>No conversation has been started yet, as soon as we've some data sudgestions will appear here.</p>
              </div>}
              {isLoading && <div className="text-center">
                <span className="glyphicon glyphicon-refresh is-spinning" style={{fontSize: '50px'}}></span>
                <h3>Thinking...</h3>
              </div>}
              {!isEmpty && sudgestions.map((sudgestion, index) => {
                return (
                  <div className="row sudgestion">
                    <div className="col-xs-10" key={index}>{sudgestion}</div>
                    <div className="col-xs-2"><a className="btn-success btn-sm pull-right" role="button" onClick={this.handleClickOnSudgestion.bind(this, index)}>use</a></div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
