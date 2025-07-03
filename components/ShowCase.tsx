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
    image: '/animated-project.png',
    title: "Animated AI Generator",
    link: "github.com/yourusername/animated",
    type: "AI + Web Application",
    pages: "15+",
    theme: "Animation",
    description: "Built AI-powered 2D animation generator processing 200+ prompts daily with 90% user satisfaction. Reduced generation time by 75% using segmented rendering with Manim."
  },
  // ... other showcase items
];

export default function ShowCase({ isMore = true, showData = 2 }: {
    isMore: boolean;
    showData: number;
}) {
    return (
        <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 py-12'>
            <div className='flex flex-col gap-8 w-full'>
                <SectionHeading 
                    title='Technical Projects' 
                    icon={flyIcon} 
                    description='Showcasing my innovative solutions combining AI, blockchain, and full-stack development.' 
                />

                <div className="grid grid-cols-1 gap-6 w-full">
                    {myShowCases.slice(0, showData).map((item, index) => (
                        <ProjectCard key={item.id} item={item} index={index} />
                    ))}
                </div>
                
                {isMore && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <Link 
                            href="/projects" 
                            className="group flex items-center justify-center gap-2 w-full max-w-xs mx-auto px-6 py-3 rounded-lg border border-gray-700 hover:border-primary transition-all duration-300"
                        >
                            <span className="font-medium text-light-gray-3 group-hover:text-primary transition-colors duration-300">
                                View All Projects
                            </span>
                            <Image 
                                src={rightArrow} 
                                alt="Right arrow" 
                                width={16} 
                                height={16} 
                                className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                            />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

function ProjectCard({ item, index }: { item: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full"
        >
            <div className="group bg-gradient-to-br from-dark-gray-3 to-very-dark-gray border border-dark-gray-3 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-1/3 h-48 lg:h-auto relative overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 p-6 flex flex-col">
                        <div className="flex justify-between items-start gap-4 mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                {item.title}
                            </h3>
                            <Link 
                                href={"https://" + item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-dark-gray-4 hover:bg-primary/10 border border-dark-gray-3 hover:border-primary/30 transition-all duration-300"
                            >
                                <span className="text-sm text-light-gray-3">{item.link.split('/')[2]}</span>
                                <Image 
                                    src={linkIcon} 
                                    alt="Link" 
                                    width={14} 
                                    height={14} 
                                    className="opacity-70"
                                />
                            </Link>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                {item.type}
                            </span>
                            <span className="text-light-gray-2 text-sm">•</span>
                            <span className="text-light-gray-2 text-sm">{item.pages} pages</span>
                            <span className="text-light-gray-2 text-sm">•</span>
                            <span className="text-light-gray-2 text-sm">{item.theme}</span>
                        </div>

                        {/* Description */}
                        <p className="text-light-gray-2 mb-4 line-clamp-3">
                            {item.description}
                        </p>

                        {/* View Project */}
                        <div className="mt-auto">
                            <Link 
                                href={"https://" + item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
                            >
                                View Project
                                <Image 
                                    src={rightArrow} 
                                    alt="Arrow" 
                                    width={14} 
                                    height={14} 
                                    className="opacity-80"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}