"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { flyIcon , aiMagic,CarbonTrade,DocDash } from '@/app/assets/assets'
import ProjectCard from './ui/ProjectCard'
import Link from 'next/link'



const myShowCases = [
  {
    id: 1,
    image: aiMagic,
    title: "aiMagi.2d",
    github: "github.com/Vishesh-Dwivedi-Git/Animagic.ai",
    Live: "animagic.vercel.app",
    demo:"www.loom.com/share/b5e7e05e132642afb39f546381671d2c?sid=a8d050a2-aa09-4e74-baf4-cc67c595af50",
    type: "AI Animation",
    tech: "Python, Next.js, Manim",
    description: "AI-powered animation generator with 90% user satisfaction and 75% faster rendering."
  },
  {
    id: 2,
    image: CarbonTrade,
    title: "CarbonTrade",
    github: "github.com/Vishesh-Dwivedi-Git/Carbon-Credit",
    Live: "carbon-credit-nine.vercel.app", 
    type: "Blockchain",
    tech: "Solidity, Polygon, Ethers.js",
    description: "Carbon credit marketplace reducing verification time by 80% with gas-efficient contracts."
  },
  {
    id: 3,
    image: DocDash,
    title: "DocDash",
    github: "github.com/Vishesh-Dwivedi-Git/DocDash",
    Live: "doc-dash-phi.vercel.app",
    type: "Document Management", 
    tech: "React, OpenAI, Supabase",
    description: "Document system with vector search reducing query time from 5s to 1.2s."
  }
];

export default function ShowCase() {
    return (
        <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 py-12'>
            <div className='flex flex-col gap-8 w-full'>
                <SectionHeading 
                    title='Featured Projects' 
                    icon={flyIcon} 
                    description='Production-grade applications built with modern technologies' 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {myShowCases.map((item, index) => (
                        <ProjectCard key={item.id} item={item} index={index} />
                    ))}
                </div>
                
                <div className="flex justify-center mt-6">
                    <Link 
                        href="/projects" 
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-gray-3 hover:bg-dark-gray-4 border border-dark-gray-4 hover:border-primary/40 transition-all duration-300 group"
                    >
                        <span className="font-medium text-light-gray-3 group-hover:text-primary">
                            View All Projects
                        </span>
                        <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}