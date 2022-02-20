import React from 'react';
import './newsitem.css';

export default function Newsitem(props) {
  let {title, description, imageUrl, newsURL} = props
  return (
    <div>
        <div className="container news">
          <div className="row">
            <div className="col-3">
              <img src={imageUrl} className="card-img-top" alt={title}/> 
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-12">
                  <h5 className="card-title">{title}</h5>
                </div>
                <div className="col-12">
                  <p className="card-text">{description}</p>
                </div>
                <div className="col-12 my-1">
                  <a href={newsURL} target="_blank" className="btn btn-sm btn-dark float-end">See More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}
