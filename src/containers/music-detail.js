import { Component } from "react";
import { connect } from "react-redux";

class MusicDetail extends Component {

    renderTrackTags() {
        return this.props.selectedTrack.toptags.tag.map(tag => {
            return (
                <span
                    key={ tag.url }
                    className="btn btn-outline-warning btn-sm ms-1">
                    { tag.name }
                </span>
            );
        })
    }

    render() {
        const track = this.props.selectedTrack;

        if (!track) {
            return; 
        }

        return (
            <div className="card w-30">
                <div className="card-header">
                    { track.name }
                </div>
                <div className="card-body mx-3">
                    <h6 className="card-title mb-3">Track is from { track.album.title } album by { track.artist.name }</h6>
                    <div className="card-text d-flex flex-column mb-3">
                        <div>Tags: { this.renderTrackTags() }</div>
                        <span><small className="text-muted">{ track.listeners } listeners</small></span>
                    </div>
                    <a href={track.url} className="btn btn-danger">Enjoy on last.fm</a>
                </div>
            </div>
        );
    }
}

function mapStateToProps({selectedTrack}) {
    return { selectedTrack }
}

export default connect(mapStateToProps)(MusicDetail);