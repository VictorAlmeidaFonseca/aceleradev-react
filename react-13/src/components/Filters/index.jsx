import React from 'react';
// import Button from '../Button'
import './styles.scss'
import { filterByName } from '../../utils/filters'

const URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts'

class Filters extends React.Component {
  constructor(props){
	super(props);
	
	this.state = {
	  employment: [],
  
	};
  }

  componentDidMount() {
	fetch(URL)
	  .then(response => response.json())
	  .then(data => this.setState({ employment: data }))
	}
  
  changeClassButton(){
    return
  }

  handleClickName(event, name) {
    event.preventDefault();
	
	let newData = this.state.employment
	if (name !== "") {
	  newData = filterByName(this.state.employment, name)
	}

	this.setState({
	  employment : newData,
	})
  }

  render() {

	return (
		<section className="filters">
		<div className="filters__search">
		<input type="text" className="filters__search__input" placeholder="Pesquisar" />

		<button className="filters__search__icon">
		  <i className="fa fa-search"/>
		</button>
		</div>	

		<button className="filters__item is-selected">
              Nome <i className="fas fa-sort-down" />
        </button>

        <button className="filters__item">
              País <i className="fas fa-sort-down" />
        </button>

        <button className="filters__item">
              Empresa <i className="fas fa-sort-down" />
        </button>

        <button className="filters__item">
              Departamento <i className="fas fa-sort-down" />
        </button>

        <button className="filters__item">
              Data de admissão <i className="fas fa-sort-down" />
        </button>
		</section>
		
	
	);
  }
}

export default Filters;
