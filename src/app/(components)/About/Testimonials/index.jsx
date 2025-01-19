import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kristin Watson",
      role: "Web Designer",
      review:
        "when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into",
    },
    {
      name: "Kristin Watson",
      role: "Web Designer",
      review:
        "when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into",
    },
    {
      name: "Kristin Watson",
      role: "Web Designer",
      review:
        "when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into",
    },
  ];

  return (
    <section
      className="max-[640px]:container max-[640px]:mx-auto relative w-full h-auto bg-cover bg-center flex flex-row lg:flex-row justify-between items-center px-6 md:px-10 lg:px-20 gap-12 mb-4"
      style={{
        backgroundImage: `url(/assets/about/testimonial-bg.png)`,
      }}
    >
      {/* Left Side - Image */}
      <div className="relative max-w-sm md:max-w-md lg:max-w-none lg:w-1/2 justify-center hidden md:flex">
        <Image
          src="/assets/about/african-woman.png"
          alt="happy Image"
          width={528}
          height={686}
        />
      </div>

      {/* Right Side - Content */}
      <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
        <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] font-[plus jakarta sans]">
          Testimonials
        </span>

        <div className="text-[46px] font-poppins mb-8">
          <span className="text-[#000]">What</span>{" "}
          <span className="text-[#000] font-extrabold">Happy Clients Say</span>{" "}
          <span className="highlight orange font-extrabold">About Us</span>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg px-6 py-16 text-center border border-gray-200 w-full md:w-[370px] h-[357px]"
            >
              {/* Inverted Comma Image */}
              <div className="absolute top-4 right-4">
                <Image
                  src="/assets/about/comma.png"
                  alt="comma"
                  width={45}
                  height={45}
                />
              </div>

              {/* Review Text */}
              <div className="text-[#FF6700] text-xl text-left mb-4">★★★★★</div>
              <p className="text-lg  text-left mb-4 text-[#101010] italic font-[plus jakarta sans]">
                {testimonial.review}
              </p>

              {/* Circle Image, Name, and Role */}
              <div className="flex flex-row items-center text-left mt-4 gap-2">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <Image
                    src="/assets/about/testimonial-circle.png"
                    alt="Person"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <span className="text-gray-500 text-sm">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
