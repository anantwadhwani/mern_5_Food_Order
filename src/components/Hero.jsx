import hf from '../images/hf.jfif';

const Hero = () => {
  return (
    <section className="bg-gray-50 px-4 py-12 md:py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            A healthy meal delivered to your door, every single day
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            The smart 365-days-per-year food subscription that will make you eat healthy again.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 text-white py-3 px-6 rounded-xl hover:bg-orange-600 text-lg">
              Start eating well
            </button>
          </div>
        </div>
        <div>
          <img src={hf} alt="Healthy food" className="w-full rounded-2xl shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
