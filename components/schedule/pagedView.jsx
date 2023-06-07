import React from 'react'

function PagedView(props) {
    return ( 
        <div id={props.id}>
            {props.children}
        </div>
     );
}

export default PagedView;