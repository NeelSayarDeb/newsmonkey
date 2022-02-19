import React from 'react';
import './newsitem.css';

export default function Newsitem(props) {
  let {title, description, imageUrl, newsURL} = props
  return (
    <div>
        <div className="card my-2">
            <img src={imageUrl} className="card-img-top" alt={title}/> 
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description.slice(0,88)}{
                    description.length > 88? '...' : ""
                }</p>
                <a href={newsURL} target="_blank" className="btn bth-sm btn-primary">See Details</a>
            </div>
        </div>
    </div>
  )
}
