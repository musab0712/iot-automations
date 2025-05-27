import Image from "next/image";

export default function ServicesArea({ product }) {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-24 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Image Section */}
            <div className="flex-1 min-w-[300px] max-w-[600px]">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={300}
                className="rounded-lg shadow-lg md:h-[420px]"
              />
            </div>

            {/* Details Section */}
            <div className="flex-1 min-w-[300px]">
              <h2 className=" text-xl md:text-2xl font-bold text-blue-700 mb-4">
                {product.title}
              </h2>
              <p className="text-base text-gray-600 mb-6">
                {product.fullDescription}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {product.bulletPoints.map((point, index) => (
                  <li key={index} className="text-gray-700 text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-6 mt-12 md:mt-24 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-20">
            {product.cardDetail.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-40 md:h-60 w-full relative rounded-lg overflow-hidden">
                  <Image
                    src={card.image} // Directly use StaticImageData or string path
                    alt={card.title}
                    layout="fill" // Ensures the image fills the parent container
                    objectFit="cover" // Makes the image cover the container
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-4">
                    {card.description}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {card.fullDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
