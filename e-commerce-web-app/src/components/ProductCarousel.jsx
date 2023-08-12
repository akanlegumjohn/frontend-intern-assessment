import { useState } from "react";

export const ProductCarousel = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center mt-4 space-y-2 overflow-y-auto justify-center">
        {product.images.map((image) => (
          <img
            key={image}
            src={image}
            alt={product.title}
            className="w-16 h-16 object-cover rounded-lg cursor-pointer border border-gray-500"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className=" ">
        <img
          src={selectedImage}
          alt={product.title}
          className="w-full h-96 object-cover rounded-md "
        />
      </div>
    </div>
  );
};
