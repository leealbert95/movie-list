import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addMovie(this.state.movieTitle);
    this.setState({
      movieTitle: ''
    });
  }

  onChange(e) {
    console.log(e.target.value)
    this.setState({
      movieTitle: e.target.value
    })
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-3"/>
        <form className="col-md-6 form-inline" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Add movie title here" onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <input className="form-control" type="submit" value="Add"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovie;