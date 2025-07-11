import React from 'react';

const Faq = () => {
    return (
        <div className=' md:p-1 lg:p-7 xl:p-10 mt-16 w-full  mx-auto'>
            
      <div className="flex flex-col-reverse justify-center items-center lg:flex-row gap-6 lg:gap-7 xl:gap-10">
        <div   className="overflow-hidden w-full lg:w-1/2 xl:pl-20 2xl:pl-36 px-2">
        <div data-aos="fade-up-left" data-aos-duration="1000">
        <div data-aos="fade-down" data-aos-duration="3000" >
        <div className="flex items-center  gap-3  md:pl-5 ">
            <div className="w-10 h-[2px] bg-gray-400"></div>
            <span className=" tracking-widest font-semibold text-gray-700 dark:text-white">
            QUESTIONS
            </span>
          </div>
          <h1 className= 'dark:text-white text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold md:mt-2 text-gray-700 mb-5 md:mb-8 lg:mb-5 md:pl-5 '>Frequently asked questions</h1>
        </div>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
              <input type="radio" name="my-accordion-4" defaultChecked/>
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-[#4d6c77]">
              What types of gadgets do you service?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                We service a wide range of gadgets including smartphones, tablets, laptops, desktops, smartwatches, and gaming consoles.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-[#4d6c77]">
              What brands do you repair?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                We repair gadgets from major brands such as Apple, Samsung, Sony, Microsoft, Dell, HP, and many others.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-[#4d6c77]">
              Do you offer a warranty on your repairs?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                Yes, we offer a 90-day warranty on all our repairs. This covers any issues related to the repair work done by us.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-[#4d6c77]">
              How do I get my gadget repaired?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                You can either visit our store, schedule a pick-up service, or mail in your gadget for repair. Please contact us to arrange the most convenient option for you.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-[#4d6c77]">
              Do I need to back up my data before repair?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                Yes, we recommend that you back up all your data before bringing in your device for repair. While we take utmost care, we cannot guarantee the safety of your data during the repair process.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-[#4d6c77]">
              How long will the repair take?
              </div>
              <div className="collapse-content text-gray-500 dark:text-white">
                <p>
                The repair time varies depending on the type of device and the nature of the issue. Simple repairs can often be done within a few hours, while more complex issues may take a few days.

                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div  className=" w-full lg:w-1/2 ">
          <div data-aos="fade-down-right" data-aos-duration="1000"  className=" ">
            
            <img className='h-[350px] md:h-[450px] lg:h-[620px] md:rounded-ss-4xl' src="faq.webp" alt="" />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Faq;