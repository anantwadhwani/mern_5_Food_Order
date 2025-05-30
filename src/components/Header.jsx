const Header = () => {
  return (
    <header className="bg-orange-500 text-white py-6 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold">Omnifood</h1>
        <nav className="mt-4 md:mt-0 flex gap-6 text-base md:text-lg">
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#meals" className="hover:underline">Meals</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
