import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg">
              <span className='text-light'>Copyright CloudHosting Inc. 2022.  &copy; All rights are reserved</span>
            </div>
            <div className="col-lg">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb d-flex justify-content-lg-end text-light">
                  <li class="breadcrumb-item" >Home</li>
                  <li class="breadcrumb-item" >About</li>
                  <li class="breadcrumb-item" >Servers</li>
                  <li class="breadcrumb-item" >Hosting</li>
                  <li class="breadcrumb-item" >Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
