import Image from "next/image";

export default function ServiceTestimonial() {
  return (
    <div className="relative bg-white my-24 mb-[150px]">
      {/* Left Decorative Pattern - Hidden on mobile */}
      <div className="absolute left-0 top-[9px] lg:bottom-[120px] hidden sm:block">
        <Image
          src="/assets/Service/pattern-left.png"
          alt="pattern Image"
          width={149}
          height={250}
        />
      </div>

      {/* Main Content Container */}
      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between py-2 gap-10">
        {/* Left Column - Visual Elements */}
        <div className="relative lg:w-1/2 flex items-center justify-center">
          {/* Commented-out Background Shape (optional) */}
          {/* <div
            className="absolute w-[700.24px] h-[600px] sm:w-[400px] sm:h-[400px] lg:w-[516px] lg:h-[516px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/Service/girl-bg.png')",
            }}
          ></div> */}

          {/* Primary Display Image */}
          <div className="relative z-10 mt-8 sm:mt-16">
            <Image
              src="/assets/Service/bg-new.png"
              alt="Business Woman"
              width={585}
              height={609}
              className="sm:w-[300px] sm:h-[330px] lg:w-[442px] lg:h-[476px]"
            />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left px-4">
          {/* Gradient Subheading */}
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] font-[plus jakarta sans]">
            Testimonials
          </span>

          {/* Main Headline */}
          <div className="headline text-2xl md:text-4xl font-bold mt-4">
            <span className="text-[#000]">Webxcell Digital services </span>
            <br />
            <span className="text-[#000]">solved Our Business Challenges</span>
          </div>

          {/* Star Rating Display */}
          <div className="text-[#FF6700] text-xl text-left my-2">
            ★★★★<span className="text-[#808080]">★</span>
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-600 my-4 text-base font-[plus jakarta sans] md:text-lg leading-relaxed px-2 md:px-0">
            Sed ante elit, fringilla vitae laoreet sit amet, tempus et libero.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
            quam quis turpis lacinia euismod cursus in arcu. Integer a purus
            dolor. Pellentesque finibus ut erat in sagittis. Sed semper
            dignissim
          </p>

          {/* Client Information Section */}
          <div className="flex gap-20">
            {/* Client Profile */}
            <div className="flex items-center gap-4">
              <Image
                src="/assets/Service/cofounder-img.png"
                alt="cofounder icon"
                width={50}
                height={50}
              />

              <div className="flex flex-col items-start">
                <p className="text-sm sm:text-xs font-semibold text-[#17012C]">
                  Alex De Luca
                </p>
                <p className="text-base sm:text-xs text-left text-[#504E4E]">
                  Co-Founder - Danum Filmworks{" "}
                </p>
              </div>
            </div>

            {/* Quotation Marks Icon */}
            <Image
              src="/assets/Service/inverted-commas.png"
              alt="inverted commas"
              width={53.87}
              height={42.82}
            />
          </div>
        </div>
      </section>

      {/* Right Decorative Pattern - Hidden on mobile */}
      <div className="absolute right-0 bottom-[100px] lg:bottom-[120px] hidden sm:block">
        <Image
          src="/assets/Service/pattern-right.png"
          alt="pattern Image"
          width={146}
          height={324}
        />
      </div>
    </div>
  );
}
