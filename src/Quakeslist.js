import React from 'react';
import Quake from './Quake';

function QuakeList(props) {
    let earthquakes = props.earthquakes.map((earthquake) => (
        <Quake
            key={earthquake.properties.code}
            earthquake={earthquake.properties}
        />
    ));
    return <div>{earthquakes}</div>;
}

export default QuakeList;
