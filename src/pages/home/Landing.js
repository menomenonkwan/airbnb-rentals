import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <section className='min-vh-100' style={{ backgroundImage: `url("https://source.unsplash.com/5kSxeTwftkc")`}}>
      <div className="landing tint w-100 d-flex flex-column flex-lg-row justify-content-around align-items-center text-center text-lg-start">

        <div className='col-10 col-lg-3 '>
          <p className='fs-3 fw-lighter p-0 m-0'>Home away from home</p>
          <h2 className='display-1 mb-5'>
            <span className='d-block'>Comfort</span>
            <span className='d-block'>Awaits You</span>
          </h2>
          <Link to="/rentals" className='btn btn-primary'>All Rentals</Link>
        </div>

        <ul className='featured-homes d-flex flex-column flex-md-row  justify-content-between align-items-start gap-5 col-10 col-lg-6 my-5 my-lg-0'>
          <li>
            <img className="w-100" src="https://source.unsplash.com/iAkAhmq0bvA" alt="forest house" />
            <p className="lead fs-5 fw-bold my-2">Forest Hideaway</p>
            <p className="mt-2 pb-4 fw-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            <a href="/rentals" className="btn btn-outline-secondary">
              <span>Rental Info</span>
              <i className="bi bi-arrow-right-circle ms-2"></i>
            </a>
          </li>
          <li>
            <img className="w-100" src="https://source.unsplash.com/c_Phj_lH7nQ" alt="city condo" />
            <p className="lead fs-5 fw-bold my-2">City Dweller</p>
            <p className="mt-2 pb-4 fw-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            <a href="/rentals" className="btn btn-outline-secondary">
              <span>Rental Info</span>
              <i className="bi bi-arrow-right-circle ms-2"></i>
            </a>
          </li>
          <li>
            <img className="w-100" src="https://source.unsplash.com/L_bIb644eFk" alt="cabin in the middle of nowhere" />
            <p className="lead fs-5 fw-bold my-2">Isolated Bliss</p>
            <p className="mt-2 pb-4 fw-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            <a href="/rentals" className="btn btn-outline-secondary">
              <span>Rental Info</span>
              <i className="bi bi-arrow-right-circle ms-2"></i>
            </a>
          </li>
        </ul>

      </div>
    </section>
  )
}
