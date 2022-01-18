import React from 'react';
import parse from 'html-react-parser';
import '../App.scss';

export default function Movie(props){
    return(
        <div className="col card border-0 text-center movie__info">
            <a href={props.url} target="_blank">
                {props.image !== null 
                    ? <img src={props.image.medium} className="card-img-top movie__img" />
                    : <img src="./images/image-404.jpg" className="card-img-top movie__img" />}
            </a>
            <div className="card-body">
                {props.name !== null && <h1 className="card-title movie__title">{props.name}</h1>}
                {props.summary !== null && <div className="card-text movie__summary">{parse(props.summary)}</div>}
            </div>
        </div>
    )
}