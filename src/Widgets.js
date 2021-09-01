import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle=(heading,subtitle) => (
        <div className='widgets__article'>
        <div className='widgets__articleLeft'>
            <FiberManualRecordIcon />
        </div>
        <div className='widgets__articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>

        </div>
    )

    return (
        <div  className='widgets'>
        <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />

        </div>
            {newsArticle("React is Amazing","There are many readers")}
            {newsArticle("WebDev is Amazing","I love it ")}
            {newsArticle("Firebase is Amazing","There are many user")}
            {newsArticle("Redux is Amazing","There are many users")}
            {newsArticle("Linkedin is Amazing","It has many users")}
            {newsArticle("React is Amazing","There are many readers")}
            {newsArticle("WebDesigning is Amazing","I love it ")}
        </div>
    )
}

export default Widgets
