import Image from 'next/image'
import LogosIllustration from '@/public/images/logos-illustration.svg'
import Logos from '@/public/images/logos.png'

export default function Section05() {
  return (
    <section>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[60px] md:rounded-tr-[100px] bg-gradient-to-tr from-rose-600 to-rose-500 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2 className="h2 text-white mb-4">Skip the queues and order super Fast.</h2>
                <p className="text-lg text-rose-200 mb-8">
                Say goodbye to long wait times and enjoy a hassle-free dining experience. Order your favorite food in seconds and enjoy it at your table.</p>
              </div>

              {/* Image */}
              <div className="flex justify-center mb-6" data-aos="fade-up" data-aos-delay="100">
                <div className="relative">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={LogosIllustration}
                    alt="Logos illustration"
                    aria-hidden="true"
                  />
                  <Image src={Logos} width={720} height={283} alt="Logos" />
                </div>
              </div>

              {/* Items */}
              <div
                className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* 1st item */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-rose-400 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-yellow-600 bg-yellow-200 h-11 w-11 rounded-full">1</div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Scan QR on Table</h4>
                  <p className="text-rose-200">
                  Scan the QR code displayed on your table and experience the future of dining.
                  </p>
                </div>

                {/* 2nd item */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-rose-400 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-yellow-600 bg-yellow-200 h-11 w-11 rounded-full">2</div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Choose your food</h4>
                  <p className="text-rose-200">
                  Browse our menu and select the items you'd like to order. Customize your meal to your preferences.                  </p>
                </div>

                {/* 3rd item */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-rose-400 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-yellow-600 bg-yellow-200 h-11 w-11 rounded-full">3</div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Pay and Track</h4>
                  <p className="text-rose-200">
                  Proceed to checkout and pay securely using your preferred method. Track the status of your order in real-time.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}