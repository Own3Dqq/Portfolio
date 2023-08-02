// data
const workSlides = {
    slides: [
        {
            images: [
                {
                    title: 'Landing Page - Ben Aiden Professional Web Design',
                    path: '/thumb1.jpg',
                    url: '/',
                },
                {
                    title: 'Landing Page - UI/UX Design Master',
                    path: '/thumb2.jpg',
                    url: '/',
                },
                {
                    title: 'MultiPage Site - Crypto Invest Platform',
                    path: '/thumb3.jpg',
                    url: '/',
                },
                {
                    title: 'MultiPage Site - Music Accessories',
                    path: '/thumb4.jpg',
                    url: '/',
                },
            ],
        },
        // {
        //     images: [
        //         {
        //             title: 'title',
        //             path: '/thumb4.jpg',
        //             url: '/',
        //         },
        //         {
        //             title: 'title',
        //             path: '/thumb1.jpg',
        //             url: '/',
        //         },
        //         {
        //             title: 'title',
        //             path: '/thumb2.jpg',
        //             url: '/',
        //         },
        //         {
        //             title: 'title',
        //             path: '/thumb3.jpg',
        //             url: '/',
        //         },
        //     ],
        // },
    ],
};

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {} from 'react-icons/bs';

const WorkSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className='h-[280px] sm:h-[480px]'
        >
            {workSlides.slides.map((slide, sliderIndex) => {
                return (
                    <SwiperSlide key={sliderIndex}>
                        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                            {slide.images.map((image, index) => {
                                return (
                                    <Link key={index} href={image.url}>
                                        <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                                            <div className='flex items-center justify-center relative overflow-hidden cursor-pointer'>
                                                <Image src={image.path} width={500} height={300} alt='' className='' />
                                                {/* overlay */}
                                                <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                                                    <div className='flex justify-center items-center w-full h-full p-12 text-center'>
                                                        {image.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default WorkSlider;
