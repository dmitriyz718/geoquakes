import React from 'react';

function Quake(props) {
    return (
        <div id='info'>
            <p>
                M: {props.earthquake.mag} - {props.earthquake.place}
            </p>
        </div>
    );
}

export default Quake;
