import React from 'react'
import './SingleTrack.css'
import { TrackData } from '../Utilities/Interfaces'
import { formatTime } from '../Utilities/Helper'


const SingleTrack = ({ track }: TrackData) => {
    return (
        <div className="single-track">
            <div className="track-name-container">
                <h3 className="track-info track-name">{`${track["@attr"].rank}. ${track.name}`}</h3>
            </div>
            <h3 className="track-info track-time">{formatTime(track.duration)}</h3>
        </div>
    )
}

export default SingleTrack