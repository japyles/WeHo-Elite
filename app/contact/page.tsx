"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Get In Touch</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Let's Find Your
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Dream Property
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to explore West Hollywood's most exclusive properties? Our team of luxury real estate experts is
              here to guide you through every step of your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-serif">Schedule Your Consultation</CardTitle>
                  <p className="text-gray-400">
                    Tell us about your requirements and we'll connect you with the perfect property
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-white">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-white">
                          Budget Range
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2"
                        >
                          <option value="">Select Budget</option>
                          <option value="5-10M">$5M - $10M</option>
                          <option value="10-20M">$10M - $20M</option>
                          <option value="20M+">$20M+</option>
                          <option value="custom">Custom Range</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="propertyType" className="text-white">
                        Property Type
                      </Label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2"
                      >
                        <option value="">Select Property Type</option>
                        <option value="estate">Luxury Estate</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="villa">Modern Villa</option>
                        <option value="mansion">Historic Mansion</option>
                        <option value="investment">Investment Property</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Tell us about your ideal property, preferred locations, or any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 font-semibold"
                    >
                      Schedule Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6 text-white">Get In Touch</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Our team is available to assist you with all your luxury real estate needs. Contact us today to begin
                  your journey to finding the perfect West Hollywood property.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid gap-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Phone</h3>
                        <p className="text-gray-400">(310) 555-ELITE</p>
                        <p className="text-gray-400">(310) 555-3548</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Email</h3>
                        <p className="text-gray-400">info@whelite.com</p>
                        <p className="text-gray-400">luxury@whelite.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Office</h3>
                        <p className="text-gray-400">8500 Sunset Boulevard</p>
                        <p className="text-gray-400">West Hollywood, CA 90069</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Office Hours */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>12:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                  <p className="text-amber-400 text-sm mt-4">
                    * Private consultations available by appointment outside regular hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-white">Need Immediate Assistance?</h2>
          <p className="text-gray-400 text-lg mb-8">
            For urgent property inquiries or time-sensitive opportunities, our team is available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 font-semibold px-8"
            >
              Call Emergency Line: (310) 555-9999
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold bg-transparent px-8"
            >
              Text Us: (310) 555-TEXT
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
