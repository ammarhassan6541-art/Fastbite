export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349"
            alt="About our restaurant"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Our Fast Food
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            We serve freshly cooked, delicious fast-food items made with
            high-quality ingredients. Our mission is to provide the best taste
            with fast delivery and friendly service.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            From crispy burgers to cheesy pizzas, we ensure every bite brings a
            perfect blend of flavor and satisfaction.
          </p>

          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl shadow hover:bg-yellow-400 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
