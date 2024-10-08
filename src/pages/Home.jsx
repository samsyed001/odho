import Cards from "../components/Card"
// import Carousel from "../components/Carousel";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Images from "../components/Images.jsx";
import TestimonialSlider from "../components/Testimonials.jsx";
import "../pages/Home.css"

const cardData = [
  {
    src: "../assests/Rectangle 1687.png",
    title: "Ice Cream",
    description: "A sweet, frozen dessert made from cream, sugar, and various flavors."
  },
  {
    src: "../assests/Rectangle 1688.png",
    title: "Ice Cream",
    description: "A sweet, frozen dessert made from cream, sugar, and various flavors."
  },
  {
    src: "../assests/Rectangle 1689.png",
    title: "Ice Cream",
    description: "A sweet, frozen dessert made from cream, sugar, and various flavors."
  },
  {
    src: "../assests/Rectangle 1690.png",
    title: "Ice Cream",
    description: "A sweet, frozen dessert made from cream, sugar, and various flavors."
  },
  {
    src: "../assests/Rectangle 1691.png",
    title: "Ice Cream",
    description: "A sweet, frozen dessert made from cream, sugar, and various flavors."
  },
  {
    src: "../assests/Rectangle 1692.png",
    title: "Ice Cream",
    description: "A sweet, frozen dessert made from cream, sugar, and various flavors."
  }
];



