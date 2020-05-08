import React from "react";
import './styles.scss'

class SearchBox extends React.Component {
	render() {
		return (
          <div className="filters__search">
	        <input type="text" className="filters__search__input" placeholder="Pesquisar" />

		    <button className="filters__search__icon">
		      <i className="fa fa-search"/>
		    </button>
		</div>	
        );
	}
}

export default SearchBox;