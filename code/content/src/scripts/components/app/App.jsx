import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <span className="glyphicon glyphicon-remove pull-right"></span>
          TrueAI Test
        </div>
      </div>
    );
  }
}

export default App;
