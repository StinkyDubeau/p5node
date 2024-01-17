import React from "react";

function Header(props) {
    return (
        <div>
            <h1>p5node</h1>
            <p>Prop {props.count}</p>
        </div>
    );
}

export default Header;