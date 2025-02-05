const Event = () => {
  return (
    <>
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src="https://via.placeholder.com/400"
            alt="Image Card"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Titre de la Card
            </h2>
            <p className="text-gray-600 mt-2">
              Ceci est une simple card avec un contenu statique et du style
              Tailwind.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              En savoir plus
            </button>
          </div>
        </div>{" "}
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src="https://via.placeholder.com/400"
            alt="Image Card"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Titre de la Card
            </h2>
            <p className="text-gray-600 mt-2">
              Ceci est une simple card avec un contenu statique et du style
              Tailwind.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              En savoir plus
            </button>
          </div>
        </div>{" "}
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src="https://via.placeholder.com/400"
            alt="Image Card"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Titre de la Card
            </h2>
            <p className="text-gray-600 mt-2">
              Ceci est une simple card avec un contenu statique et du style
              Tailwind.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              En savoir plus
            </button>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Event;
