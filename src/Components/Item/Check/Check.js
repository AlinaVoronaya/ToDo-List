import React from "react";
import './Check.scss';

export const Check = ({isCompleted}) => {
    return (
        <div className={`check-container ${isCompleted ? 'check-container--checked' : ''}`}>
            {/*{isCompleted &&*/}
            {/*    <BsCheck />*/}
            {/*}*/}
        </div>
    )
}

