import React from 'react'
import config from 'config.json'

type imageList = {
  persons: {
    [key: number]: string
  },
  wrongAnswer: string,
  correctAnswer: string
}

export const imageList: imageList = {
  persons: {
    0: `${config.serverUrl}wp-content/uploads/2023/08/person-1.jpg`,
    1: `${config.serverUrl}wp-content/uploads/2023/08/person-2.jpg`,
    2: `${config.serverUrl}wp-content/uploads/2023/08/person-3.jpg`,
    3: `${config.serverUrl}wp-content/uploads/2023/08/person-4.jpg`,
    4: `${config.serverUrl}wp-content/uploads/2023/08/person-5.jpg`,
  },
  wrongAnswer: `${config.serverUrl}wp-content/uploads/2023/08/wrong-answer.svg`,
  correctAnswer: `${config.serverUrl}wp-content/uploads/2023/08/correct-answer.svg`
}

function PreloadImages() {
  React.useEffect(() => {
    // Function to preload an image
    const preloadImage = (url) => {
      const img = new Image();
      img.src = url;
    };

    // Preload each image in the imageUrls array
    for (let image of Object.values(imageList)) {
      preloadImage(image)
    }
  }, []);

  return <></>; // Return an empty fragment, as this component doesn't render anything visible
};

export {PreloadImages};