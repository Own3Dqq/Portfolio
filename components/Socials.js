import Link from 'next/link';
import { RiLinkedinFill, RiTelegramFill, RiFacebookFill, RiGithubFill } from 'react-icons/ri';

const Socials = () => {
    return (
        <div className='flex justify-between items-center gap-x-4 text-lg'>
            <a
                href='https://linkedin.com/in/own3dqq'
                target='_blank'
                className='hover:text-accent transition-all duration-300'
            >
                <RiLinkedinFill size={22} />
            </a>
            <a
                href='https://github.com/Own3Dqq'
                target='_blank'
                className='hover:text-accent transition-all duration-300'
            >
                <RiGithubFill size={22} />
            </a>
            <a
                href='https://www.facebook.com/Tsarik.V/'
                target='_blank'
                className='hover:text-accent transition-all duration-300'
            >
                <RiFacebookFill size={22} />
            </a>
            <a href='https://t.me/Own3Dqq' target='_blank' className='hover:text-accent transition-all duration-300'>
                <RiTelegramFill size={22} />
            </a>
        </div>
    );
};

export default Socials;
