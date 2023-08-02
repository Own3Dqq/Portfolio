import Link from 'next/link';
import { RiLinkedinFill, RiTelegramFill, RiFacebookFill, RiGithubFill } from 'react-icons/ri';

const Socials = () => {
    return (
        <div className='flex justify-between items-center gap-x-4 text-lg'>
            <Link href={'www.linkedin.com/in/own3dqq'} className='hover:text-accent transition-all duration-300'>
                <RiLinkedinFill size={22} />
            </Link>
            <Link href={'https://github.com/Own3Dqq'} className='hover:text-accent transition-all duration-300'>
                <RiGithubFill size={22} />
            </Link>
            <Link href={'https://www.facebook.com/Tsarik.V/'} className='hover:text-accent transition-all duration-300'>
                <RiFacebookFill size={22} />
            </Link>
            <Link href={'https://t.me/Own3Dqq'} className='hover:text-accent transition-all duration-300'>
                <RiTelegramFill size={22} />
            </Link>
        </div>
    );
};

export default Socials;
