const filterByName = (employment, name) => {
    return employment.name === name;
  }
  
  const filterByCountry = (employment, country) => {
    return employment.country === country;
  }
  
  const filterByCompany = (employment, company) => {
    return employment.company === company;
  }
  
  const filterByDepartment = (employment, department) => {
    return employment.department === department; 
  }
  
  const filterByAdmissionDate = (employment, admissionDate) => {
    return employment.admissionDate ===  admissionDate;
  }
  
  export {
    filterByName,
    filterByCountry,
    filterByCompany,
    filterByDepartment,
    filterByAdmissionDate
  }