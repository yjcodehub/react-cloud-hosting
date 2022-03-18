import React from 'react'

export default function Banner() {
  return (
    <>
      <section className='banner'>
        <div className="container py-4">
          <div className="row">
            <div className="col-lg col-md bg-light p-0 text-center mx-0 mx-sm-2 mx-lg-5 my-4 my-md-0">
              <div className="topBar border text-light">
                <div className="dp mx-auto">
                  <img src="images/sunny.png" alt="Sunny_Image" className='img-fluid' />
                </div>
                <ul className='list-unstyled my-3'>
                  <li>2GB Storage</li>
                  <li>5 Domain</li>
                  <li>20GB Bandwidth</li>
                  <li>Unlimited FTP</li>
                  <li>2 Add-on Domains</li>
                  <li>10 Email Accounts</li>
                </ul>
                <h5 className='fw-bold'>&euro; 2.80/mon</h5>
              </div>
              <div className="d-grid">
                <button className='btn btn-primary border-0 rounded-0 py-3 fs-5 fw-bold'>Sunny Packet</button>
              </div>
            </div>
            <div className="col-lg col-md bg-light p-0 text-center mx-0 mx-sm-2 mx-lg-5 my-4 my-md-0">
              <div className="topBar border text-light">
                <div className="dp mx-auto">
                  <img src="images/cloudy.png" alt="Cloud_Image" className='img-fluid' />
                </div>
                <ul className='list-unstyled my-3'>
                  <li>6GB Storage</li>
                  <li>Unlimited Domain</li>
                  <li>40GB Bandwidth</li>
                  <li>Unlimited FTP</li>
                  <li>5 Add-on Domains</li>
                  <li>20 Email Accounts</li>
                </ul>
                <h5 className='fw-bold'>&euro; 4.90/mon</h5>
              </div>
              <div className="d-grid">
                <button className='btn btn-primary border-0 rounded-0 py-3 fs-5 fw-bold'>Cloudy Packet</button>
              </div>
            </div>
            <div className="col-lg col-md bg-light p-0 text-center mx-0 mx-sm-2 mx-lg-5 my-4 my-md-0">
              <div className="topBar border text-light">
                <div className="dp mx-auto">
                  <img src="images/rainy.png" alt="Rainy_Packet" className='img-fluid' />
                </div>
                <ul className='list-unstyled my-3'>
                  <li>10GB Storage</li>
                  <li>Unlimited Domain</li>
                  <li>80GB Bandwidth</li>
                  <li>Unlimited FTP</li>
                  <li>10 Add-on Domains</li>
                  <li>40 Email Accounts</li>
                </ul>
                <h5 className='fw-bold'>&euro; 8.99/mon</h5>
              </div>
              <div className="d-grid">
                <button className='btn btn-primary border-0 rounded-0 py-3 fs-5 fw-bold'>Rainy Packet</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
