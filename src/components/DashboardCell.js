import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';

class DashboardCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const showStream = () => {
      if (this.props.stream.uuid !== '') {
        return (
          <Link to={`/stream/${this.props.stream.uuid}`}>
            <Player url={`http://showmedocker.zapto.org:1776/hls/${this.props.stream.uuid}.m3u8`} w={320} h={170} />
          </Link>);
      }
      return (<b>OFFLINE</b>);
    };

    return (
      <div>
        <div className="div-dashboard-cell">
          <div className="div-dashboard-video-holder">
            <div className="div-dashboard-video">
              {showStream()}
            </div>
            <div className="dashboard-description">
              <div className="dashboard-title">
                <span className="dashboard-title-font">
                        Our First Stream!
                </span>
                <br />
                <span className="dashboard-author-font">
                  {this.props.stream.username}
                </span>
              </div>
              <div className="dashboard-streamer">
                <span className="dashboard-title-font">
                      1 Viewer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardCell;

