import React from 'react'
import Card from './components/Service_card'
const Service = () => {
  return (
    <div>
      <section className='my-5 service_page'>
        <h1 className='tab-center text-center'>Our Services </h1>
        <div className='container-fluid pt-4 mb-5'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gy-4'>
            
                <div className='col-lg-4 col-md-6 col-12 col-sm-4'><Card /></div>
                <div className='col-lg-4 col-md-6 col-12 col-sm-4'><Card /></div>
                <div className='col-lg-4 col-md-6 col-12 col-sm-4'><Card /></div>
                <div className='col-lg-4 col-md-6 col-12 col-sm-4'><Card /></div>
                <div className='col-lg-4 col-md-6 col-12 col-sm-4'><Card /></div>
                <div className='col-lg-4 col-md-6 col-12 col-sm-4'><Card /></div>
             

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
