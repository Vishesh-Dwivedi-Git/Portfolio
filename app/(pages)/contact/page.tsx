"use client"
import React from "react"
import { emailIcon, questionMarkIcon } from "@/app/assets/assets"
import SectionHeading from "@/components/SectionHeading"
import Button from "@/components/ui/Button"
import { Calendar, Mail } from "lucide-react"
import ContactForm from "@/components/ContactForm/ContactForm"
import FAQ from "@/components/FAQ/FAQ"

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:visheshdwivedi225544@gmail.com"
  }

  const handleScheduleClick = () => {
    window.open("https://calendly.com/visheshdwivedi225544/30min", "_blank")
  }

  return (
    <div className="flex flex-1 flex-col gap-0 h-min overflow-hidden p-0 relative w-full flex-nowrap items-center justify-start">
      <div className="gap-[60px] flex-col max-w-full w-full lg:max-w-[750px] px-5 lg:px-0 lg:w-[80%] flex-nowrap flex items-center flex-none h-min justify-center relative p-[80px_0px]">
        
        {/* Contact Header */}
        <SectionHeading
          icon={emailIcon}
          title="I'd Love to Hear From You"
          description="Connect with Me Today. Let's Create Something Amazing Together!"
        >
          <div className="w-full flex items-start flex-none flex-nowrap gap-5 h-min justify-start p-0 relative">
            <Button 
              onClick={handleEmailClick}
              position='left' 
              className="w-min" 
              icon={<Mail size={18} />} 
              title='Email Me' 
            />
            <Button 
              onClick={handleScheduleClick}
              position='left' 
              className="w-min" 
              icon={<Calendar size={18} />} 
              title='Schedule Call' 
            />
          </div>
        </SectionHeading>

        {/* Contact Form */}
        <div className="w-full">
          <ContactForm />
        </div>

        {/* FAQ Section */}
        <SectionHeading
          icon={questionMarkIcon}
          title="Common Queries"
          description="Get Answers to Common Queries. Your Questions, Addressed Simply."
        />

        <div className="w-full">
          <FAQ />
        </div>

      </div>
    </div>
  )
}