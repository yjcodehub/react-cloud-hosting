import React from 'react'

export default function Clients() {
  return (
    <>
      <section className='clients'>
        <div className="container">
          <h5 className='fw-bold py-4'><span>200+</span> Happy Clients</h5>
          <div className="row ">
            <div className="col-sm text-center">
              <img src="images/ebay.png" className='my-2' alt="ebay_image" />
            </div>
            <div className="col-sm text-center">
              <img src="images/google.png" className='my-2' alt="google_image" />
            </div>
            <div className="col-sm text-center">
              <img src="images/flickr.png" className='my-2' alt="flicker_image" />
            </div>
            <div className="col-sm text-center">
              <img src="images/vimeo.png" className='my-2' alt="vimeo_image" />
            </div>
            <div className="col-sm text-center">
              <img src="images/myspace.png" className='my-2' alt="myspace_image" />
            </div>
          </div>
          <div className='text-end mt-3 mt-lg-5'>
            <a href="/" className='btn text-light'>Read More</a>
          </div>
        </div>
      </section>
    </>
  )
}
