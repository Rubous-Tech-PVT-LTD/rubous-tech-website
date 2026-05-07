export default function CommunicationSection({ serviceDetail }) {
  const communication = serviceDetail?.communication;
  const title = communication?.title || '';
  const description = communication?.description || '';

  if (!title || !description) {
    return null;
  }

  return (
    <section className="bg-linear-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          {title}
        </h2>

        <div className="relative inline-block max-w-3xl 2xl:max-w-5xl">
          <p className="text-gray-600 text-base leading-relaxed font-normal relative z-10">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}