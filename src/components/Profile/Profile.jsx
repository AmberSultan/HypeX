import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row column-gap-3">
            <div className="col-md-4 cont1 ">
            <div className="pic ">
                    <div className="img">
                        <img src="../image.jpg" alt="" srcset="" />
                    </div>

            <div className="fullname"><h5>Full Name</h5></div>
            <div className="username mb-3"><p>User Name</p></div>
            
            </div>
            <div className="detail">Detail1</div>
            <div className="detail">Detail2</div>
            <div className="detail det3">Detail3</div>

            </div>
            <div className="col-md-7 cont1 ">

            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="text" className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder='Enter first name' id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="text" className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder='Enter last name' id="inputPassword4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="text" className="form-label">UserName</label>
                    <input type="text" className="form-control" placeholder='Enter username' id="input" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="text" className="form-label">Website</label>
                    <input type="text" className="form-control" placeholder='http://website.com' id="inputPassword4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder='Enter username' id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder='Enter password' id="inputPassword4" />
                </div>
  
  <div className="col-12 update ">
    <button type="submit" className="btn btn-primary">Update</button>
  </div>
</form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
