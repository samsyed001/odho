import Footer from "../components/Footer"
import "../pages/Registration.css"

const RegistrationForm = () => {
  return (
    <>
      <div className="about-us-img ">
        <div>
          <h1>Become Our Model</h1>
          <p>Honey/ <span style={{color:'red'}}>From</span></p>
        </div>
      </div>

    <div className="heading">
      <h1>Registration Form</h1>
    </div>

      <div className="inputs">

      <div className="first-sec">
      <input type="text" placeholder="Your Name" className="input input-bordered input-primary " />
      <input type="number" placeholder="Phone Number" className="input input-bordered input-primary " />
      <input type="text" placeholder="Your Age" className="input input-bordered input-primary " />
      <input type="text" placeholder="Your Height (CM)" className="input input-bordered input-primary " />
      <input type="text" placeholder="Burst Size" className="input input-bordered input-primary " />
      </div>

      <div className="second-sec">
      <input type="email" placeholder="Email" className="input input-bordered input-primary " />
      <input type="text" placeholder="City" className="input input-bordered input-primary " />
      <input type="text" placeholder="Eye Color" className="input input-bordered input-primary " />
      <input type="text" placeholder="Your Weight (IB)" className="input input-bordered input-primary " />
      <input type="text" placeholder="Location" className="input input-bordered input-primary " />
      </div>
      </div>


      <div className="upload-container">
    <div className="upload-header">
      <h1>UPLOAD SHOTS</h1>
        <div className="upload">
           <div className="img"> <img src="../assests/Vector (1).png" alt="Images" /></div>
            <span>Images<br />PNG, JPG, GIF, in app-cropping</span>
        </div>
        <div className="upload">
           <div className="img"> <img src="../assests/Vector (2).png" alt="GIFs" /></div>
            <span>GIFs<br />800x600 or 400x300</span>
        </div>
        <div className="upload">
          <div className="img">  <img src="../assests/Vector (3).png" alt="Videos" /></div>
            <span>Videos<br />MP4, 4:3 up to 24 seconds</span>
        </div>
    </div>

    <div className="upload-area">
        <img src="../assests/Vector (4).png" alt="Upload" />
        <p>Drag & Drop To Upload<br />Or Browse</p>
    </div>

<div className="upload-btn">
  
<p className="upload-info">
        48 shots remaining this month. Please read our 
        <a href="#">Community Guidelines</a> before uploading.
    </p>

    <button className="upload-button">Upload</button>
</div>
</div>



<div className="field-container">
            <h1>Field Interest</h1>
            <div className="checkbox-container">
                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" /> Fashion Shows/Catwalk
                    </label>
                    <label>
                        <input type="checkbox" /> Singing/Musician
                    </label>
                    <label>
                        <input type="checkbox" /> Corporate Events
                    </label>
                    <label>
                        <input type="checkbox" /> Hostess
                    </label>
                </div>
                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" /> Promotional Jobs
                    </label>
                    <label>
                        <input type="checkbox" /> Presenter/MC
                    </label>
                    <label>
                        <input type="checkbox" /> Movie/Theater Acting
                    </label>
                    <label>
                        <input type="checkbox" /> Dancing
                    </label>
                </div>
            </div>
        </div>


        <div className="about-me-container">
            <textarea placeholder="About Me" className="about-me-textarea"></textarea>
            <button  className="submit-button" >
                <i className="fa-regular fa-paper-plane"></i>
                </button>
            <div className="form-footer">
                <label className="terms-label">
                    <input  type="checkbox"  />
                    I Agree to Model Terms and Conditions
                </label>
               
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default RegistrationForm
