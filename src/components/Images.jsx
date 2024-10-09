const Images = (props) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {props.images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              margin: '10px',
              overflow: 'hidden',
              width: '320px',
              height: 'auto'
            }}
            className="image-container"
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.3s ease' }}
              className="image"
            />
            {/* Overlay and Text */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none', // Makes sure overlay does not block image hover
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
                    .image-container:hover .overlay {
                        opacity: 1 !important;
                        background-color:rgb(255 35 35 / 38%) !important;
                    }

                    .image-container:hover .image {
                        transform: scale(1.1);
                    }
                `}
      </style>
    </>
  );
};

export default Images;
