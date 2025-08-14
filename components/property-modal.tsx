"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Bed, Bath, Square, Calendar, Phone, Mail } from "lucide-react"
import { useRouter } from "next/navigation"

interface Property {
  id: number
  price: string
  address: string
  beds: number
  baths: number
  sqft: string
  lot: string
  type: string
  status: string
  image: string
  images: string[]
  description: string
  features: string[]
  yearBuilt: number
  agent: {
    name: string
    image: string
    phone: string
    email: string
  }
}

interface PropertyModalProps {
  property: Property | null
  isOpen: boolean
  onClose: () => void
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  const router = useRouter()
  if (!property) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Image Gallery */}
              <div className="relative h-96">
                <motion.img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <motion.div
                    className="bg-amber-500 text-black px-4 py-2 rounded-full text-lg font-bold mb-2"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {property.price}
                  </motion.div>
                  <motion.h2
                    className="text-white text-2xl font-bold"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {property.address}
                  </motion.h2>
                  <motion.p
                    className="text-amber-400 text-lg"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {property.type}
                  </motion.p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    {/* Property Stats */}
                    <motion.div
                      className="grid grid-cols-4 gap-6 mb-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-center">
                        <Bed className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                        <div className="text-white text-xl font-bold">{property.beds}</div>
                        <div className="text-gray-400 text-sm">Bedrooms</div>
                      </div>
                      <div className="text-center">
                        <Bath className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                        <div className="text-white text-xl font-bold">{property.baths}</div>
                        <div className="text-gray-400 text-sm">Bathrooms</div>
                      </div>
                      <div className="text-center">
                        <Square className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                        <div className="text-white text-xl font-bold">{property.sqft}</div>
                        <div className="text-gray-400 text-sm">Sq Ft</div>
                      </div>
                      <div className="text-center">
                        <Calendar className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                        <div className="text-white text-xl font-bold">{property.yearBuilt}</div>
                        <div className="text-gray-400 text-sm">Year Built</div>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      className="mb-8"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-white text-xl font-semibold mb-4">Property Description</h3>
                      <p className="text-gray-300 leading-relaxed">{property.description}</p>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-white text-xl font-semibold mb-4">Premium Features</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {property.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center text-gray-300"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Agent Card */}
                  <div className="lg:col-span-1">
                    <motion.div
                      className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 sticky top-4"
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-white text-lg font-semibold mb-4">Listing Agent</h3>
                      <div className="text-center mb-6">
                        <motion.img
                          src={property.agent.image}
                          alt={property.agent.name}
                          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <h4 className="text-white font-semibold">{property.agent.name}</h4>
                        <p className="text-amber-400 text-sm">Luxury Real Estate Specialist</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Phone className="w-4 h-4 mr-3 text-amber-400" />
                          <span className="text-sm">{property.agent.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Mail className="w-4 h-4 mr-3 text-amber-400" />
                          <span className="text-sm">{property.agent.email}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button onClick={() => router.push("/contact")} className="w-full bg-amber-500 text-black hover:bg-amber-600 font-semibold">
                          Schedule Viewing
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
                        >
                          Contact Agent
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
