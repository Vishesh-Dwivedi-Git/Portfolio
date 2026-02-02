"use client"
import { motion } from "framer-motion"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { linkIcon } from '@/app/assets/assets'

type ProjectItem = {
    image: StaticImageData;
    title: string;
    type: string;
    tech: string;
    description: string;
    github: string;
    demo?: string;
    Live: string;
};

export default function ProjectCard({ item, index }: { item: ProjectItem, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full h-full"
        >
            <div className="group h-full flex flex-col bg-very-dark-gray border border-dark-gray-3 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                {/* Image with hover effect */}
                <div className="h-48 relative overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                    </h3>

                    <div className="flex gap-2 mb-3">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                            {item.type}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-dark-gray-4 text-light-gray-3">
                            {item.tech.split(', ')[0]} {/* Show first tech */}
                        </span>
                    </div>

                    <p className="text-light-gray-2 mb-5 line-clamp-2">
                        {item.description}
                    </p>

                    {/* Links - GitHub and Demo */}
                    <div className="mt-auto flex flex-wrap gap-2">
                        <Link
                            href={item.github.startsWith('http') ? item.github : `https://${item.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-dark-gray-4 hover:bg-primary/10 border border-dark-gray-3 hover:border-primary/30 transition-all duration-300"
                        >
                            {/* <Image 
                                src={githubIcon} 
                                alt="GitHub" 
                                width={16} 
                                height={16} 
                                className="opacity-80"
                            /> */}
                            <span>Code</span>
                        </Link>

                        <Link
                            href={item.Live.startsWith('http') ? item.Live : `https://${item.Live}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-dark-gray-4 hover:bg-primary/10 border border-dark-gray-3 hover:border-primary/30 transition-all duration-300"
                        >
                            <Image
                                src={linkIcon}
                                alt="Live Demo"
                                width={16}
                                height={16}
                                className="opacity-80"
                            />
                            <span>Live</span>
                        </Link>
                        {
                            item.demo && <Link
                                href={item.demo.startsWith('http') ? item.demo : `https://${item.demo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-dark-gray-4 hover:bg-primary/10 border border-dark-gray-3 hover:border-primary/30 transition-all duration-300"
                            >
                                <Image
                                    src={linkIcon}
                                    alt="Live Demo"
                                    width={16}
                                    height={16}
                                    className="opacity-80"
                                />
                                <span>Demo</span>
                            </Link>

                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}