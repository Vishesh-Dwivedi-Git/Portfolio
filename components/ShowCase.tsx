"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { flyIcon, linkIcon, rightArrow } from '@/app/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

const myShowCases = [
  {
    id: 1,
    image: '/animated-project.png', // Add project image
    title: "Animated AI Generator",
    link: "github.com/yourusername/animated", // Replace with your link
    type: "AI + Web Application",
    pages: "15+",
    theme: "Animation",
    description: "Built AI-powered 2D animation generator processing 200+ prompts daily with 90% user satisfaction. Reduced generation time by 75% using segmented rendering with Manim."
  },
  {
    id: 2,
    image: '/carbon-project.png',
    title: "Carbon Credit Platform",
    link: "github.com/yourusername/carbon-trade", // Replace with your link
    type: "Blockchain Application",
    pages: "8+",
    theme: "Ethereum/Polygon",
    description: "Developed blockchain-based carbon credit marketplace reducing verification time by 80%. Deployed gas-efficient smart contracts handling 500+ transactions at 0.001 MATIC avg. gas fees."
  },
  {
    id: 3,
    image: '/docdash-project.png',
    title: "DocDash",
    link: "github.com/yourusername/docdash", // Replace with your link
    type: "Document Management",
    pages: "12+",
    theme: "Vector Search",
    description: "Built document system serving 150+ users with 99.5% retrieval accuracy. Implemented vector-based search reducing query time from 5s to 1.2s using OpenAI embeddings."
  },
  {
    id: 4,
    image: '/anonymous-project.png',
    title: "Anonymous Chat",
    link: "github.com/yourusername/anonymous-chat", // Replace with your link
    type: "Privacy Application",
    pages: "5+",
    theme: "End-to-End Encryption",
    description: "Created privacy-focused chat app supporting 15+ concurrent rooms with 50ms message delivery. Implemented AES-256 encryption using Ethereum key derivation functions."
  }
];

export default function ShowCase({ isMore = true, showData = 2 }: {
    isMore: boolean;
    showData: number;
}) {
    return (
        <section className='flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full'>
            <div className="flex-none h-auto relative w-full">
                <SectionHeading 
                    title='Technical Projects' 
                    icon={flyIcon} 
                    description='Showcasing my innovative solutions combining AI, blockchain, and full-stack development.' 
                />
            </div>

            <div className="flex items-start flex-none flex-wrap gap-[10px] h-min justify-start overflow-visible p-0 relative w-full">
                {myShowCases?.slice(0, showData).map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex-none h-auto relative w-full" 
                        key={item.id}
                    >
                        <div className="bg-very-dark-gray w-full border border-dark-gray-3 rounded-xl flex items-center flex-nowrap flex-col lg:flex-row gap-5 h-min justify-start overflow-visible p-4 lg:p-[8px_24px_8px_8px] relative hover:border-light-gray-3 transition-all duration-300">
                            <div className="lg:flex-1 w-full rounded-xl h-[180px] relative">
                                <figure className='lg:absolute relative h-full w-full inset-0 rounded-xl overflow-hidden'>
                                    <Image 
                                        src={item.image} 
                                        className='w-full block h-full rounded-[inherit] object-cover object-center hover:scale-105 transition-all duration-500' 
                                        height={180} 
                                        width={180} 
                                        alt={item.title} 
                                    />
                                </figure>
                            </div>

                            <div className="flex items-start flex-1 flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-0 relative w-full">
                                <div className="flex items-start flex-1 flex-col flex-nowrap gap-4 h-min justify-start overflow-visible p-0 relative w-full">
                                    <div className="flex items-center flex-none flex-nowrap gap-5 h-min justify-between overflow-visible p-0 relative w-full">
                                        <div className="flex-1 h-auto relative whitespace-pre-wrap break-words justify-start flex-shrink-0 flex-col">
                                            <h3 className='font-bold text-white text-[22px] leading-[1.2em] group-hover:text-light-gray-3 transition-all duration-300'>
                                                {item.title}
                                            </h3>
                                        </div>

                                        <div className="flex-none h-auto relative">
                                            <Link 
                                                href={"https://"+item.link} 
                                                target='_blank' 
                                                rel="noopener noreferrer"
                                                className='bg-almost-black border border-dark-gray-4 flex cursor-pointer items-center flex-nowrap gap-[6px] h-min justify-center overflow-visible relative w-min rounded-lg custom-padding group hover:bg-dark-gray-4 transition-all duration-500'
                                            >
                                                <div className="opacity-70 aspect-square h-auto overflow-visible w-5 relative flex-none group-hover:opacity-100 duration-500 transition-all">
                                                    <figure className='absolute inset-0 w-full h-full rounded-[inherit]'>
                                                        <Image src={linkIcon} alt='Link icon' className='block w-full h-full object-cover object-center rounded-[inherit]' height={20} width={20} />
                                                    </figure>
                                                </div>

                                                <div className="flex-none h-auto relative whitespace-pre w-auto flex flex-col flex-shrink-0 opacity-70 group-hover:opacity-100 transition-all duration-500">
                                                    <p className='text-light-gray-3 font-medium leading-[100%] text-[15px]'>
                                                        {item.link.split('/')[2]} {/* Show only domain */}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-y border-dark-gray-3 flex flex-none gap-3 h-min justify-start overflow-visible px-0 py-3 relative w-full flex-nowrap items-center">
                                        <div className="flex flex-col flex-shrink-0 flex-none h-auto whitespace-pre w-auto relative">
                                            <p className='text-light-gray-2 text-[15px] font-medium'>{item.type}</p>
                                        </div>
                                        <div className="bg-medium-gray rounded-full h-[5px] aspect-square flex-none relative w-[5px]"></div>
                                        <div className="flex flex-col flex-shrink-0 flex-none h-auto whitespace-pre w-auto relative">
                                            <p className='text-light-gray-2 text-[15px] font-medium'>{item.pages}</p>
                                        </div>
                                        <div className="bg-medium-gray rounded-full h-[5px] aspect-square flex-none relative w-[5px]"></div>
                                        <div className="flex flex-col flex-shrink-0 flex-none h-auto whitespace-pre w-auto relative">
                                            <p className='text-light-gray-2 text-[15px] font-medium'>{item.theme}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                                    <p className='text-[15px] font-medium text-light-gray-2'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {isMore && (
                <div className="flex-1 h-auto relative w-full block">
                    <Link 
                        href={`/projects`} 
                        className='bg-almost-black rounded-[10px] border border-dark-gray-4 w-full flex cursor-pointer gap-[6px] p-[14px_18px] flex-nowrap justify-center items-center overflow-visible h-min relative group hover:bg-dark-gray-4 transition-all duration-500'
                    >
                        <div className="flex flex-shrink-0 group-hover:opacity-100 transition-all duration-500 justify-start opacity-70 flex-none h-auto w-auto whitespace-pre relative">
                            <p className='uppercase font-medium font-IBM_Plex_Mono text-[15px] text-very-light-gray'>
                                View All Projects
                            </p>
                        </div>
                        <div className="aspect-square flex-none h-auto relative overflow-hidden w-5 transition-all group-hover:opacity-100 duration-500 opacity-70">
                            <figure className='absolute inset-0 rounded-[inherit]'>
                                <Image src={rightArrow} alt='Right arrow icon' className='block w-full h-full object-cover object-center rounded-[inherit] -rotate-45' height={10} width={10} />
                            </figure>
                        </div>
                    </Link>
                </div>
            )}
        </section>
    )
}