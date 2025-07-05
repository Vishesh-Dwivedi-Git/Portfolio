"use client"
import { zapIcon } from '@/app/assets/assets'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react'
import { motion } from "framer-motion"

const fullProjects = [
  {
    id: 1,
    title: "aiMagic.2d",
    description: "AI-powered 2D animation generator processing 200+ prompts daily with 90% user satisfaction. Reduced generation time by 75% using segmented rendering with Manim.",
    image: "/projects/aimagic2d.jpg",
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Python", "Flask", "Manim"],
      database: ["Supabase", "MongoDB"],
      infrastructure: ["Vercel", "Docker"]
    },
    links: [
      { type: "github", url: "github.com/Vishesh-Dwivedi-Git/aiMagic.2d" },
      { type: "Live", url: "aimagic2d.vercel.app" },
      { type: "demo", url: "www.loom.com/share/b5e7e05e132642afb39f546381671d2c?sid=a8d050a2-aa09-4e74-baf4-cc67c595af50" }
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
    image: "/projects/carbontrade.jpg",
    techStack: {
      blockchain: ["Solidity", "Ethers.js", "Polygon"],
      frontend: ["Next.js", "React", "Web3.js"],
      backend: ["Node.js", "Express"],
      storage: ["IPFS", "Filecoin"]
    },
    links: [
      { type: "github", url: "github.com/Vishesh-Dwivedi-Git/Carbon-Credit" },
      { type: "Live", url: "carbon-credit-nine.vercel.app" }
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
    image: "/projects/docdash.jpg",
    techStack: {
      frontend: ["React", "Material UI"],
      backend: ["Node.js", "Express"],
      ai: ["OpenAI", "Embeddings"],
      database: ["Supabase", "PostgreSQL"],
      storage: ["Cloudinary"]
    },
    links: [
      { type: "github", url: "github.com/Vishesh-Dwivedi-Git/DocDash" },
      { type: "Live", url: "doc-dash-phi.vercel.app" }
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
    image: "/projects/anonymouschat.jpg",
    techStack: {
      frontend: ["React", "Socket.io"],
      cryptography: ["AES-256", "Ethers.js"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"]
    },
    links: [
      { type: "github", url: "github.com/Vishesh-Dwivedi-Git/AnonymosChat" },
      { type: "Live", url: "anonymos-chat.vercel.app" }
    ],
    metrics: [
      { label: "Chat Rooms", value: "15+" },
      { label: "Latency", value: "50ms" },
      { label: "Encryption", value: "AES-256" }
    ]
  },
  {
    id: 6,
    title: "Solonautics",
    description: "Dominate 𝐒𝐨𝐥𝐚𝐧𝐚 with 𝐒𝐨𝐥𝐚𝐧𝐚𝐮𝐭𝐢𝐜𝐬 – a whale wallet tracking system with a powerful Telegram bot. It delivers razor-sharp insights on smart money, top liquidity pools, and real-time alerts.",
    image: "/projects/solonautics.jpg",
    techStack: {
      frontend: ["Next.js", "TypeScript"],
      bot: ["Telegram Bot API", "Node.js"],
      backend: ["NestJS", "Solscan API"],
      database: ["PostgreSQL", "Redis"],
      messaging: ["Webhooks"]
    },
    links: [
      { type: "github", url: "github.com/Vishesh-Dwivedi-Git/Solanautics" },
      { type: "demo", url: "www.loom.com/share/9f1c5a2fea9240f5a46d0d2b3f05d529?sid=a9b14fe6-c8ca-4c11-95f3-b8cc3d0d92cf" }
    ],
    metrics: [
      { label: "Tracked Wallets", value: "1,000+" },
      { label: "Alert Latency", value: "<100ms" },
      { label: "User Engagement", value: "90%" }
    ],
    features: [
      "🔥 Track smart money & high-value wallets in real time",
      "🚨 Set wild price, volatility, and custom range alerts",
      "💧 Monitor top liquidity pools 24/7 like a beast"
    ]
  }
];

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Small delay to prevent flash of loading state

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 flex justify-center items-center h-[50vh]">
        <div className="animate-pulse text-light-gray-2">Loading projects...</div>
      </div>
    );
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Suspense fallback={
            <div className="col-span-3 text-center text-light-gray-2 py-8">
              Loading projects...
            </div>
          }>
            {fullProjects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: project.id * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-very-dark-gray border border-dark-gray-3 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} background`}
                    fill
                    className="object-cover opacity-20"
                    priority
                  />
                  <div className="absolute inset-0 bg-very-dark-gray/80" />
                </div>

                {/* Content */}
                <div className="relative p-6 flex flex-col h-full">
                  <div className="space-y-5 flex-grow">
                    {/* Project Header */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {project.links.map((link) => (
                          <Link
                            key={`${project.id}-${link.type}`}
                            href={`https://${link.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-dark-gray-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-1.5 text-sm min-w-fit"
                          >
                            <span className="capitalize">{link.type}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-light-gray-2 text-sm leading-relaxed">{project.description}</p>

                    {/* Tech Stack Breakdown */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-light-gray-3">Tech Stack</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(project.techStack).map(([category, technologies]) => (
                          <div key={`${project.id}-${category}`} className="space-y-1">
                            <p className="text-xs text-light-gray-4 capitalize">{category}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {technologies.map((tech: unknown) => (
                                <span 
                                  key={`${project.id}-${tech}`}
                                  className="px-2.5 py-1 text-xs rounded-full bg-dark-gray-4 text-light-gray-2"
                                >
                                  {tech as string}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-4 mt-auto">
                    {project.metrics.map((metric) => (
                      <div 
                        key={`${project.id}-${metric.label}`}
                        className="bg-dark-gray-3 p-2 rounded-lg text-center hover:bg-dark-gray-2 transition-colors"
                      >
                        <p className="text-xs text-light-gray-3">{metric.label}</p>
                        <p className="font-bold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </Suspense>
        </div>
      </section>
    </div>
  )
}