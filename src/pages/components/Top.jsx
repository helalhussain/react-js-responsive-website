import React from 'react'
import work1 from '../../images/women-work1.jpg'
import { NavLink } from 'react-router-dom'
const Top = (props) => {
  return (
    <div>
            <section id='header' className="d-flex align-items-center">
        <div className='container'>
            <div className='row home_top'>
                    <div className='col-md-6 first_part pb-1  pt-lg-0 order-1 d-flex justify-content-center flex-column'>
                        <h1>{props.title} <br/> <span className='brand-name'>Helal Hussain</span></h1>
                        <h2 className='py-2'>
                            We are the team of talented developer making websites
                        </h2>
                        <div className='btn '>
                            <NavLink to={props.visit} className="btn-get-started">
                            {props.btn}
                            </NavLink>
                        </div>
                    </div>
            
                <div className='col-lg-6 order-2 header-img'>
                  <img src={work1} className="img-fluid" alt="img" />
                </div>

            </div>
        </div>
      </section>
    </div>
  )
}

export default Top
