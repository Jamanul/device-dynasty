import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../firebaseAuth/AuthProvider';

const Login = () => {
    const {logInWithEmail}=useContext(AuthContext)
    const handleLogin = async(e) =>{
        e.preventDefault()
        const form= e.target
        const email = form.email.value
        const password = form.password.value
        const userData={
          email,password
        }
        await logInWithEmail(userData.email,userData.password)
        .then(result=>{console.log(result)})
        .catch(error=>{console.log(error)})
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src="https://i.postimg.cc/C5ZNM2Ps/9e2866d655b48b6000e2bc7d1bb73724.jpg" alt="" srcSet="" />
            <p className="py-6">
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 border py-24 border-primary rounded-3xl">
          <h1 className="text-5xl font-bold text-center pt-2 text-primary">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered border-primary text-primary" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered border-primary text-primary" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-white font-bold text-xl">Login</button>
              </div>
            </form>
            <h2 className='text-center'>Don't have an account?? <span className='font-bold text-primary'><Link to='/register'>Register !!!</Link> </span></h2>
          </div>
        </div>
      </div>
    );
};

export default Login;