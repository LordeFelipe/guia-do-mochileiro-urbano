import React from 'react';

function Col(props) {
    return (
        <div className={`${props.colStyle}`}>
            <div className='form-group'>
                {props.children}
            </div>
        </div>
    )
}
export default Col;