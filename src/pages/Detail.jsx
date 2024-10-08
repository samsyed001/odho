import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { details_img } from "../components/images";
import TestimonialSlider from "../components/Testimonials";
import "../pages/Details.css"
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';


const Detail = () => {
    return (
      <>
      <div className="detail-us-img ">
        <div>
          <h1>Modal Details</h1>
          <p>Honey/ <span style={{color:'red'}}>Detail page</span></p>
        </div>
      </div>

      <section>
      <div className="container mx-auto p-6  text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left section: Profile Image and Basic Info */}
        <div className="profile-details">
          <div className="profile-image">
            <img style={{width:'640px' , height:'auto' , objectFit:'contain'}} 

              src="../assests/Rectangle 515.png"
              alt="Profile"
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="profile-info flex justify-between mt-6 profile">

            <div className="one">
            <div><strong>AGE</strong> <br /> 24</div>
            <div><strong>HEIGHT</strong><br /> 57</div>
            <div><strong>WEIGHT</strong><br /> 120 lbs</div>
            <div><strong>EYES</strong><br /> Blue</div>
            <div><strong>HAIR</strong><br /> Black</div>
            </div>

            <div className="sec">
            <div><strong>DRESS</strong><br /> 2.4</div>
            <div><strong>BUST</strong><br /> 36</div>
            <div><strong>WAIST</strong> <br />28</div>
            <div><strong>HIPS</strong><br /> 36</div>
            <div><strong>SHOE</strong><br /> 7.5</div>
            </div>
            

          </div>
          <div className="image-gallery grid grid-cols-4 gap-4">
          <img src="../assests/Rectangle 1741.png" alt="Thumbnail" className="rounded-lg" />
          <img src="../assests/Rectangle 1742.png" alt="Thumbnail" className="rounded-lg" />
          <img src="../assests/Rectangle 1743.png" alt="Thumbnail" className="rounded-lg" />
          <img src="../assests/Rectangle 1744.png" alt="Thumbnail" className="rounded-lg" />
        </div>
        <div className="mt-12 space-y-6">
       

       <div className="location-info text-center space-y-2">
         <div className="flex justify-center items-center text-lg location">
           <FaMapMarkerAlt className="mr-2" /> Jacksons Street 567, San Diego, California, USA
         </div>
         <div className="flex justify-center items-center text-lg location">
           <FaEnvelope className="mr-2" /> example@gmail.com
         </div>
       </div>
     </div>
        </div>

        {/* Right section: Service Ratings and Contact Form */}
        <div className="space-y-6">
          <div className="ratings">
          <h2 className="text-white text-3xl font-bold mt-4 text-start">LELEE</h2>
          <p className="mt-4 mb-4 text-gray-300 text-start">
          Ei convenire honestatis mei, tamquam dolorum te sit, mole cum verterem signiferumque pro ex. Ex brute postulant sit, eos no velit gloriatur. No denique verterem omittantur ius, at nisl placerat ex sed. Mea at iudico nostro. In quo dolore posidonium. Sonet ludus aliquid an vix.
          </p>
            <h3 className="text-white font-bold text-xl">Service Popularity</h3>
            <div className="max-w-full bg-gray-700 rounded-full h-4">
              <div className="bg-error h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>

            <h3 className="text-white font-bold text-xl mt-4">Client Satisfaction</h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-error h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>

            <h3 className="text-white font-bold text-xl mt-4">Booking Trusts</h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-error h-4 rounded-full" style={{ width: '60%' }}></div>
            </div>

            <h3 className="text-white font-bold text-xl mt-4">Experience Dedication</h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-error h-4 rounded-full" style={{ width: '99%' }}></div>
            </div>
          </div>

          <div className="contact-form">
            <h3 className="text-white font-bold text-xl">Contact Model</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-2 bg-gray-800 text-white rounded" />
              <input type="text" placeholder="Phone Number" className="w-full p-2 bg-gray-800 text-white rounded" />
              <input type="email" placeholder="Email Address" className="w-full p-2 bg-gray-800 text-white rounded" />
              
              <div className="text-area">
              <textarea  placeholder="Your Message" className="w-full p-2 bg-gray-800 text-white rounded h-24"></textarea>
              <button type="submit" className="w-full p-2 bg-pink-500 text-white rounded"><i className="fa-regular fa-paper-plane"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom section: Gallery and Contact Information */}

    </div>
      </section>

      <div className="flex justify-center gap-4 flex-shrink-0 p-4">
        {
          details_img.map((image) => {
            return(
             <>
              <div className="d-img">
            <img src={image.src} alt={image.alt} key={image.id} />
              </div>
             </>
            )
          })
        }
      </div>

      <section>
      <TestimonialSlider/>
        <ContactUs/>
        <Footer/>
      </section>
      </>
    )
  }
  
  export default Detail