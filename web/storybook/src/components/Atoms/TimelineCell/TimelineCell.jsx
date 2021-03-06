import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TimelineCell = ({title, date, alignRight, className, backgroundColour, children}) => {
    return (
        <div style={{ background: backgroundColour }} className={`TimelineCell ${className} ${alignRight ? "TimelineCell--right" : "TimelineCell--left"}`}>
            <div className="TimelineCell__container">
                <h4 className="TimelineCell__container__title">{title}</h4>
                <span className="TimelineCell__container__date">{date}</span>
                {children ? <p>{children}</p> : null}
            </div>
            <div style={{ borderColor: backgroundColour }} className="TimelineCell__dot"></div>
        </div>
    )
}

TimelineCell.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    alignRight: PropTypes.bool,
    children: PropTypes.string,
    backgroundColour: PropTypes.string,
    className: PropTypes.string,
}

TimelineCell.defaultProps = {
    alignRight: false,
    backgroundColour: "#FFF",
    className: '',
}


export default TimelineCell;
