
import './Login.css'; // Assuming your CSS is in a separate file called Login.css

const Login = () => {
  return (
    <div className="login-container">
      {/* Full-width Background Image with Overlay */}
      <div className="overlay">
        {/* Left side text */}
        <div className="left-text">
          <div className="logo">
            <h2>LOGO HERE</h2>
            <h2>
              Login Your <br /> Account!
            </h2>
            <p>
              Register to access all the features of our services. <br />
              Manage your business in one place. Its free!
            </p>
          </div>
        </div>

        {/* Centered Login Form */}
        <div className="login-box">
          <h1>Login</h1>
          <form action="/login" method="POST"> {/* Replace with actual login handler */}
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              required 
            />
            <div className="forgot-password">
              <a href="/">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>

          <div className="social-login">
            <button className="social-btn google-btn">
              <i style={{ marginRight: '10px' }} className="fa-brands fa-google"></i>
              Log in with Google
            </button>
            <button className="social-btn facebook-btn">
              <i style={{ marginRight: '10px' }} className="fa-brands fa-facebook"></i>
              Log in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
