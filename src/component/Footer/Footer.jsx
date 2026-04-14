import Image from 'next/image';
import React from 'react';
import instagram from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'
import twiter from '../../../assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#244d3f] text-white'>
            <div className='w-11/12 mx-auto mb-8'>
                <div className='text-center space-y-6 mb-6 mt-20'>
                    <h2 className='text-5xl font-bold'>KeenKeeper</h2>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>

                <div className='flex flex-col items-center space-y-4'>
                    <h3>Social Links</h3>
                    <div className='flex space-x-4'>
                        <Image
                            src={instagram}
                            alt='instagram'
                            width={25}
                            height={25}
                        />
                        <Image
                            src={facebook}
                            alt='facebook'
                            width={25}
                            height={25}
                        />
                        <Image
                            src={twiter}
                            alt='twiter'
                            width={25}
                            height={25}
                        />
                    </div>
                </div>

                <div className='divider'></div>

                <div className='flex justify-between items-center'>
                    <p className=''>© 2026 KeenKeeper. All rights reserved.</p>
                    <div>
                        <ul className='flex space-x-4'>
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;