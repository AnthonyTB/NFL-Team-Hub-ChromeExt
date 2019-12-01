import React from "react";

export default class Header extends React.Component {
  state = {
    selectedTeam: ""
  };
}

render() {
    return (
        <header>
            <h1>NFL Team Hub</h1>
        </header>
    )
}
