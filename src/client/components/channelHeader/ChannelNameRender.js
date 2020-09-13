import React from 'react';
import { Link } from 'react-router-dom';

export function RenderChannelName(channelObj, backUrl) {

    return (
        <div>
            <Link to={backUrl}> back </Link>
            <img src={channelObj.img} alt='' />
            <h1>{channelObj.title}</h1>
        </div>

    )

}
