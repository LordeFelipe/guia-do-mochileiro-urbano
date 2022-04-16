import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css'

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