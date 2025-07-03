"use client"
import React from 'react'
import { motion } from "framer-motion"
import CountUp from 'react-countup'

const counterLists = [
  {
    id: 1,
    value: 90,
    title: "User Satisfaction",
    description: "For AI animation projects",
    suffix: "%"
  },
  {
    id: 2,
    value: 75,
    title: "Performance Gain",
    description: "Rendering time reduction with Manim",
    suffix: "%"
  },
  {
    id: 3,
    value: 15,
    title: "Projects Built",
    description: "Across web, AI and blockchain"
  },
  {
    id: 4,
    value: 750,
    title: "Students Mentored",
    description: "Through GDSC workshops"
  },
  {
    id: 5,
    value: 400,
    title: "DSA Problems",
    description: "Solved on coding platforms"
  },
  {
    id: 6,
    value: 3,
    title: "Hackathon Wins",
    description: "Including international competitions"
  }
];

export default function CounterContainer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-none gap-5 flex-nowrap h-min justify-start py-5 relative px-0 overflow-visible items-start border-b border-dashed border-t border-dark-gray-4 w-full">
            <ul className='grid grid-cols-2 sm:flex items-center gap-2 justify-between w-full'>
                {counterLists.map(list => (
                    <li key={list.id} className="w-full group">
                        <div className="flex-1 flex flex-nowrap gap-[4px] h-min p-0 relative items-center overflow-visible justify-center">
                            <div className="flex-none h-auto relative w-auto">
                                <div className="items-start justify-start text-[28px] font-bold text-very-light-gray group-hover:text-light-gray-3 transition-all">
                                    <CountUp 
                                      end={list.value} 
                                      duration={2.5}
                                      suffix={list.suffix || "+"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-shrink-0 flex-col justify-start w-full flex-none relative whitespace-pre-wrap break-words">
                                <p className='text-center text-light-gray-2 font-medium text-[15px] group-hover:text-light-gray-3 transition-all'>
                                    {list.title}
                                </p>
                            </div>
                            <p className="text-light-gray-4 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all text-center max-w-[120px]">
                                {list.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}