"use client"
import { motion } from "framer-motion"
import { FormEvent, useState } from "react"
import { CheckCircle2, XCircle } from "lucide-react"

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [data, setData] = useState({
    name: "Enter your name",
    email: "Yourmail@mail.com",
    message: "Hi , i want to have a meet!"
  })

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      message: ""
    }

    if (!data.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email"
      valid = false
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const subject = `Message from ${data.name}`
      const body = encodeURIComponent(
        `Name: ${data.name}\n\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )
      
      window.location.href = `mailto:visheshdwivedi225544@gmail.com?subject=${subject}&body=${body}`
      
      setSubmitStatus("success")
      setData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
      console.error('Error:', error)
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitStatus(null)
      }, 3000)
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"

      viewport={{ once: true }}
      className="flex flex-col w-full"
    >
      {submitStatus ? (
        <div className="h-full min-h-[350px] w-full relative flex flex-col items-center justify-center bg-dark-gray-2 rounded-xl border border-dark-gray-3 gap-4">
          {submitStatus === "success" ? (
            <>
              <CheckCircle2 size={48} className="text-green-500" />
              <h3 className="text-xl font-bold text-white">Message Sent!</h3>
              <p className="text-light-gray-2 text-center">
                Thank you for contacting me. I'll get back to you soon.
              </p>
            </>
          ) : (
            <>
              <XCircle size={48} className="text-red-500" />
              <h3 className="text-xl font-bold text-white">Error Sending Message</h3>
              <p className="text-light-gray-2 text-center">
                Please try again or contact me directly at visheshdwivedi225544@gmail.com
              </p>
            </>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <input
                className={`w-full p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2 border ${
                  errors.name ? "border-red-500" : "border-dark-gray-3"
                }`}
                name="name"
                placeholder="Name"
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="space-y-1">
              <input
                className={`w-full p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2 border ${
                  errors.email ? "border-red-500" : "border-dark-gray-3"
                }`}
                name="email"
                placeholder="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          
          {/* Textarea */}
          <div className="space-y-1">
            <textarea
              className={`w-full p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2 min-h-56 max-h-96 border ${
                errors.message ? "border-red-500" : "border-dark-gray-3"
              }`}
              name="message"
              placeholder="Message"
              rows={8}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary border border-slate-300 text-white p-4 rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </motion.div>
  )
}