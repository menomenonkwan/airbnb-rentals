import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';

// styles
import './Contact.scss';

export default function Contact() {
  const [sending, setSending] = useState('Submit')
  let location = useLocation();
  const navigate = useNavigate();

  const titleCase = (string) => {
    const newStr = string.substring(1);
    return newStr[0].toUpperCase() + newStr.slice(1).toLowerCase();
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    setSending('Sending...');

    setTimeout(() => {
      navigate('/#home');
    }, 2000);
  }
  
  return (
    <section className='min-vh-100 flex-column justify-content-center align-items-center text-primary'>
      <div className="container-lg col-10 col-lg-6 my-5">

      
        <div className="text-start my-5">
          <h1 className='display-2'>{titleCase(location.pathname)}</h1>
          {location.pathname === '/reservations' && <p className="lead text-dark">Fill out the form below and we can begin the reservation process as fast as possible...</p>}
          {location.pathname === '/contact' && <p className="lead text-dark">Questions to ask? Fill out the form and we'll get back to you as soon as possible...</p>}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-dark">

            {/* NAME */}
            <label htmlFor="name" className="form-label m-0">Name:</label>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-person-fill text-secondary"></i>
              </span>
              <input type="text" id="name" className="form-control" />

              {/* <!-- tooltip  --> */}
              <span className="input-group-text">
                <span data-bs-placement="bottom" title="Um... who is you?">
                  <i className="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>          

            {/* EMAIL */}
            <label htmlFor="email" className="form-label m-0">Email address:</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill text-secondary"></i>
              </span>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />

              {/* <!-- tooltip  --> */}
              <span className="input-group-text">
                <span data-bs-placement="bottom" title="Enter an email address we can reply to.">
                  <i className="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>
            <div id="emailHelp" className="form-text mb-3">We'll never share your email with anyone else.</div>

            {/* SUBJECT */}
            <label htmlFor="subject" className="form-label m-0">Subject:</label>
            <div className="mb-4 input-group">
              <span className="input-group-text">
                <i className="bi bi-chat-right-dots-fill text-secondary"></i>
              </span>
              <Form.Select aria-label="message subject select">
                <option value={titleCase(location.pathname)}>{titleCase(location.pathname)}</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other Question</option>
              </Form.Select>
            </div>


            {/* CHECKBOX */}
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="previousCustomer" />
              <label className="form-check-label" htmlFor="previousCustomer">Previous Renter</label>
            </div>

            {/* MESSAGE  */}
            <div className="my-4 form-floating">
              <textarea className="form-control" id="query" style={{ height: `140px` }} placeholder="query"></textarea>
              <label htmlFor="query">Your message...</label>
            </div>

            <button type="submit" className="btn btn-primary">{sending}</button>
          </div>
        </form>
      </div>
    </section>
  )
}
