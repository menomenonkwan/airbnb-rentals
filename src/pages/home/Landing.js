import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  const featuredRef = useRef();
  const titleRef = useRef();
  const t = gsap.utils.selector(titleRef);
  const q = gsap.utils.selector(featuredRef);

  useEffect(() => {
    gsap.from(t(".title"), {
      opacity: 0,
    });
    
    gsap.to(t(".title"), {
      duration: 1,
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
    })
  }, [t]);
  
  useEffect(() => {
    gsap.from(q(".featured-home"), {
      x: -50,
      stagger: 0.33,
      opacity: 0,
      yoyo: true, 
      duration: 1, 
      delay: .5
    });
  }, [q]);
  
  return (
    <section className='min-vh-100' style={{ backgroundImage: `url("https://source.unsplash.com/5kSxeTwftkc")`}}>
      <div className="landing tint w-100 d-flex flex-column flex-lg-row justify-content-around align-items-center text-center text-lg-start" ref={titleRef}>

        <div className='col-10 col-lg-3 title' >
          <p className='fs-3 fw-lighter p-0 m-0'>Home away from home</p>
          <h2 className='display-1 mb-5'>
            <span className='d-block'>Comfort</span>
            <span className='d-block'>Awaits You</span>
          </h2>
          <Link to="/rentals" className='btn btn-primary'>All Rentals</Link>
        </div>

        <ul className='featured-homes d-flex flex-column flex-md-row  justify-content-between align-items-start gap-5 col-10 col-lg-6 my-5 my-lg-0' ref={featuredRef}>
          <li className='featured-home'>
            <img className="w-100" src="https://source.unsplash.com/iAkAhmq0bvA" alt="forest house" />
            <p className="lead fs-5 fw-bold my-2">Forest Hideaway</p>
            <p className="mt-2 pb-4 fw-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            <Link to="/rentals" className="btn btn-outline-secondary">
              <span>Rental Info</span>
              <i className="bi bi-arrow-right-circle ms-2"></i>
            </Link>
          </li>
          <li className='featured-home'>
            <img className="w-100" src="https://source.unsplash.com/c_Phj_lH7nQ" alt="city condo" />
            <p className="lead fs-5 fw-bold my-2">City Dweller</p>
            <p className="mt-2 pb-4 fw-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            <Link to="/rentals" className="btn btn-outline-secondary">
              <span>Rental Info</span>
              <i className="bi bi-arrow-right-circle ms-2"></i>
            </Link>
          </li>
          <li className='featured-home'>
            <img className="w-100" src="https://source.unsplash.com/L_bIb644eFk" alt="cabin in the middle of nowhere" />
            <p className="lead fs-5 fw-bold my-2">Isolated Bliss</p>
            <p className="mt-2 pb-4 fw-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            <Link to="/rentals" className="btn btn-outline-secondary">
              <span>Rental Info</span>
              <i className="bi bi-arrow-right-circle ms-2"></i>
            </Link>
          </li>
        </ul>

      </div>
    </section>
  )
}
