'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Testimonial01 from '@/public/images/testimonial-01.jpg'
import TestimonialSign01 from '@/public/images/testimonial-sign-01.svg'
import Testimonial02 from '@/public/images/testimonial-02.jpg'
import TestimonialSign02 from '@/public/images/testimonial-sign-02.svg'

// Import Swiper v12
import Swiper from 'swiper'
import { Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

export default function Section06() {

  useEffect(() => {
    const testimonial = new Swiper('.testimonial-carousel', {
      modules: [Pagination, EffectFade],
      slidesPerView: 1,
      watchSlidesProgress: true,
      effect: 'fade',
      pagination: {
        el: '.testimonial-carousel-pagination',
        clickable: true,
      },
    })
  }, [])

  return (
    <section className="mt-12 md:mt-20 mb-12" data-aos-id-6>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[60px] md:rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="100">
                Revolutionize Your Outlet Operations
                </h2>
                <p className="text-lg text-slate-500 mb-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="200">
                Simplify your restaurant operations and streamline payments with Tacoza's secure compliance card.
                Our advanced solution offers a range of features designed to meet the unique needs of the food industry.
                </p>
                <ul
                  className="inline-flex flex-col text-slate-500 space-y-2.5"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-6]"
                  data-aos-delay="300"
                >
                  <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <circle className="fill-rose-100" cx="10" cy="10" r="10" />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Integrated POS System</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <circle className="fill-rose-100" cx="10" cy="10" r="10" />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>AI powered Sales Insights</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <circle className="fill-rose-100" cx="10" cy="10" r="10" />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Accept Online payments</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <circle className="fill-rose-100" cx="10" cy="10" r="10" />
                      <path
                        className="fill-rose-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Real-time Analytics and Tracking</span>
                  </li>
                </ul>
              </div>

              {/* Carousel */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-12 md:mt-0" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute inset-0 mb-10 -mt-14 -mx-14 bg-slate-100 -z-10" aria-hidden="true" />

                  {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
                  <div className="testimonial-carousel swiper max-w-sm mx-auto sm:max-w-none">
                    <div className="swiper-wrapper">
                      {/* Card #1 */}
                      <div className="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                        <div className="relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-stone-700">
                          <Image src={Testimonial01} className="md:max-w-none max-h-48 object-cover" width={384} height={180} alt="Testiomonial 01" />
                        </div>
                        <div className="grow flex flex-col relative bg-gradient-to-t from-stone-800 to-stone-700 p-6 pt-14">
                          <Image
                            className="hidden absolute bottom-full translate-y-1/2"
                            src={TestimonialSign01}
                            alt="Testiomonial sign 01"
                          />
                          <p className="grow font-medium text-slate-200 mb-4">
                            &quot; Tacoza completely transformed our restaurant operations! The QR code ordering system is a game-changer. Our customers love the ease of ordering, and the AI insights have helped us improve efficiency. Highly recommend! &quot;
                          </p>
                          <div className="font-medium text-sm text-stone-500">
                            <span className="text-slate-200">Rahul Kholi</span> - <span className="text-slate-400">Restaurant Owner</span>
                          </div>
                        </div>
                      </div>

                      {/* Card #2 */}
                      <div className="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                        <div className="relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-stone-700">
                          <Image src={Testimonial02} className="md:max-w-none max-h-48 object-cover" width={384} height={230} alt="Testiomonial 02" />
                        </div>
                        <div className="grow flex flex-col relative bg-gradient-to-t from-stone-800 to-stone-700 p-6 pt-14">
                          <Image
                            className="hidden absolute bottom-full translate-y-1/2"
                            src={TestimonialSign02}
                            alt="Testiomonial sign 02"
                          />
                          <p className="grow font-medium text-slate-200 mb-4">
                            &quot; Managing multiple outlets used to be a headache until we started using Tacoza. Now, I can track orders, inventory, and customer preferences in real-time. It&apos;s the perfect solution for busy restaurant owners.&quot;
                          </p>
                          <div className="font-medium text-sm text-stone-500">
                            <span className="text-slate-200">Neha Patel</span> - <span className="text-slate-400">Founder of ChaiShop Cafe</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
