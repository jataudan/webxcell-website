import Image from "next/image";

export default function FaqSection() {
  return (
    <div className="relative overflow-hidden bg-white mb-[130px]">
      <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center md:min-h-screen py-10 md:p-[112px] lg:py-20 gap-10">
        <div className="relative flex ">
          <div
            className="absolute w-[62px] h-[325px] left-[-48px] bottom-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/faq/Rectangle.png')",
            }}
          ></div>

          <div className="relative  mt-8 ">
            <Image
              src="/assets/faq/Rectangle-grey.png"
              alt="rectangle"
              width={486}
              height={568.71}
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="relative lg:w-1/2 w-full px-4 text-center lg:text-left">
          {/* Title */}
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] text-sm sm:text-base">
            FAQ{" "}
          </span>
          <div className="mt-4 font-extrabold font-plus-jakarta ">
            <span className="text-[#000] text-[18px] md:text-[50px]">
              Frequently Asked Questions
            </span>{" "}
          </div>

          <div className="mt-12">
            <div className="space-y-4">
              <details className="faq-item group bg-transparent border border-[#EAF3F8] p-4 rounded-lg w-full md:w-[570px] transition-all group-open:bg-[#F3F7FB]">
                <summary className="cursor-pointer font-medium flex gap-4 items-center">
                  <div className="flex items-center gap-2 w-[47px]">
                    <Image
                      src="/assets/faq/icon-plus.png"
                      alt="plus "
                      width={45}
                      height={45}
                      className="group-open:hidden"
                    />
                    <Image
                      src="/assets/faq/icon-minus.png"
                      alt="minus "
                      width={45}
                      height={45}
                      className="group-open:block hidden"
                    />
                  </div>
                  <span className="faq-heading text-sm text-left md:text-base text-[#101010] font-bold font-plus-jakarta ">
                    Do you offer a warranty for your work?
                  </span>
                </summary>
                <p className="mt-2 text-sm text-left md:text-base text-[#101010] group-open:block hidden">
                  Nullam interdum libero vitae pretium aliquam donec nibh purus
                  laoreet in ullamcorper vel malesuada sit amet enim. Nullam
                  interdum libero vitae pretium aliquam donec nibh purus laoreet
                  in ullamcorper vel malesuada sit amet enim.
                </p>
              </details>

              <details className="faq-item group bg-transparent border border-[#EAF3F8] p-4 rounded-lg w-full md:w-[570px] transition-all group-open:bg-[#F3F7FB]">
                <summary className="cursor-pointer font-medium flex gap-4 items-center">
                  <div className="flex items-center gap-2 w-[75px]">
                    <Image
                      src="/assets/faq/icon-plus.png"
                      alt="plus "
                      width={45}
                      height={45}
                      className="group-open:hidden"
                    />
                    <Image
                      src="/assets/faq/icon-minus.png"
                      alt="minus "
                      width={45}
                      height={45}
                      className="group-open:block hidden"
                    />
                  </div>
                  <span className="faq-heading text-sm text-left md:text-base text-[#101010] font-bold font-plus-jakarta">
                    Can you help with User Interface and User Experience design?
                  </span>
                </summary>
                <p className="mt-2 text-sm text-left md:text-base text-[#101010] group-open:block hidden">
                  Nullam interdum libero vitae pretium aliquam donec nibh purus
                  laoreet in ullamcorper vel malesuada sit amet enim. Nullam
                  interdum libero vitae pretium aliquam donec nibh purus laoreet
                  in ullamcorper vel malesuada sit amet enim.
                </p>
              </details>

              <details className="faq-item group bg-transparent border border-[#EAF3F8] p-4 rounded-lg w-full md:w-[570px] transition-all group-open:bg-[#F3F7FB]">
                <summary className="cursor-pointer font-medium flex gap-4 items-center">
                  <div className="flex items-center gap-2 w-[75px]">
                    <Image
                      src="/assets/faq/icon-plus.png"
                      alt="plus "
                      width={45}
                      height={45}
                      className="group-open:hidden"
                    />
                    <Image
                      src="/assets/faq/icon-minus.png"
                      alt="minus "
                      width={45}
                      height={45}
                      className="group-open:block hidden"
                    />
                  </div>
                  <span className="faq-heading text-sm text-left md:text-base text-[#101010] font-bold font-plus-jakarta ">
                    Do you help with creating SEO Strategy for total dominance?{" "}
                  </span>
                </summary>
                <p className="mt-2 text-sm text-left md:text-base text-[#101010] group-open:block hidden">
                  Nullam interdum libero vitae pretium aliquam donec nibh purus
                  laoreet in ullamcorper vel malesuada sit amet enim. Nullam
                  interdum libero vitae pretium aliquam donec nibh purus laoreet
                  in ullamcorper vel malesuada sit amet enim.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
