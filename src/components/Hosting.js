import React from 'react'

export default function Hosting() {
  return (
    <>
      <section className="hosting">
        <div className="container border-bottom border-dark">
          <h4 className="fw-bolder py-5 border-bottom border-dark">About Hosting</h4>
          <div className="row">
            <div className="col-12 mb-4">
              <div className="circles row gx-0 my-2">
                <div></div>
                <div className='mx-1'></div>
                <div></div>
              </div>
            </div>
            <div className="col-md mb-4 mb-md-0">
              <h5 className='fw-bold'>Rainy Hosting</h5>
              <p className='fs-6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum modi iure, quidem voluptas nemo maiores quae inventore placeat voluptatum ullam magni necessitatibus
              </p>
              <div className='text-end'>
                <a href="/" className='btn text-light'>Read More</a>
              </div>
            </div>
            <div className="col-md text-center">
              <img src="images/laptop.png" alt="laptop_image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
