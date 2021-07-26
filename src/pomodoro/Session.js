     import React from "react";
     import {minutesToDuration, secondsToDuration} from "../utils/duration";
     import ProgressBar from "./ProgressBar";

      function Session ({ session, focusDuration, breakDuration }) {
          const duration = session?.label === "Focusing" ? focusDuration : breakDuration;
          const totalTime = duration * 60;

      return (
          session && (
      <div>
        {/* TESTING: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TESTING: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {/* {session?.label} for {session.label === "Focusing" ? minutesToDuration(focusDuration) : minutesToDuration(breakDuration)} */}
                {session.label} for {minutesToDuration(duration)} minutes
            </h2>
            {/* TESTING: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col"> 
            
            {/* ====================== progress bar ====================== */}
            
            <ProgressBar
            currentTime={Math.abs(session.timeRemaining - duration * 60)}
            totalTime={duration * 60}
            />
          </div>
        </div>
      </div>
      )
      );
    }

    export default Session;