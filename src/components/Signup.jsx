import React, { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "../firebase";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function Signup() {
  const [user, setUser] = useState({});
  let handleInput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
    
    createUserWithEmailAndPassword(auth,user.email,user.password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);        
    })
    .catch((error)=>{
        alert(error.code);
        alert(error.message)
    })
  }

  let googleAuth=()=>{
    signInWithPopup(auth,googleProvider)
    .then(()=>{
        console.log("SignUp");
    })
    .catch((error)=>{
        console.log(error);        
    })
  }

  let githubAuth=()=>{
    signInWithPopup(auth,githubProvider)
    .then(()=>{
        console.log("Shign up with github");        
    })
    .catch((error)=>{
        console.log(error.code);        
    })
  }

  // Create a ref for the container
  const containerRef = useRef(null);

  // Function to add 'active' class
  const handleRegisterClick = () => {
    containerRef.current.classList.add("active");
  };

  // Function to remove 'active' class
  const handleLoginClick = () => {
    containerRef.current.classList.remove("active");
  };

  return (
    <div className="container" id="container" ref={containerRef}>
      <div className="form-container sign-up">
        <form method="post" onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a onClick={googleAuth} className="icon">
              <i className="fa-brands fa-google" />
            </a>
            <a onClick={githubAuth} className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <span>or use your email for register</span>
          <input
            type="email"
            name="email"
            value={user.email||''}
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            value={user.password || ''}
            placeholder="Password"
            onChange={handleInput}
          />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form action="#">
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google" />
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <span>or use your email and password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot Password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features.</p>
            <button className="hidden" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Subscriber!</h1>
            <p>
              Register with your personal details to use all of site features.
            </p>
            <button className="hidden" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
