import React from 'react';


// Props: downButtonClicked, upButtonClicked
const Nav = props => {
    return (
        <div>
            <input id="down" name="down" type="button" value="<" onClick={props.downButtonClicked} />
            <input id="up" name="up" type="button" value=">" onClick={props.upButtonClicked} />
        </div>
    )
}

export default Nav;