import React from 'react';
import './statusCard.css';

const StatusCard = props => {
    return(
        <section className="status-card">
            <div className="status-card_icon">
                <i className={props.icon}/>
            </div>
            <div className="status-card_info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </section>
    );
};

export default StatusCard;