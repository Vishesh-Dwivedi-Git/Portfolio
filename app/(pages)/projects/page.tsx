"use client"
import { zapIcon } from '@/app/assets/assets'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import ScheduleButton from '@/components/ui/ScheduleButton'

const fullProjects = [
  {
    id: 1,
    title: "Animagic AI",
    description: "AI-powered 2D animation generator processing 200+ prompts daily with 90% user satisfaction. Reduced generation time by 75% using segmented rendering with Manim.",
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Python", "Flask", "Manim"],
      database: ["Supabase", "MongoDB"],
      infrastructure: ["Vercel", "Docker"]
    },
    links: [
      { type: "github", url: "github.com/yourusername/animagic" },
      { type: "demo", url: "animagic.vercel.app" }
    ],
    metrics: [
      { label: "Daily Users", value: "200+" },
      { label: "Render Time", value: "2min" },
      { label: "Satisfaction", value: "90%" }
    ]
  },
  {
    id: 2,
    title: "CarbonTrade",
    description: "Blockchain-based carbon credit marketplace reducing verification time by 80% with gas-efficient smart contracts on Polygon.",
    techStack: {
      blockchain: ["Solidity", "Ethers.js", "Polygon"],
      frontend: ["Next.js", "React", "Web3.js"],
      backend: ["Node.js", "Express"],
      storage: ["IPFS", "Filecoin"]
    },
    links: [
      { type: "github", url: "github.com/yourusername/carbon-trade" },
      { type: "demo", url: "carbon-trade.xyz" }
    ],
    metrics: [
      { label: "Transactions", value: "500+" },
      { label: "Gas Fees", value: "0.001 MATIC" },
      { label: "Verification", value: "80% faster" }
    ]
  },
  {
    id: 3,
    title: "DocDash",
    description: "Document management system with vector-based search using OpenAI embeddings, reducing query time from 5s to 1.2s.",
    techStack: {
      frontend: ["React", "Material UI"],
      backend: ["Node.js", "Express"],
      ai: ["OpenAI", "Embeddings"],
      database: ["Supabase", "PostgreSQL"],
      storage: ["Cloudinary"]
    },
    links: [
      { type: "github", url: "github.com/yourusername/docdash" },
      { type: "demo", url: "docdash-app.vercel.app" }
    ],
    metrics: [
      { label: "Users", value: "150+" },
      { label: "Query Time", value: "1.2s" },
      { label: "Accuracy", value: "99.5%" }
    ]
  },
  {
    id: 4,
    title: "Anonymous Chat",
    description: "Privacy-focused chat application with end-to-end encryption using Ethereum key derivation and AES-256.",
    techStack: {
      frontend: ["React", "Socket.io"],
      cryptography: ["AES-256", "Ethers.js"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"]
    },
    links: [
      { type: "github", url: "github.com/yourusername/anonymous-chat" }
    ],
    metrics: [
      { label: "Chat Rooms", value: "15+" },
      { label: "Latency", value: "50ms" },
      { label: "Encryption", value: "AES-256" }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header Section */}
      <section className="space-y-8">
        <SectionHeading 
          icon={zapIcon} 
          title="My Services" 
          description="Full-stack development solutions with expertise in AI, blockchain, and web technologies" 
        />
      </section>

      {/* Projects Showcase */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white px-2">Project Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fullProjects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-very-dark-gray border border-dark-gray-3 rounded-xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="space-y-5">
                {/* Project Header */}
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.links.map((link) => (
                      <Link
                        key={`${project.id}-${link.type}`}
                        href={`https://${link.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-dark-gray-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-1.5 text-sm"
                      >
                        <Image 
                          src={`/${link.type}-icon.svg`} 
                          alt={link.type} 
                          width={14} 
                          height={14}
                          className="opacity-80"
                        />
                        <span className="capitalize">{link.type}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-light-gray-2">{project.description}</p>

                {/* Tech Stack Breakdown */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-light-gray-3">Tech Stack</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(project.techStack).map(([category, technologies]) => (
                      <div key={`${project.id}-${category}`} className="space-y-1">
                        <p className="text-xs text-light-gray-4 capitalize">{category}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {technologies.map((tech: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined) => (
                            <span 
                              key={`${project.id}-${tech}`}
                              className="px-2.5 py-1 text-xs rounded-full bg-dark-gray-4 text-light-gray-2"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {project.metrics.map((metric) => (
                    <div 
                      key={`${project.id}-${metric.label}`}
                      className="bg-dark-gray-3 p-2 rounded-lg text-center"
                    >
                      <p className="text-xs text-light-gray-3">{metric.label}</p>
                      <p className="font-bold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="flex justify-center">
        <ScheduleButton />
      </section> */}
    </div>
  )
}