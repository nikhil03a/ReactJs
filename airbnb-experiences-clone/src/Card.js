import React from "react";
export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} width="300px" height="400px"></img>
            <p><strong>⭐{props.rating} </strong><span className='light'> ({props.reviewCount}) - {props.country} </span> </p>
            <p>{props.title}</p>
            <p><strong>From ${props.price} </strong>/person </p>
        </div>
    )
}