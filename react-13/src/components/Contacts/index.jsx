import React from "react";
import './styles.scss'

class Contacts extends React.Component {
	render() {
		return (
            <section className="contacts">{this.props.children}</section>
        );
	}
}

export default Contacts;
