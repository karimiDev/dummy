import ReactImageMagnify from "react-image-magnify";

function ImageMagnify() {
    return ( <>
     <ReactImageMagnify
            {...{
              enlargedImagePortalId: 'right-zoom',
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: "https://swiperjs.com/demos/images/nature-1.jpg",
              },
              largeImage: {
                src: "https://swiperjs.com/demos/images/nature-1.jpg",
                width: 1200,
                height: 1800,
              },
               enlargedImageContainerDimensions: {
                 width: "150%",
                height: "150%",
               },
            }}
          />
          
          </>
     );
}

export default ImageMagnify;