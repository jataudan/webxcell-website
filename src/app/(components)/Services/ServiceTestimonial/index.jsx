import Image from "next/image";

export default function ServiceTestimonial() {
  return (
    <div className="relative bg-white my-24 mb-[150px]">
      <div className="absolute left-0 top-[9px] lg:bottom-[120px] hidden sm:block">
        <Image
          src="/assets/Service/pattern-left.png"
          alt="pattern Image"
          width={149}
          height={250}
        />
      </div>
      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between py-2 gap-10">
        {/* Left Side - Image */}
        <div className="relative lg:w-1/2 flex items-center justify-center">
          {/* Background Shape */}
          <Image
            src="/assets/Service/testimonial.png"
            alt="Business Woman"
            width={585}
            height={609}
            className="sm:w-[400px] sm:h-[400px] lg:w-[516px] lg:h-[516px]"
          />
        </div>

        {/* Right Side - Content */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left px-4">
          <span className="font-bold uppercase  text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] font-[plus jakarta sans]">
            Testimonials
          </span>

          <div className="headline text-2xl md:text-4xl font-bold mt-4">
            <span className="text-[#000]">
              Webxcell Digital Transformed Our Business
            </span>
            <br />
            <span className="text-[#000]">solved Our Business Challenges</span>
          </div>
          <div className="text-[#FF6700] text-xl text-left my-2">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 my-4 text-base font-[plus jakarta sans] md:text-lg leading-relaxed px-2 md:px-0">
            Partnering with Webxcell Digital was a game-changer for our
            business. Their expertise in digital marketing and automation helped
            us streamline our operations, boost engagement, and achieve
            remarkable growth. From strategy to execution, their team provided
            tailored solutions that addressed our challenges effectively. Highly
            recommended!
          </p>
          <div className="flex gap-20">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/Service/testimonial.png"
                alt="cofounder icon"
                width={50}
                height={50}
              />

              <div className="flex flex-col items-start">
                <p className="text-sm sm:text-xs  font-semibold text-[#17012C]">
                  Alex De Luca
                </p>
                <p className="text-base sm:text-xs text-left text-[#504E4E]">
                  Co-Founder - Danum Filmworks{" "}
                </p>
              </div>
            </div>
            <Image
              src="/assets/Service/inverted-commas.png"
              alt="inverted commas"
              width={53.87}
              height={42.82}
            />
          </div>
        </div>
      </section>

      {/* Decorative Pattern right Image - Hidden on Mobile */}
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
