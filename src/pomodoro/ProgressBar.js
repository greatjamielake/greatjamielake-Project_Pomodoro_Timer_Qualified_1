import React from "react";


function ProgressBar ({currentTime, totalTime}) {
    const progress = (currentTime / totalTime) * 100;
    return (
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress} // TESTING: Increase aria-valuenow as elapsed time increases
                style={{ width: `${progress}%` }} // TESTING: Increase width % as elapsed time increases
              />
            </div>      
    );
}

export default ProgressBar;