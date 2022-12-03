import React from 'react'

export default function Card(props) {
    return (
            
            <div className='card'>
                <img src={props.img} width='250px' height='350rem'></img>
                <div className='content'>
                    <ul>
                        <li>
                            <p className="location">📌{props.location}</p>
                        </li>
                        <li>
                            <a href={props.glink} className='link'>View on Google Maps</a>
                        </li>
                    </ul>
                </div>
                <div className='description'>

                    <h1>{props.title}</h1>
                    <h4>{props.from} - {props.to}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
    )
}