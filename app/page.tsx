"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function HomePage() {
  const router = useRouter()
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient similar to reference image */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-700"></div>

        {/* Floating elements for visual interest */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full opacity-40"
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-3 h-3 bg-amber-500 rounded-full opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full opacity-50"
          animate={{
            x: [0, 5, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Main hero content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Exclusive West Hollywood Properties
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Luxury Beyond
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Expectation
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover exclusive multi-million dollar estates in West Hollywood's most prestigious neighborhoods, where
            luxury meets sophistication.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => router.push("/inventory")}
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 font-semibold px-8 py-3 text-lg"
              >
                View Properties
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
              onClick={() => router.push("/contact")}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 text-lg bg-transparent"
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs mb-2">Scroll to explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">Featured Properties</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Handpicked selection of the most exclusive properties in West Hollywood
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                price: "$29,950,000",
                address: "1535 Blue Jay Way, Hollywood Hills, California",
                beds: 6,
                baths: 7,
                sqft: "6,200",
                image: "/1535BlueJayWay.jpg",
              },
              {
                price: "$68,000,000",
                address: "9330 Flicker Way, Los Angeles9330, California",
                beds: 8,
                baths: 10,
                sqft: "12,000",
                image: "/9330FlickerWay.avif",
              },
              {
                price: "$22,800,000",
                address: "1200 Laurel Way, Beverly Hills, California",
                beds: 7,
                baths: 9,
                sqft: "8,500",
                image: "/1200LaurelWay.webp",
              },
            ].map((property, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:bg-gray-800/70 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={property.image}
                      alt={property.address}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {property.price}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">{property.address}</h3>
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>{property.beds} beds</span>
                      <span>{property.baths} baths</span>
                      <span>{property.sqft} sqft</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/inventory">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold bg-transparent"
                >
                  View All Properties
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">The Elite Difference</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Unparalleled expertise in West Hollywood's luxury real estate market
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Exclusive Access",
                description: "Private listings and off-market properties available only to our elite clientele",
                icon: "🏛️",
              },
              {
                title: "Expert Guidance",
                description: "Decades of experience in luxury real estate with deep market knowledge",
                icon: "👑",
              },
              {
                title: "White-Glove Service",
                description: "Personalized attention and concierge-level service throughout your journey",
                icon: "✨",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-white font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-500">
        <motion.div
          className="max-w-4xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black">Ready to Find Your Dream Home?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Let our experts guide you to the perfect luxury property in West Hollywood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-black text-white hover:bg-gray-900 font-semibold px-8 py-3">
                Schedule Private Viewing
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-3 bg-transparent"
              >
                Contact Our Team
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
