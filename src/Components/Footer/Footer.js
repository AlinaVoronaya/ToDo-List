import React from "react";
import './Footer.scss';

export const Footer = ({countTodo, setFilterState}) => {

    return (
        <div className="footer">
            <div><b>{countTodo}</b> tasks left</div>
            <div className="footer__filter">
                <button className="footer__btn" onClick={() => setFilterState(0)}>All</button>
                <button className="footer__btn" onClick={() => setFilterState(1)}>Done</button>
                <button className="footer__btn" onClick={() => setFilterState(2)}>Not done</button>
            </div>
        </div>
    )
}