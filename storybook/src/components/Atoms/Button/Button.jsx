import React from 'react';
import SVG from './../SVG/SVG';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({children, icon, type, ...rest}) => {
    return (
        <div className={`btn btn--${type}`} {...rest}>
            { type === 'main' ? 
                <svg className="btn--main__border">
                    <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
                </svg>
            : null }
            <span>{children}</span>
            { icon ? <SVG className="btn__icon" icon={icon} /> : null}
        </div>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
}

Button.defautProps = {
    type: 'main',
}

export default Button;