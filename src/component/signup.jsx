import React from 'react'
function Signup() {
  return (
<>
<div className="main-1">
  <div className="container">
    <div className="body">
      <div className="h_1"> 
        <header>
          <h1 className="head ph2">
          Welcome <br/>
          Back
          </h1>
        </header>
      </div>
      <div className="main-container p2">
        <input type="email" placeholder="Your email" className="i-1 pi2" />
        <hr />
        <input type="password" placeholder="Password" className="i-1 pi2" />
        <hr />
        <button className="btn i-2">Sign in</button>
        <h3>or</h3>
        <button className="btn i-3">Sign in with Google</button>  
      </div>
      <footer>
        <p className="ft-p ft2">
          Create account?
          <a href="index.html"   > Sign up</a>
        </p>
      </footer>
    </div>
  </div>
</div>

    </>
  )
}

export default Signup