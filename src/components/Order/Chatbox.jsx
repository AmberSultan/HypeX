import React from 'react';
import './Chatbox.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-header msg_head">
        {/* <div className="d-flex bd-highlight">
          <div className="user_info">
            <span>Chat with Khalid</span>
            <p>1767 Messages</p>
          </div>
          <div className="video_cam">
            <span><i className="fas fa-video"></i></span>
            <span><i className="fas fa-phone"></i></span>
          </div>
        </div> */}
        <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
      </div>
      <div className="msg_body">
      </div>
      <div className="card-footer">
        <div className="input-group">
          <textarea
            name=""
            className="form-control type_msg"
            placeholder="Write your message..."
          ></textarea>
          <div className="input-group-append">
            <span className="input-group-text send_btn"><i class="fa fa-location-arrow" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
