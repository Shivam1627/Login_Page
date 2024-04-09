import React from 'react'
import { Outlet , Link} from 'react-router-dom'

const Nav=() =>{
  return (
    <>
       <div className='nav'>
             <div className='navp'>
                    <Link to="/signin">SignUp</Link>
                    <Link to="/signup">SignIn</Link>
             </div>
        </div>
      <Outlet/>
    </>

  )
}

export default Nav