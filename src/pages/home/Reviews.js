// images
import background from '../../assets/bg.jpg';

export default function Reviews() {
  return (
    <section className='min-vh-100 bg-light' style={{ backgroundImage: `url(${background})`}}>
      <div className="container-fluid text-dark text-center m-lg-5">
    
        <div className='p-5'>
          <blockquote className="display-6">"There is no better rental service anywhere."</blockquote>
          <cite className='fs-5 text-muted'>- Joey Jojo Jr Shabado</cite>
        </div>
    
        <div className='container-fluid d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start my-5'>

          <div className='col-12 col-lg-6 fw-light  text-center text-lg-start mb-5 mb-lg-0'>
            <h3 className='fw-bold'>Nothing But The Best</h3>
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio temporibus aspernatur dicta eaque eveniet adipisci nisi, minus exercitationem quos a dolor provident saepe officia cupiditate quae quibusdam, aliquam ea.</p>
            <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla illo deserunt sit esse facere sed minus suscipit? Tempore magnam, fuga nemo repellendus nostrum, assumenda ipsum, ex delectus saepe sed deserunt.</p>
            <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae omnis facilis, temporibus eum commodi dolor. Doloremque sit, magni ad sunt nihil perferendis neque harum libero quia, praesentium iusto vel quisquam.</p>
          </div>
          
          <ul className='reviews col-12 col-sm-10 col-md-8 col-lg-5 ms-lg-5'>
            <li className='bg-light bg-gradient d-flex flex-column  flex-lg-row justify-content-center justify-content-lg-between align-items-center text-lg-start shadow p-3 mb-5 rounded'>
              <img src="https://source.unsplash.com/MVOI2b2nDTE" alt="man profile headshot" />
                    
              <div className='ms-3'>
                <p className='fst-italic fs-5 mt-2'>"Best of the best! Highly recommend."</p>
                <p className='text-muted fw-lighter'>- John Stevens</p>
              </div>
            </li>
            <li className='bg-light bg-gradient d-flex flex-column  flex-lg-row justify-content-center justify-content-lg-between align-items-center text-lg-start shadow p-3 mb-5 rounded'>
              <img src="https://source.unsplash.com/KchIV_GDy6U" alt="man profile headshot" />
                    
              <div className='ms-3'>
                <p className='fst-italic fs-5 mt-2'>"Absolutely loved the rental I found here!"</p>
                <p className='text-muted fw-lighter'>- Greg Waters</p>
              </div>
            </li>
            <li className='bg-light bg-gradient d-flex flex-column  flex-lg-row justify-content-center justify-content-lg-between align-items-center text-lg-start shadow p-3 mb-5 rounded'>
              <img src="https://source.unsplash.com/OFAbs8e8Zic" alt="woman profile headshot" />
                    
              <div className='ms-3'>
                <p className='fst-italic fs-5 mt-2'>"I will never look anywhere else but here again."</p>
                <p className='text-muted fw-lighter'>- Jayne Smith</p>
              </div>
            </li>
            <li className='bg-light bg-gradient d-flex flex-column  flex-lg-row justify-content-center justify-content-lg-between align-items-center text-lg-start shadow p-3 mb-5 rounded'>
              <img src="https://source.unsplash.com/h2pnXHMz8YM" alt="woman profile headshot" />
                    
              <div className='ms-3'>
                <p className='fst-italic fs-5 mt-2'>"Beautiful locations! Excellent support staff."</p>
                <p className='text-muted fw-lighter'>- Alison Doe</p>
              </div>
            </li>
          </ul>
        </div>  

      </div>
    </section>
  )
}