const Home = () => {
    return (
      <>
<section>
<div className="relative carousel rounded-box flex justify-center">
    {/* Carousel Items */}
    <div className="carousel-item">
      <img
        style={{ width: '100%' }}
        src="../assests/home1.png"
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <img
        style={{ width: '100%' }}
        src="../assests/Rectangle 533.png"
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <img
        style={{ width: '100%' }}
        src="../assests/Rectangle 534.png"
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <img
        style={{ width: '100%' }}
        src="../assests/Rectangle 535.png"
        alt="Burger"
      />
    </div>
    <div className="carousel-item">
      <img
        style={{ width: '100%' }}
        src="../assests/Rectangle 536.png"
        alt="Burger"
      />
    </div>

    {/* Centered Text */}
    <div className="absolute inset-0 flex items-center justify-center text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        LELEE
      </h2>
     
    </div>
    <div className="absolute inset-0 flex items-center justify-center text-white">
    <p className="text-lg md:text-xl text-center" style={{marginTop:'60px'}}>
        More Details
      </p>
    </div>
  </div>
</section>


<section style={{ backgroundColor: 'black', padding: '30px' }}>
<div>
  <h2 className="text-white text-center p-2 text-3xl mb-2">
    Find an escort or massage girl in your area
  </h2>
</div>

<div style={{ alignItems: 'center' }} className=" flex justify-center gap-10 drop-down-main flex-wrap">
  {/* Dropdown 1 */}
  <div className="text-start drop">
    <p className="text-white mx-1">Sex</p>
    <details className="dropdown w-48">
      <summary style={{ backgroundColor: 'black', border: 'none' }} className="dropin btn m-1 flex items-start">
        <span className="text-start" style={{ color: 'gray', marginRight: "10px" }}>Open or Close</span>
        <span style={{ borderLeft: "2px solid gray" }}>
          <i style={{ color: 'white' }} className="fas fa-chevron-down ml-1"></i>
        </span> {/* Dropdown icon */}
      </summary>
      <ul className="list menu dropdown-content bg-base-100 rounded-box z-[1] w-48 p-2 ">
        <li   style={{color:"white"}}><a>Item 1</a></li>
        <li  style={{color:"white"}}><a>Item 2</a></li>
      </ul>
    </details>
  </div>

  {/* Dropdown 2 */}
  <div className="text-start drop">
    <p className="text-white mx-1">Area</p>
    <details className="dropdown w-48">
      <summary style={{ backgroundColor: 'black', border: 'none' }} className="dropin btn m-1 flex items-start">
        <span className="text-start" style={{ color: 'gray', marginRight: "10px" }}>Open or Close</span>
        <span style={{ borderLeft: "2px solid gray" }}>
          <i style={{ color: 'white' }} className="fas fa-chevron-down ml-1"></i>
        </span> {/* Dropdown icon */}
      </summary>
      <ul className="list menu dropdown-content bg-base-100 rounded-box z-[1] w-48 p-2 shadow">
        <li style={{color:"white"}}><a>Item 1</a></li>
        <li  style={{color:"white"}}><a>Item 2</a></li>
      </ul>
    </details>
  </div>

  {/* Dropdown 3 */}
  <div className="text-start drop">
    <p className="text-white mx-1">Services</p>
    <details className="dropdown w-48">
      <summary style={{ backgroundColor: 'black', border: 'none' }} className="dropin btn m-1 flex items-start">
        <span className="text-start" style={{ color: 'gray', marginRight: "10px" }}>Open or Close</span>
        <span style={{ borderLeft: "2px solid gray" }}>
          <i style={{ color: 'white' }} className="fas fa-chevron-down ml-1"></i>
        </span> {/* Dropdown icon */}
      </summary>
      <ul className="list menu dropdown-content bg-base-100 rounded-box z-[1] w-48 p-2 shadow">
        <li  style={{color:"white"}}><a>Item 1</a></li>
        <li  style={{color:"white"}}><a>Item 2</a></li>
      </ul>
    </details>
  </div>

  {/* Dropdown 4 */}
  <div className="text-start drop">
    <p className="text-white mx-1">Age</p>
    <details className="dropdown w-48">
      <summary style={{ backgroundColor: 'black', border: 'none' }} className="dropin btn m-1 flex items-start">
        <span className="text-start" style={{ color: 'gray', marginRight: "10px" }}>Open or Close</span>
        <span style={{ borderLeft: "2px solid gray" }}>
          <i style={{ color: 'white' }} className="fas fa-chevron-down ml-1"></i>
        </span> {/* Dropdown icon */}
      </summary>
      <ul className="list menu dropdown-content bg-base-100 rounded-box z-[1] w-48 p-2 shadow">
        <li  style={{color:"white"}}><a>Item 1</a></li>
        <li  style={{color:"white"}}><a>Item 2</a></li>
      </ul>
    </details>
  </div>
  {/* Submit Button in a separate div */}
<div className=" flex justify-center mt-4 drop">
  <button className="btun btn btn-error w-full">Submit</button>
</div>
</div>




  <div>
  <h1 className="text-center text-4xl mt-20 text-white">Most Demanding Models</h1>
</div>


<Cards cardData={cardData} />

<h1 className="text-center text-2xl mt-20 text-white">Choose Your Partners</h1>
<h1 className="text-center text-4xl mt-5 mb-10 text-white">Find Model In Your Area</h1>

<Images
  images={[
    { src: "../assests/Rectangle 3.png", alt: "Image 1", text: "Hovered Text 1" },
    { src: "../assests/Rectangle 4 (1).png", alt: "Image 2", text: "Hovered Text 2" },
    { src: "../assests/Rectangle 5.png", alt: "Image 3", text: "Hovered Text 3" },
    { src: "../assests/Rectangle 6 (1).png", alt: "Image 4", text: "Hovered Text 4" },
    { src: "../assests/Rectangle 515.png", alt: "Image 1", text: "Hovered Text 1" },
    { src: "../assests/Rectangle 516.png", alt: "Image 2", text: "Hovered Text 2" },
    { src: "../assests/Rectangle 3.png", alt: "Image 3", text: "Hovered Text 3" },
    { src: "../assests/Rectangle 518.png", alt: "Image 4", text: "Hovered Text 4" },
    { src: "../assests/Rectangle 3.png", alt: "Image 1", text: "Hovered Text 1" },
    { src: "../assests/Rectangle 4 (1).png", alt: "Image 2", text: "Hovered Text 2" },
    { src: "../assests/Rectangle 5.png", alt: "Image 3", text: "Hovered Text 3" },
    { src: "../assests/Rectangle 6 (1).png", alt: "Image 4", text: "Hovered Text 4" },
    { src: "../assests/Rectangle 515.png", alt: "Image 1", text: "Hovered Text 1" },
    { src: "../assests/Rectangle 516.png", alt: "Image 2", text: "Hovered Text 2" },
    { src: "../assests/Rectangle 3.png", alt: "Image 3", text: "Hovered Text 3" },
    { src: "../assests/Rectangle 518.png", alt: "Image 4", text: "Hovered Text 4" },
    
  ]}
/>

<div style={{alignItems:'center'}} className="mt-20 flex flex-col lg:flex-row justify-around items-center lg:items-start gap-8">
  {/* Text Content */}
  <div className="text-center lg:text-left" style={{alignItems:'center'}}>
    <h1 className="text-white text-xl lg:text-3xl font-bold mb-4">
      About Us for Massage <br className="hidden lg:block" /> and Escort Services
    </h1>
    <p className="text-sm lg:text-base mb-6">
      Welcome to [Your Business Name], your destination for relaxation and <br className="hidden lg:block" /> 
      companionship. We offer a range of soothing massage therapies and <br className="hidden lg:block" /> 
      professional escort services, designed to provide comfort, relaxation, and <br className="hidden lg:block" /> 
      an unforgettable experience. Our team is dedicated to ensuring your <br className="hidden lg:block" /> 
      privacy, satisfaction, and comfort at all times. Discover a new level of <br className="hidden lg:block" /> 
      care with us.
    </p>
    <button className="btn btn-error text-white">Book An Appointment</button>
  </div>

  {/* Image Section */}
  <div className="relative border p-1" style={{ maxWidth: '320px' }}>
    {/* First Image */}
    <img src="../assests/Rectangle 15.png" alt="" className="w-full h-auto" />

    {/* Second Image positioned to extend outside the right edge */}
    <img
      src="../assests/Rectangle 14.png"
      alt=""
      className="absolute top-5 right-[-40px] w-[100px] lg:w-[150px]"
    />
  </div>
</div>

<h1 className="text-center text-2xl mt-10 text-white">Testimonials</h1>
<h1 className="text-center text-4xl text-white mb-5">What Our Clients Say</h1>


<ContactUs/>
<TestimonialSlider/>
<Footer/>


</section>





</>
    )
  }
  
  export default Home