import React from 'react';
import './styles.scss'

class Contact extends React.Component {
  render() {
    const { data } = this.props
    
    return (
     <article className="contact" key={data.id} data-testid="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt={data.name} />
        </span>
        <span className="contact__data">{data.name}</span>
        <span className="contact__data">{data.phone}</span>
        <span className="contact__data">{data.country}</span>
        <span className="contact__data">{data.company}</span>
        <span className="contact__data">{data.department}</span>
        <span className="contact__data">{data.admissionDate}</span>
     </article>
          
     );
  }
} 

export default Contact;
