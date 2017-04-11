//COMPONENT
import React from 'react';
/*
export default class MeetToolbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          microphoneMuted: false,
          cameraMuted: false,
          barHidden: false,
        }
    }

    _onMicrophoneMute() {
      this.setState({
        microphoneMuted: !this.state.microphoneMuted,
      }, () => {
        this.props.onMicrophoneMute(this.state.microphoneMuted);
      });
    }

    _onCameraMute() {
      this.setState({
        cameraMuted: !this.state.cameraMuted,
      }, () => {
        this.props.onCameraMute(this.state.cameraMuted);
      });
    }

    _onHangup() {
      this.props.onHangup();
    }

    _onExpandHide() {
      this.setState({
        barHidden: !this.state.barHidden,
      }, () => {
        this.props.onExpandHide();
      });
    }
*/
function MeetToolbarComponent (props) {
  return (
    <div id="header">
      <span id="toolbar" className={props.isHidden ? "toolbarHide" : "toolbarShow"}>
        <a className="button" onClick={props._onMicrophoneMute.bind(this)}>{props.microphoneMuted ?
          <span className="fa-stack">
            <i className="fa fa-microphone fa-stack-1x" aria-hidden="true"></i>
            <i className="fa fa-ban fa-stack-2x text-danger" aria-hidden="true"></i>
          </span>
          : <i className="fa fa-microphone" aria-hidden="true"></i>}</a>
        <a className="button" onClick={props._onCameraMute.bind(this)}>{props.cameraMuted ?
          <span className="fa-stack">
            <i className="fa fa-camera fa-stack-1x" aria-hidden="true"></i>
            <i className="fa fa-ban fa-stack-2x text-danger" aria-hidden="true"></i>
          </span>
          : <i className="fa fa-camera" aria-hidden="true"></i>}</a>
        <a className="button"><i className="fa fa-comments" aria-hidden="true"></i></a>
        <a className="button"><i className="fa fa-desktop" aria-hidden="true"></i></a>
        <a className="button" onClick={props._onExpandHide.bind(this)}><i className={props.barHidden ? "fa fa-expand" : "fa fa-compress"} aria-hidden="true"></i></a>
        <a className="button"><i className="fa fa-cogs" aria-hidden="true"></i></a>
        <a className="button" onClick={props._onHangup.bind(this)}><i className="fa fa-phone text-danger" aria-hidden="true"></i></a>
      </span>
    </div>
  );
}

export default MeetToolbarComponent
