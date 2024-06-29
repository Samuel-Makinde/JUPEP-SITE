import React from 'react';

const Card = ({ width = 'auto', height = 'auto', children }) => {
    const cardStyle = {
        width: width,
        height: height,
        padding: '10px',
        border: '1px solid #FFFFFF',
        borderRadius: '4px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF'
    };

    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
};

export default Card;
