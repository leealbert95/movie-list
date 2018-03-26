import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.query);
    this.setState({
      query: ''
    });
  }

  onChange(e) {
    console.log(e.target.value)
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-3"/>
        <form className="form-inline col-md-6" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Enter search here" onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <input className="form-control" type="submit" value="Go!"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;