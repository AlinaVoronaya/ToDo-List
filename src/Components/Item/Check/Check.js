import React from "react";
import {BsCheck} from "react-icons/bs";
import './Check.scss';

export const Check = ({isCompleted}) => {
    return (
        <div className={`check-container ${isCompleted ? 'check-container--checked' : ''}`}>
            {isCompleted &&
                <BsCheck />
            }
        </div>
    )
}

