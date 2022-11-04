import React, {useState} from "react";
import './Footer.scss';

export const Footer = ({todo, countTodo, todoFilter}) => {

    return (
        <div className="footer">
            <div><b>{countTodo}</b> tasks left</div>
            <div className="footer__filter">
                <button className="footer__btn" onClick={() => todoFilter("All")}>All</button>
                <button className="footer__btn" onClick={() => todoFilter(true)}>Done</button>
                <button className="footer__btn" onClick={() => todoFilter(false)}>Not done</button>
            </div>
        </div>
    )
}