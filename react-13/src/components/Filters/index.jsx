import React from 'react';
import Button from '../Button'
import SearchBox from '../SearchBox'
import './styles.scss'

class Filters extends React.Component {

 render() {
  return (
    <section className="filters">
	 	<SearchBox />

		<Button 
		  name="Nome"
		  type="button"
		
      
          
         />

         <Button 
		  name="País"
		  type="button"
      	//   onClick={
          
         />

		  <Button 
		  name="Empresa"
		  type="button"
      	//   onClick={
          
         />

		<Button 
		  name="Departamento"
		  type="button"
      	//   onClick={
          
         />

		<Button 
		  name="Data de admissão"
		  type="button"
      	//   onClick={
          
         />
      </section>
		
	
	);
  }
}

export default Filters;
