import React from "react";

const Features = () => (
  <section className="bg-white py-16" id="features">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold mb-10">Why choose Omnifood?</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-2">365 Days/Year</h4>
          <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Local & Organic</h4>
          <p>Our cooks only use local, fresh, and organic products to prepare your meals.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">No Waste</h4>
          <p>All our partners only use reusable containers to package all your meals.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
