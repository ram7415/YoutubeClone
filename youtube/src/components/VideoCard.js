import React from 'react'

const VideoCard = ({ info }) => {
    // Destructure snippet and statistics from info
    const { snippet, statistics } = info;
    // Destructure properties from snippet
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='p-2 m-2 w-72 shadow-lg'>
            {/* Render the thumbnail, title, channel title, and view count */}
            <img alt="thumbnail"className='rounded-lg' src={thumbnails.medium.url} />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}views</li>
            </ul>
        </div>
    )
}

export default VideoCard;
