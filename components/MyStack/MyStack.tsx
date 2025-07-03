"use client"
import React from 'react'
import SectionHeading from '../SectionHeading'
import { rightArrow, stackIcon } from '@/app/assets/assets'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import solanaLogo from '../../app/assets/solana.png';
import react from '../../app/assets/react-removebg-preview.png'
import Etherium from '../../app/assets/ether-removebg-preview.png'
import web3 from '../../app/assets/WEB3.0-removebg-preview.png'
import mongo from '../../app/assets/mongo-removebg-preview.png';
import docker from "../../app/assets/dock-removebg-preview.png"
import python from "../../app/assets/pyhton-removebg-preview.png"


const myStack = [
  {
    id: 0,
    logo: solanaLogo,
    title: "Solana/Rust",
    description: "Smart contracts, Anchor framework",
    link: "https://solana.com/"
  },
  {
    id: 1,
    logo: react,
    title: "TypeScript",
    description: "React, Next.js, Node.js",
    link: "https://www.typescriptlang.org/"
  },
  {
    id: 2,
    logo: Etherium,
    title: "Solidity",
    description: "Ethereum, Polygon contracts",
    link: "https://soliditylang.org/"
  },
  {
    id: 3,
    logo: web3,
    title: "Web3",
    description: "Ethers.js, Hardhat",
    link: "https://web3js.readthedocs.io/"
  },
  {
    id: 4,
    logo:mongo,
    title: "Databases",
    description: "MongoDB, PostgreSQL",
    link: "https://www.mongodb.com/"
  },
  {
    id: 5,
    logo: docker,
    title: "Devops",
    description: "Docker, GitHub Actions",
    link: "https://www.docker.com/"
  },
  {
    id: 6,
    logo: python,
    title: "Python",
    description: "Flask, AI applications",
    link: "https://www.python.org/"
  }
];

export default function MyStack() {
    return (
        <section className='w-full px-4 sm:px-6 py-12 max-w-7xl mx-auto'>
            <div className='flex flex-col gap-8 w-full'>
                <SectionHeading 
                    icon={stackIcon} 
                    title='My Tech Stack' 
                    description='Mastering cutting-edge technologies to build innovative solutions.' 
                />
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="w-full overflow-hidden"
                >
                    <motion.ul
                        className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                    >
                        {myStack.map((stack, index) => (
                            <TechStackCard 
                                key={stack.id}
                                stack={stack}
                                index={index}
                            />
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    )
}

function TechStackCard({ stack, index }: { stack: any, index: number }) {
    return (
        <motion.li
            key={stack.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "20px" }}
            className="w-full h-full min-w-0"
        >
            <Link 
                href={stack.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full p-4 rounded-lg border border-dark-gray-3 bg-gradient-to-br from-dark-gray-3/80 to-very-dark-gray transition-all duration-300 hover:shadow-md hover:border-primary/40 overflow-hidden"
            >
                <div className="flex items-start gap-3 w-full">
                    {/* Logo */}
                    <div className="flex-shrink-0 p-2 rounded-md border border-primary/30 bg-primary/10">
                        <div className="w-7 h-7 relative">
                            {stack.logo ? (
                                <Image 
                                    src={stack.logo} 
                                    alt={stack.title} 
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            ) : (
                                <div className="w-full h-full bg-dark-gray-3 rounded"></div>
                            )}
                        </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate text-light-gray-1">
                            {stack.title}
                        </h3>
                        <p className="text-light-gray-2 text-sm mt-1 line-clamp-2">
                            {stack.description}
                        </p>
                    </div>
                    
                    {/* Arrow Indicator */}
                    <div className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <Image 
                            src={rightArrow} 
                            alt="arrow" 
                            width={16} 
                            height={16} 
                            className="mt-1"
                        />
                    </div>
                </div>
            </Link>
        </motion.li>
    )
}