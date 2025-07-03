"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { multiplyIcon } from "@/app/assets/assets"

const faqData = [
  {
    question: "What blockchain technologies are you experienced with?",
    answer: "I've developed on Ethereum, Polygon, and Solana blockchains. My carbon credit trading platform reduced verification time by 80% and handles 500+ transactions with 0.001 MATIC avg. gas fees. I've also mentored students in blockchain development through GDSC."
  },
  {
    question: "Can you share your hackathon achievements?",
    answer: "I won the Solana Redacted Hackathon (International) among 10,000+ participants, securing $600 USDC prize. Also won HackCrack National Level Hackathon among 1000+ participants, ranking in top 0.5%. Selected for AccelerateAI Hackathon 2025 as Top 9 among 100K applicants."
  },
  {
    question: "What's your experience with AI projects?",
    answer: "Built Animated - an AI-powered 2D animation generator processing 200+ prompts daily with 90% user satisfaction. Implemented segmented rendering with Manim reducing generation time by 75% (8min to 2min per animation). Deployed scalable architecture supporting 50+ concurrent users."
  },
  {
    question: "What full-stack projects have you worked on?",
    answer: "Developed DocDash - a document management system serving 150+ users with 99.5% retrieval accuracy. Implemented vector-based search using OpenAI embeddings, reducing query time from 5s to 1.2s. Built 15+ React components at GATICIAN, IIT Delhi serving 500+ daily users."
  },
  {
    question: "How strong are your competitive programming skills?",
    answer: "Ranked 1200 among 24K participants in a competitive programming contest. Solved 400+ DSA problems across LeetCode, CodeChef, GeeksForGeeks. Achieved top 3%ile in JEE 2023, demonstrating strong problem-solving abilities."
  },
  {
    question: "What's your educational background?",
    answer: "Pursuing B.Tech in Computer Science with Minor in Gen-AI from IIIT Dharwad (CGPA: 8.7/10.0). Previously scored 95% in CBSE Class XII at JB Academy. My education combines strong fundamentals with cutting-edge AI specialization."
  }
];

const FAQ = () => {
    const [openIndices, setOpenIndices] = useState<number[]>([])

    const handleToggle = (index: number) => {
        setOpenIndices((prevIndices) =>
            prevIndices.includes(index) ? prevIndices.filter((i) => i !== index) : [...prevIndices, index],
        )
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 transition-all duration-500 lg:grid-cols-2 gap-[20px] w-full">
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex w-full select-none`}
                    >
                        <div className="w-full">
                            <motion.div
                                onClick={() => handleToggle(index)}
                                className="cursor-pointer bg-very-dark-gray hover:bg-[#fff]/[0.03] duration-300 text-white p-6 border border-dark-gray-3 rounded-[14px] transition-all"
                            >
                                <div className="flex items-center gap-2 justify-between">
                                    <div className="flex flex-col">
                                        <motion.p
                                            animate={{
                                                color: openIndices.includes(index) ? "rgb(230, 230, 230)" : "rgb(153, 153, 153)",
                                            }}
                                            className="text-[17px] font-medium"
                                        >
                                            {faq.question}
                                        </motion.p>
                                    </div>
                                    <motion.div
                                        className="bg-dark-gray-2 flex-shrink-0 border border-dark-gray-4 rounded-[10px] flex items-center justify-center p-2"
                                        animate={{ rotate: openIndices.includes(index) ? 45 : 0 }}
                                    >
                                        <Image
                                            src={multiplyIcon}
                                            alt="toggle icon"
                                            className="transition-opacity duration-500"
                                            style={{
                                                opacity: openIndices.includes(index) ? 1 : 0.6,
                                            }}
                                            width={20}
                                            height={20}
                                        />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndices.includes(index) && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="bg-dark-gray-3 w-full h-[1px] my-4"
                                            />
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-light-gray-2 font-medium text-[16px]"
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default FAQ;