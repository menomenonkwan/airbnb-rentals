// styles
import { Link } from 'react-router-dom';
import './Home.css';



export default function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="min-vh-100 hero" style={{ backgroundImage: `url("https://source.unsplash.com/5kSxeTwftkc")`}}>
      <div className="container-fluid min-vh-100" style={{ backgroundColor: 'rgba(0,0,0,0.45)'}}>

      <div className="min-vh-100 d-flex flex-column flex-lg-row align-items-center align-items-lg-center justify-content-center p-3 p-lg-5 text-light">       

        <div className="col-lg-4 left my-4 my-lg-0 text-center text-lg-start">
          <p className="subtitle fs-4 m-0">Scenic Vacations</p>
          <h1 className='display-2'>
            <span className='d-block'>Comfort</span>
            <span className='d-block'>Awaits You</span>
          </h1>
          <Link to="/rentals" className="btn btn-primary my-3">All Rentals</Link>
        </div>

        <ul className="col-10 text-center text-lg-start p-0 col-lg-7 featured d-flex flex-column flex-md-row gap-md-3 gap-lg-5">
          <li className='mb-5'>
            <img className="w-100" src="https://source.unsplash.com/iAkAhmq0bvA" alt="forest house" />
            <p className="lead fw-bold py-2">Forest Hideaway</p>
            <p className="pb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

            <a href="/rentals" className="text-light fw-bold fs-5 border-bottom p-2">
              <span>Rental Info</span>
              <i className="bi bi-arrow-right-circle ms-2 "></i>
            </a>
          </li>
          <li className='mb-5'>
            <img className="w-100" src="https://source.unsplash.com/c_Phj_lH7nQ" alt="forest house" />
            <p className="lead fw-bold py-2">City Dweller</p>
            <p className="pb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

            <a href="/rentals" className="text-light fw-bold fs-5 border-bottom p-2">
              <span>Rental Info</span>
              <i className="bi bi-arrow-right-circle ms-2 "></i>
            </a>
          </li>
          <li className='mb-5'>
            <img className="w-100" src="https://source.unsplash.com/L_bIb644eFk" alt="forest house" />
            <p className="lead fw-bold py-2">Isolated Bliss</p>
            <p className="pb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

            <a href="/rentals" className="text-light fw-bold fs-5 border-bottom p-2">
              <span>Rental Info</span>
              <i className="bi bi-arrow-right-circle ms-2 "></i>
            </a>
          </li>
        </ul>
      </div>

    </div>
    </div>

    {/* AMENITIES */}
    <div className="container-fluid d-flex flex-column flex-lg-row pt-5 p-lg-5">
      <div className='col-lg-4 px-5 mb-5 mb-lg-0'>
        <h3 className='display-6'>Free Wifi <span><i class="bi bi-wifi ms-2"></i></span></h3>
        <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto voluptatum aspernatur cum adipisci distinctio, incidunt sint consequatur esse quaerat repellendus eum necessitatibus voluptatibus obcaecati assumenda praesentium tenetur? Alias, unde!</p>
      </div>
      <div className='col-lg-4 px-5 mb-5 mb-lg-0'>
        <h3 className='display-6'>Fully Stocked <span><i class="bi bi-water ms-2"></i></span></h3>
        <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto voluptatum aspernatur cum adipisci distinctio, incidunt sint consequatur esse quaerat repellendus eum necessitatibus voluptatibus obcaecati assumenda praesentium tenetur? Alias, unde!</p>
      </div>
      <div className='col-lg-4 px-5 mb-5 mb-lg-0'>
        <h3 className='display-6'>Guarantee <span><i class="bi bi-cash-stack ms-2"></i></span></h3>
        <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto voluptatum aspernatur cum adipisci distinctio, incidunt sint consequatur esse quaerat repellendus eum necessitatibus voluptatibus obcaecati assumenda praesentium tenetur? Alias, unde!</p>
      </div>
    </div>
  </div>
  )
}
