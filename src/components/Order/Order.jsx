import React, { useState } from "react";
import "./Order.css";
import ProgressBar from "./ProgressBar";
import Timeline from "./Timeline";
import Chatbox from "./Chatbox";

function Order() {
  const [currentStep, setCurrentStep] = useState(2);
  const steps = ["Ordered", "Requirements", "Submitted", "Delivered"];

  const events = [
    {
      time: "9:30 AM",
      heading: "MEETING WITH CLIENT",
      description: "Meeting with USA Client, today at 12:00 PM",
    },
    {
      time: "9:30 AM",
      heading: "MEETING WITH CLIENT",
      description: "Meeting with USA Client, today at 12:00 PM",
    },
    {
      time: "9:30 AM",
      heading: "MEETING WITH CLIENT",
      description: "Meeting with USA Client, today at 12:00 PM",
    },
    {
      time: "9:30 AM",
      heading: "MEETING WITH CLIENT",
      description: "Meeting with USA Client, today at 12:00 PM",
    },
    {
      time: "9:30 AM",
      heading: "MEETING WITH CLIENT",
      description: "Meeting with USA Client, today at 12:00 PM",
    },
  ];

  return (
    <div>
      <div className="container text-center mt-4 mb-4">
        <div className="row">
          <div className="col-md-9">
          <div className="right ">
              <h5 className="time mt-4">User Timeline</h5>
              <Timeline events={events} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="row w-100 g-1">
              <div className="col-md-12 left space to">
                <h5 className="top">Time left to deliver</h5>

                <div className="container">
                  <div className="row  year">
                    <div className="col-3">
                    <h5 className="time-unit">1</h5>
                    <p className="time-label">Day</p>
                    </div>
                    <div className="col-3">
                    <h5 className="time-unit">20</h5>
                    <p className="time-label">Hours</p>
                    </div>
                    <div className="col-3">
                    <h5 className="time-unit">19</h5>
                    <p className="time-label">Min</p>
                    </div>
                    <div className="col-3">
                    <h5 className="time-unit">10</h5>
                    <p className="time-label">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row"> */}
              <div className="col-md-12 w-100 leftDown brif space">
                <h5 className="leftHeading ">Brief Details</h5>
                <div className="detail">
                  <div className="date">
                    <p className="grey">Date</p>
                    <p className="date1">23 Jul, 2024</p>
                  </div>
                  <div className="orderNo">
                    <p className="grey">Order No.</p>
                    <p className="date1">1234567890as</p>
                    <p className="date1">USD</p>
                    <p className="date1">6999</p>
                  </div>
                </div>
                <div className="row usd">
                  <h5 className="last date2">USD</h5>
                  <h5 className="last date2">6909</h5>
                </div>
              </div>
              {/* </div> */}
              <div className="col-md-12 left to track">
                <h5 className="leftHeading track">Tracking Order</h5>
                <ProgressBar steps={steps} currentStep={currentStep} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <div className="row ">
          <div className="col-md-9 ">
            <div className="right rightBox">
              <Chatbox />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col leftDown support">
                <h5 className="leftHeading">Support</h5>
                <div className="support">
                  <h6 className="ques">FAQs</h6>
                  <p className="ans date2 date3">Find needed answers.</p>
                  <hr />
                  <h6 className="ques">Resolution Center</h6>
                  <p className="ans date2">Resolve order issues.</p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
