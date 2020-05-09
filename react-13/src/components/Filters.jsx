import React from 'react';

class Filters extends React.Component {
  constructor(props){
	  super(props);		
		this.state = {
		  search : ''
		}
	  }

	

	searchUpdate(event) {
	  const { onSearch } = this.props
	  const { value } = event.target

	  this.setState({
		  search: value
	  })

	  onSearch(value)
	}
  
	render() {
	   const { search } = this.state     
	   console.log(search)

	  
	  return (
	    <div className="container" data-testid="filters">
		  <section className="filters">
		    <div className="filters__search">
			  <input 
			    type="text"
				value={search}
			    className="filters__search__input"
			    placeholder="Pesquisar"
				onChange={(event) => this.searchUpdate(event)}
			  />
  
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
		</div>
  
		);
	}
}

export default Filters;
