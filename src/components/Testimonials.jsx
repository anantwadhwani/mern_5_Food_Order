import React from "react";

const Testimonials = () => (
  <section className="bg-white py-16" id="testimonials">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold mb-10">What our customers say</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <blockquote>
          <p className="italic">"Omnifood is just awesome! I no longer worry about what to eat or whether it’s healthy."</p>
          <cite className="block mt-2 text-sm text-gray-600">— Sarah M.</cite>
        </blockquote>
        <blockquote>
          <p className="italic">"Fast, delicious and nutritious! I recommend Omnifood to everyone."</p>
          <cite className="block mt-2 text-sm text-gray-600">— James W.</cite>
        </blockquote>
      </div>
    </div>
  </section>
);

export default Testimonials;
