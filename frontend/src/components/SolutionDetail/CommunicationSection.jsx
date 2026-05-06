export default function CommunicationSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Effortless Communication at Scale
        </h2>

        <div className="relative inline-block max-w-3xl">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 h-full border-l-2 border-dashed border-blue-400 transform -translate-x-1/2 pointer-events-none" />
          
          <p className="text-gray-600 text-base leading-relaxed font-normal relative z-10">
            Our platform bridges the gap between complex enterprise data and
            personal customer conversations. We turn the world's most popular
            messaging app into your most powerful automation tool, allowing you
            to reach customers where they already spend their time.
          </p>
        </div>
      </div>
    </section>
  );
}