import { Component } from "react";
import { connect } from "react-redux";

class MusicList extends Component {
  renderListTrackDetail(track) {
    return (
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={track.image[2]["#text"]}
            className="img-fluid rounded-start"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-title">{track.name}</h6>
            <div className="card-text d-flex justify-content-between">
              <p>By: {track.artist}</p>
              <p>
                <small>Listeners: {track.listeners}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderTracksList() {
    return this.props.tracks.map((track, index) => {
      return (
        <li key={index} className="list-group-item list-group-item-action">
          {this.renderListTrackDetail(track)}
        </li>
      );
    });
  }

  render() {
    if (!this.props.tracks) {
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

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  };
}

export default connect(mapStateToProps)(MusicList);
