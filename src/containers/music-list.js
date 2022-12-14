import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectedTrack } from "../actions/index";

class MusicList extends Component {

  renderListTrackDetail(track) {
    return (
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={track.image[1]["#text"]}
            className="img-fluid rounded-start mt-2"
            alt=""
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h6 className="card-title">{track.name}</h6>
            <div className="card-text d-flex justify-content-between">
              <span>By: {track.artist}</span>
              <span>{track.listeners} plays</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderTracksList() {
    return this.props.tracks.map((track, index) => {
      return (
        <li 
          key={index} 
          className="list-group-item list-group-item-action" 
          onClick={ () => this.props.selectedTrack(track) }
          >
          {this.renderListTrackDetail(track)}
        </li>
      );
    });
  }

  render() {
    if (! this.props.tracks.length) {
      return (
        <div
          className="spinner-grow text-warning"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }

    return (
      <div className="card w-30">
        <ul className="list-group list-group-flush">
          {this.renderTracksList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({tracks}) {
  return { tracks };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedTrack }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);
