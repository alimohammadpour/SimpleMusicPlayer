import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTrack } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchTrack(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form className="input-group mb-4 w-30" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Search music"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">
            GO
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTrack }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
