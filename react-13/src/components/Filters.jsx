import React from 'react';

class Filters extends React.Component {
  constructor(props) {
	super(props);
	
	this.state = {
		searchValue: '',
	}
  }

  handleGetInput(event) {
	const { onSearch } = this.props;
	const { value } = this.target || "";

	this.setState({
	  searchInput: value	
	});

	onSearch(value)
  }

 

  render() {
	const { searchValue } = this.state
	const { toggleSort, selectedFilter } = this.props
	  return (
	  <section className="filters">
		  <div className="filters__search">
			  <input
			    type="text"
				value={ searchValue || "" }
				className="filters__search__input"
				placeholder="Pesquisar"
				onChange={(event) => this.handleGetInput(event)}
     		  />
			  
			  <button className="filters__search__icon">
                <i className="fa fa-search" />
              </button>
		  </div>
		
		<button
	      className={`filters__item ${selectedFilter === 'name' && 'is-selected'}`}
		  onClick={() => toggleSort('name')}
		>
		 Nome
		</button>

		<button
	      className={`filters__item ${selectedFilter === 'country' && 'is-selected'}`}
		  onClick={() => toggleSort('country')}
		>
		 País
		</button>

		<button
	      className={`filters__item ${selectedFilter === 'company' && 'is-selected'}`}
		  onClick={() => toggleSort('company')}
		>
		 Empresa
		</button>

		<button
	      className={`filters__item ${selectedFilter === 'department' && 'is-selected'}`}
		  onClick={() => toggleSort('department')}
		>
		 Departamento
		</button>

		<button
	      className={`filters__item ${selectedFilter === 'admissionDate' && 'is-selected'}`}
		  onClick={() => toggleSort('admissionDate')}
		>
		 Data de admissão
		</button>
	  </section>
	  );
	}
}

export default Filters;
