import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css'

function Row(props) {
    return (
        <>
            <div className='row'>
                {props.children}
            </div>
            <br/>
        </>
    )
}
export default Row;