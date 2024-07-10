import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      image: 'path/to/image1.png',
      text: 'This portal gave me great opportunities',
      name: 'User 1',
    },
    {
      image: 'path/to/image2.png',
      text: 'I am happy to be a part of this portal that helps with hiring opportunities',
      name: 'User 2',
    },
    {
      image: 'path/to/image3.png',
      text: '',
      name: 'User 3',
    },
    {
      image: 'path/to/image4.png',
      text: '',
      name: 'User 4',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-12">
        Start growing with Community
      </h2>
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-y-0">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-2">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
              <img
                src={testimonial.image}
                alt={`Testimonial from ${testimonial.name}`}
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            {testimonial.text && (
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-center">
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
