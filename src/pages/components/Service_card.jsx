import React from 'react'
import { NavLink } from 'react-router-dom'
import CargImg from '../../images/women-work1.jpg'
const Service_card = () => {
  return (
    <div>
        
            <div className="card">
              <img src={CargImg } className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to='/' className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
   
  )
}

export default Service_card
