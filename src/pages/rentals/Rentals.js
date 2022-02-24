// styles
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './Rentals.scss';

const rentalProperties = [
  {
    id: 1,
    image: 'https://source.unsplash.com/iAkAhmq0bvA',
    title: 'Lakeside Homes',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi impedit voluptatibus harum fugiat voluptates libero facilis ratione atque fugit quibusdam!'
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/7MH4ped6_Mo',
    title: 'Riverside Homes',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi impedit voluptatibus harum fugiat voluptates libero facilis ratione atque fugit quibusdam!'
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/5Vo0pmkfy1w',
    title: 'City Centers',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi impedit voluptatibus harum fugiat voluptates libero facilis ratione atque fugit quibusdam!'
  },
  {
    id: 4,
    image: 'https://source.unsplash.com/B-r5yGKCSw0',
    title: 'Mountain Views',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi impedit voluptatibus harum fugiat voluptates libero facilis ratione atque fugit quibusdam!'
  },
  {
    id: 5,
    image: 'https://source.unsplash.com/0XgRPbE9nvE',
    title: 'Snow Palace',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi impedit voluptatibus harum fugiat voluptates libero facilis ratione atque fugit quibusdam!'
  },
  {
    id: 6,
    image: 'https://source.unsplash.com/pCMNcprqFBU',
    title: 'Tropical House',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi impedit voluptatibus harum fugiat voluptates libero facilis ratione atque fugit quibusdam!'
  },
]

export default function Rentals() {
  const rentalProps = useRef();
  const q = gsap.utils.selector(rentalProps);

  useEffect(() => {
    gsap.from(q('.rp'), {
      y: 50,
      opacity: 0,
      stagger: 0.33,
      delay: .15,
      duration: 1.15
    })
  }, [q]);
  
  return (
    <div className='container-fluid min-vh-100 bg-light text-dark p-0' >Rentals
      <div className="rentals container-fluid" style={{ backgroundImage: `url('https://source.unsplash.com/Umh6cEf4V8s')`}} />
      
      <section className='flex-column justify-content-center align-items-center h-100 mb-5'>
        <div className='container-lg col-10 rental-header text-dark d-flex flex-column justify-content-center align-items-start text-center text-lg-start mt-3'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Rentals</li>
            </ol>
          </nav>
          <h2 className='display-3 w-100'>Available Rentals</h2>
          <p className='col-12 col-lg-6 mx-auto ms-lg-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta, consequatur distinctio itaque voluptatem atque nihil? Qui ad magnam perferendis voluptate, amet nisi ea ipsam quis animi adipisci quod id.</p>
        </div>

        <div className='rental-grid container-lg text-dark d-flex align-items-center justify-content-center justify-content-lg-between col-10' ref={rentalProps}>
          {rentalProperties.map(prop => (
            <div key={prop.id} className="col-10 col-sm-5 col-lg-3 me-sm-3 me-lg-5 mb-5 text-center text-lg-start rp">
              <img className='w-100' src={prop.image} alt={prop.title} />
              <p className="lead fs-5 fw-bold my-2">{prop.title}</p>
              <p className="mt-2 pb-4 fw-light">{prop.text}</p>
              <Link to="/rentals" className="w-100 d-flex border-bottom pb-1">
                <span>Rental Info</span>
                <i className="bi bi-arrow-right-circle ms-auto"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
