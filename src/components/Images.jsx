const Images = (props) => {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {props.images.map((image, index) => (
            <div key={index} style={{ position: 'relative', margin: '10px' }}>
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: '320px', height: 'auto', display: 'block' }}
              />
              {/* Overlay and Text */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)', // Light red color with transparency
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease', // Smooth transition for hover
                }}
                className="overlay"
              >
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{image.text}</span>
              </div>
            </div>
          ))}
        </div>
        <style>
          {`
            .overlay:hover {
              opacity: 1;
            }
          `}
        </style>
      </>
    );
  };
  
  export default Images;
  
  
