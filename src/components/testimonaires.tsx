import { useState } from "react";
import testis from "@/utils/testis";

const Testimonaires = () => {
  const [showAll, setShowAll] = useState(false);
  const testimonialsToShow = showAll ? testis : testis.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
      <h1 className="text-3xl font-bold text-black text-center mb-10">Testimonials</h1>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsToShow.map((itm, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 p-6  transition-shadow duration-300"
          >
            <blockquote className="text-gray-700 italic">“{itm.name}”</blockquote>
            <cite className="block text-sm font-medium text-[#B23E3E] mt-4">{itm.title}</cite>
          </div>
        ))}
      </section>

      <div className="flex md:justify-center justify-start mt-7 md:mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white bg-[#B23E3E] hover:bg-[#B23E3E] font-semibold px-6 py-3 rounded transition"
        >
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Testimonaires;
