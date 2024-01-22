import './App.scss';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdated: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setLastUpdated(this.props.newTime);
  } 
  
  setLastUpdated(value) {
    this.setState({
      lastUpdated: value
    })  
  }

  handleClick() {
    // api refresh data
    const now = new Date()
    this.setLastUpdated("PERLU API: " + now.toLocaleString())
  }

  render() {
    return(
      <div className="main">
        <div className="container-xl">
          <div className="row pt-5">
            <div className="col-6">
              <h1 className='h1'>Inventory Dashboard</h1>
              <h2 className='lead last-updated' id='last-updated'>{this.state.lastUpdated}</h2>
            </div>
            <div className="col-6">
              <button className="btn btn-lg custom-button float-end py-3" onClick={this.handleClick}>Refresh</button>
            </div>
          </div>
          <div className="row gx-5 pt-5">
            <div className="col-3">
              <h1 className="text-center blue">Hello, world!</h1>
            </div>
            <div className="col-9">
              <h1 className="text-center red">Hello, world!</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
