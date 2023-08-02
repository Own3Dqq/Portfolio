import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiAdobephotoshop, SiTailwindcss, SiRedux, SiMui, SiBootstrap } from 'react-icons/si';
import React, { useState } from 'react';
import { fadeIn } from '../../variants';
//  data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />, <SiRedux />, <SiNextdotjs />],
            },
            {
                title: 'UI/UX Design',
                icons: [<FaFigma />, <SiAdobephotoshop />],
            },
            {
                title: 'Other Tools',
                icons: [<SiTailwindcss />, <SiMui />, <SiBootstrap />],
            },
        ],
    },
    // {
    //     title: 'awards',
    //     info: [
    //         // {
    //         //     title: 'Webby Awards - Honoree',
    //         //     stage: '2011 - 2012',
    //         // },
    //         // {
    //         //     title: 'Adobe Design Achievement Awards - Finalist',
    //         //     stage: '2009 - 2010',
    //         // },
    //     ],
    // },
    {
        title: 'experience',
        info: [
            {
                title: 'Front-End Developer - Freelance',
                stage: '2023',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Certified Web Development - wayup.com Online Course',
                stage: '2019',
            },
            {
                title: 'Computer Engineering Diploma - UA Technical University',
                stage: '2019',
            },
        ],
    },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';

import CountUp from 'react-countup';

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
            <Circles />
            {/* avatar */}
            {/* <motion.div variants={fadeIn('right', 0.2)} className='hidden xl:flex absolute bottom-0 -left-[370px]'>
                <Avatar />
            </motion.div> */}
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                <div className='flex-1 flex flex-col justify-center'>
                    <motion.h2
                        variants={fadeIn('up', 0.5)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2'
                    >
                        Captivating <span className='text-accent'>stories</span> birth magificent designs.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
                    >
                        1 years ago, I began freelancing as a developer. Since then, I`ve done remove work for agencies,
                        consulted for startups, and collaborated on digital products for business and consumer use.
                    </motion.p>
                </div>
                {/* info */}
                <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`
                                ${
                                    index === itemIndex &&
                                    'text-accent after:w-[100%] after:bg-accent after:transition-all after: duration-300'
                                } 
                                cursor-pointer 
                                capitalize 
                                xl:text-lg 
                                relative 
                                after:w-8 
                                after:h-[2px] 
                              after:bg-white 
                                after:absolute 
                                after:-bottom-1 
                                after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items:center text-white/60'
                                >
                                    {/* title */}
                                    <div className='font-light mb-2 md:md-0'>{item.title}</div>
                                    <div className='hidden md:flex'>-</div>
                                    <div>{item.stage}</div>
                                    <div className='flex gap-x-4'>
                                        {/* icons */}
                                        {item.icons.map((icon, index) => {
                                            return (
                                                <div key={index} className='text-2xl flex text-white'>
                                                    {icon}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
