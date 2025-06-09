import React from 'react';

const WeFix = () => {
    return (
        <div>
            <div className='text-center'>
            <div className="flex items-center  gap-3 mt-12 md:mt-20 lg:mt-28 justify-center ">
            <div className="w-10 h-[2px] bg-gray-400"></div>
            <span className=" tracking-widest font-semibold text-gray-700">
            ISSUES WE REPAIR
            </span>
          </div>
          <h1 className= 'text-4xl md:text-5xl font-bold mt-4 text-gray-700'>What Do We Fix</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 lg:gap-10  2xl:gap-16 mt-5 md:mt-10 px-4 md:px-16 lg:px-10 2xl:px-28'>
              {/* card 1 */}
              <div>
                <img src="screen.webp" alt="" />
                <h1 className=' text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 lg:mt-5 mb-3 lg:mb-5'>Screen Repair</h1>
                <hr />
                <p className='text-gray-400 mt-3 lg:mt-5'>Replacing the display screen of an electronic device, such as a smartphone, tablet, laptop, or television.</p>
              </div>
              {/* card 2 */}
              <div>
                <img src="battery.webp" alt="" />
                <h1 className=' text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 lg:mt-5 mb-3 lg:mb-5'>Battery Replacement</h1>
                <hr />
                <p className='text-gray-400 mt-3 lg:mt-5'>Over time, batteries can degrade, leading to decreased performance, reduced battery life, even complete failure.</p>
              </div>
              {/* card 3 */}
              <div>
                <img src="water.webp" alt="" />
                <h1 className=' text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 lg:mt-5 mb-3 lg:mb-5'>Water Damage Repair</h1>
                <hr />
                <p className='text-gray-400 mt-3 lg:mt-5'>It can be particularly detrimental to electronic components, corrosion, short circuits, and other issues.</p>
              </div>
              {/* card 4 */}
              <div>
                <img src="data.webp" alt="" />
                <h1 className=' text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 lg:mt-5 mb-3 lg:mb-5'>Data Recovery</h1>
                <hr />
                <p className='text-gray-400 mt-3 lg:mt-5'>Retrieving or restoring inaccessible, lost, corrupted, or accidentally deleted data from storage.</p>
              </div>
              {/* card 5 */}
              <div>
                <img src="charge.webp" alt="" />
                <h1 className=' text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 lg:mt-5 mb-3 lg:mb-5'>Charging Port Repair
</h1>
                <hr />
                <p className='text-gray-400 mt-3 lg:mt-5'>Over time, charging ports can become damaged or wear out due to frequent use, which can lead to issues.</p>
              </div>
              {/* card 6 */}
              <div>
                <img src="keyboard.webp" alt="" />
                <h1 className=' text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 lg:mt-5 mb-3 lg:mb-5'>Keyboard Replacement</h1>
                <hr />
                <p className='text-gray-400 mt-3 lg:mt-5'>Removing a damaged or malfunctioning keyboard from an electronic device and installing a new one.</p>
              </div>
              {/* card 7 */}
              <div>
                <img src="ram.webp" alt="" />
                <h1 className=' text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 lg:mt-5 mb-3 lg:mb-5'>RAM Upgrade</h1>
                <hr />
                <p className='text-gray-400 mt-3 lg:mt-5'>Increasing the amount of memory modules, providing more space for the system to quickly access data.</p>
              </div>
              {/* card 8 */}
              <div>
                <img src="screen.webp" alt="" />
                <h1 className=' text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 lg:mt-5 mb-3 lg:mb-5'>Virus/Malware Removal</h1>
                <hr />
                <p className='text-gray-400 mt-3 lg:mt-5'>Viruses, malware, and other types of malicious software can compromise the security and functionality of a system.</p>
              </div>
             
            </div>
            
        </div>
    );
};

export default WeFix;