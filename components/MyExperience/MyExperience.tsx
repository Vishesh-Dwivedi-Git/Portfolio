"use client"
import { briefcaseIconley } from '@/app/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SectionHeading from '../SectionHeading'
import { motion } from "framer-motion"

const myExperience = [
  {
    id: 1,
    logo: '/iit-delhi-logo.png',
    company: "GATICIAN, IIT Delhi",
    link: "https://iitdelhi.ac.in",
    label: "Full-time",
    year: "Apr 2025 - Present",
    title: "Full Stack Intern",
    description: "Built 15+ responsive React.js components serving 500+ daily users. Integrated 8 RESTful APIs and developed analytics dashboard processing 10,000+ data points, reducing report generation time by 60%. Optimized website performance achieving 95+ Lighthouse score.",
    highlights: [
      "15+ React components",
      "60% faster reports",
      "95+ Lighthouse score"
    ]
  },
  {
    id: 2,
    logo: '/gdsc-logo.png',
    company: "Google Developer Student Club",
    link: "https://gdsc.community.dev/indian-institute-of-information-technology-dharwad",
    label: "Part-time",
    year: "Aug 2024 - Present",
    title: "Web3 Blockchain Developer",
    description: "Conducted 5 workshops reaching 750+ attendees with 92% completion rate. Mentored 12 students delivering 4 blockchain projects with combined 15,000+ lines of Solidity code.",
    highlights: [
      "750+ attendees",
      "4 blockchain projects",
      "15k+ Solidity code"
    ]
  }
];

export default function MyExperience() {
    return (
        <section className='relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-12'>
            <div className='flex flex-col gap-8'>
                <SectionHeading 
                    icon={briefcaseIconley} 
                    title='My Experience' 
                    description='Building scalable solutions with cutting-edge technologies across full-stack and blockchain domains.' 
                />
                
                <motion.ul 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className='grid gap-6'
                >
                    {myExperience.map((exp) => (
                        <motion.li
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-gray-3 to-very-dark-gray border border-dark-gray-3 p-6 shadow-lg transition-all hover:shadow-xl hover:border-light-gray-2/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light-gray-4/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full"></div>
                            
                            <div className="relative z-10 flex flex-col gap-6">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                
                                        <div>
                                            <h3 className="text-xl font-bold text-light-gray-4">{exp.company}</h3>
                                            <Link href={exp.link} className="text-light-gray-2 hover:text-primary transition-colors text-sm">
                                                {exp.link.replace('https://', '')}
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-gray-2 border border-dark-gray-3 text-light-gray-2">
                                            {exp.label}
                                        </span>
                                        <span className="text-light-gray-4 font-medium text-sm sm:text-base">
                                            {exp.year}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-bold text-light-gray-3">{exp.title}</h4>
                                    <p className="text-light-gray-2 leading-relaxed">{exp.description}</p>
                                    
                                    {/* Highlights */}
                                    {exp.highlights && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {exp.highlights.map((highlight, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-3 py-1 rounded-full text-xs font-medium bg-dark-gray-4/50 border border-dark-gray-3 text-light-gray-2"
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    )
}