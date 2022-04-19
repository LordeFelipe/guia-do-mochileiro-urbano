import React from 'react';

function Card(props) {
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h1>{props.header}</h1>
                </div>
                <div className='card-body'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Card;