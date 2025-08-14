"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { motion } from "framer-motion"
import PropertyModal from "@/components/property-modal"

export default function InventoryPage() {
  const [filters, setFilters] = useState({
    priceRange: "",
    propertyType: "",
    bedrooms: "",
    location: "",
  })

  const [selectedProperty, setSelectedProperty] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [displayedCount, setDisplayedCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  }

  const allProperties = [
    {
      id: 1,
      price: "$50,000,000",
      address: "8899 Beverly Boulevard, West Hollywood, California",
      beds: 4,
      baths: 5,
      sqft: "4,500",
      lot: "Penthouse",
      type: "Luxury Penthouse",
      status: "Available",
      image: "/8899BeverlyBlvd.webp",
      images: [
        "/8899BeverlyBlvd_Backyard.jpg",
        "/8899BeverlyBlvd_Building.jpg",
      ],
      yearBuilt: 2019,
      description:
        "This extraordinary penthouse represents the pinnacle of luxury living in West Hollywood. Featuring panoramic 360-degree views from downtown LA to the Pacific Ocean, this architectural masterpiece offers unparalleled sophistication with floor-to-ceiling windows, premium finishes, and world-class amenities.",
      features: [
        "360-degree panoramic city views",
        "Floor-to-ceiling windows throughout",
        "Private rooftop terrace with infinity pool",
        "Smart home automation system",
        "Wine cellar and tasting room",
        "Private elevator access",
        "Concierge and valet services",
        "State-of-the-art fitness center",
      ],
      agent: {
        name: "Victoria Sterling",
        image: "/placeholder.svg?height=100&width=100",
        phone: "(310) 555-0123",
        email: "victoria@whelite.com",
      },
    },
    {
      id: 2,
      price: "$29,950,000",
      address: "1535 Blue Jay Way, Hollywood Hills, California",
      beds: 6,
      baths: 7,
      sqft: "6,200",
      lot: "0.8 acres",
      type: "Modern Mountaintop Estate",
      status: "Available",
      image: "/1535BlueJayWay.jpg",
      images: [
        "/1535BlueJayWay_Back.avif",
        "/1535BlueJayWay_Overhead.jpg",
      ],
      yearBuilt: 2021,
      description:
        "A stunning modern mountaintop retreat offering breathtaking views and cutting-edge design. This architectural marvel features floor-to-ceiling glass, an infinity pool with black Hydrazzo finish, and seamless indoor-outdoor living spaces that capture the essence of California luxury.",
      features: [
        "Panoramic city and ocean views",
        "Infinity pool with black Hydrazzo finish",
        "Floor-to-ceiling glass walls",
        "Gourmet chef's kitchen",
        "Home theater and wine cellar",
        "Outdoor kitchen and dining area",
        "Private hiking trails",
        "Smart home technology",
      ],
      agent: {
        name: "Marcus Blackwell",
        image: "/placeholder.svg?height=100&width=100",
        phone: "(310) 555-0124",
        email: "marcus@whelite.com",
      },
    },
    {
      id: 3,
      price: "$68,000,000",
      address: "9330 Flicker Way, Los Angeles9330, California",
      beds: 8,
      baths: 10,
      sqft: "12,000",
      lot: "1.5 acres",
      type: "Ultra-Luxury Estate",
      status: "Available",
      image: "/9330FlickerWay.avif",
      images: [
        "/9330FlickerWay_Back.avif",
        "/9330FlickerWay_Front.avif",
        "/9330FlickerWay_Overhead.avif",
      ],
      yearBuilt: 2020,
      description:
        "The crown jewel of the Bird Streets, this ultra-luxury estate epitomizes grandeur and sophistication. Featuring flowing fountains, an infinity pool, and a private balcony with outdoor Jacuzzi, this property offers the ultimate in privacy and luxury living with unobstructed city views.",
      features: [
        "Flowing water fountains throughout",
        "Infinity pool with spa",
        "Private balcony with outdoor Jacuzzi",
        "Grand double-height foyer",
        "Professional-grade wine cellar",
        "Home gym and spa facilities",
        "Guest house and staff quarters",
        "Circular driveway with motor court",
      ],
      agent: {
        name: "Sophia Chen",
        image: "/placeholder.svg?height=100&width=100",
        phone: "(310) 555-0125",
        email: "sophia@whelite.com",
      },
    },
    {
      id: 4,
      price: "$15,500,000",
      address: "9255 Doheny Road, Sierra Towers, California",
      beds: 3,
      baths: 4,
      sqft: "3,200",
      lot: "High-rise",
      type: "Luxury High-rise Penthouse",
      status: "Available",
      image: "/9255Doheny.avif",
      images: [
        "/9255Doheny_Bedroom.jpg",
        "/9255Doheny_Outside.jpg",
        "/placeholder.svg?height=400&width=600",
      ],
      yearBuilt: 1965,
      description:
        "Experience 300-degree views from downtown to the Hollywood Hills and Pacific Ocean in this prestigious Sierra Towers penthouse. This iconic building offers the perfect blend of classic elegance and modern luxury with unparalleled city vistas and world-class amenities.",
      features: [
        "300-degree panoramic views",
        "Floor-to-ceiling windows",
        "Private terrace with city views",
        "24-hour concierge service",
        "Valet parking",
        "Fitness center and pool",
        "Prime Sunset Strip location",
        "Recently renovated interiors",
      ],
      agent: {
        name: "Victoria Sterling",
        image: "/placeholder.svg?height=100&width=100",
        phone: "(310) 555-0123",
        email: "victoria@whelite.com",
      },
    },
    {
      id: 5,
      price: "$22,800,000",
      address: "1200 Laurel Way, Beverly Hills, California",
      beds: 7,
      baths: 9,
      sqft: "8,500",
      lot: "1.1 acres",
      type: "Contemporary Mansion",
      status: "Available",
      image: "/1200LaurelWay.webp",
      images: [
        "/1200LaurelWay_Car.jpg",
        "/1200LaurelWay_Kitchen.jpg",
        "/placeholder.svg?height=400&width=600",
      ],
      yearBuilt: 2018,
      description:
        "A masterpiece of contemporary design in prestigious Beverly Hills, this stunning mansion offers sophisticated living with clean lines, premium materials, and seamless indoor-outdoor flow. Perfect for entertaining with expansive living spaces and resort-style grounds.",
      features: [
        "Open-concept floor plan",
        "Gourmet chef's kitchen",
        "Resort-style pool and spa",
        "Home theater and game room",
        "Wine cellar and tasting room",
        "Guest house with kitchenette",
        "Three-car garage",
        "Landscaped gardens",
      ],
      agent: {
        name: "Marcus Blackwell",
        image: "/placeholder.svg?height=100&width=100",
        phone: "(310) 555-0124",
        email: "marcus@whelite.com",
      },
    },
    {
      id: 6,
      price: "$18,200,000",
      address: "1450 Sunset Plaza Drive, West Hollywood",
      beds: 5,
      baths: 7,
      sqft: "5,800",
      lot: "0.6 acres",
      type: "Modern Villa",
      status: "Available",
      image: "/1450SunsetPlaza.jpg",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      yearBuilt: 2019,
      description:
        "Nestled in the exclusive Sunset Plaza area, this modern villa combines sleek contemporary design with warm California living. Featuring stunning city views, premium finishes, and exceptional outdoor entertaining spaces, this property represents the best of West Hollywood luxury.",
      features: [
        "Stunning city and canyon views",
        "Open-plan living and dining",
        "Gourmet kitchen with waterfall island",
        "Master suite with private terrace",
        "Infinity pool and spa",
        "Outdoor kitchen and bar",
        "Two-car garage plus parking",
        "Smart home automation",
      ],
      agent: {
        name: "Sophia Chen",
        image: "/placeholder.svg?height=100&width=100",
        phone: "(310) 555-0125",
        email: "sophia@whelite.com",
      },
    },
    {
      id: 7,
      price: "$35,500,000",
      address: "402 Doheny Road, Beverly Hills, California",
      beds: 6,
      baths: 8,
      sqft: "7,800",
      lot: "1.2 acres",
      type: "Architectural Masterpiece",
      status: "Available",
      image: "/402DohenyRoad.webp",
      images: [
        "/402DohenyRoad_Pool.jpg",
        "/402DohenyRoad_Entryway.avif",
      ],
      yearBuilt: 1969,
      description:
        "The DOHENY House!! 1st Time on the Market in 40 Years!! Rarely does an estate of this caliber come on the market. This recently UPDATED modern masterpiece boasts 5 bedrooms, 5 bathrooms, and nearly 6,600 square feet of luxurious living space.",
      features: [
        "In ground gas heated pool",
        "City lights view",
        "3 parking spaces",
        "Heated spa",
        "Gazebo",
        "Outdoor grill",
      ],
      agent: {
        name: "Alexander Reed",
        image: "/placeholder.svg?height=100&width=100",
        phone: "(310) 555-0126",
        email: "alexander@whelite.com",
      },
    },
    {
      id: 8,
      price: "$42,000,000",
      address: "1305 Collingwood Place, Los Angeles, California",
      beds: 7,
      baths: 9,
      sqft: "9,200",
      lot: "1.8 acres",
      type: "Luxury Compound",
      status: "Available",
      image: "/1305CollingwoodPlace.avif",
      images: [
        "/1305CollingwoodPlace_Back.jpg",
        "/1305CollingwoodPlace_FamilyRoom.avif",
      ],
      yearBuilt: 2015,
      description:
        "Nestled at the end of a cul-de-sac on one of the most sought-after streets in the Hollywood Hills, this sophisticated and modern home epitomizes luxury living. Encompassing an expansive 11,800 sqft of living space and surrounded by breathtaking views spanning from Downtown Los Angeles to the Pacific Ocean.",
      features: [
        "Coastline views",
        "Wine cellar",
        "Infinity pool",
        "Home theater and game room",
        "Sauna",
        "Home gym",
        "Home office",
        "Six-car garage",
      ],
      agent: {
        name: "Isabella Martinez",
        image: "/placeholder.svg?height=100&width=100",
        phone: "(310) 555-0127",
        email: "isabella@whelite.com",
      },
    },
    {
      id: 9,
      price: "$26,750,000",
      address: "8741 St. Ives Drive, Los Angeles, California",
      beds: 6,
      baths: 7,
      sqft: "6,800",
      lot: "1.0 acres",
      type: "Modern Estate",
      status: "Available",
      image: "/8741StIvesDr.jpg",
      images: [
        "/8741StIvesDr_BackPool.avif",
      ],
      yearBuilt: 2024,
      description:
        "The most spectacular brand new view estate in the Birds Streets. An exquisite contemporary estate meticulously crafted by NOBEL Design and Architecture Studio for those with a taste for luxury and sophistication.",
      features: [
        "Wine cellar",
        "Home theater",
        "Heated in ground pool",
        "Gourmet chef's kitchen",
        "Five fireplaces",
        "Home office",
        "Ten-car garage",
        "City lights view",
      ],
      agent: {
        name: "Victoria Sterling",
        image: "/placeholder.svg?height=100&width=100",
        phone: "(310) 555-0123",
        email: "victoria@whelite.com",
      },
    },
  ]

  const displayedProperties = allProperties.slice(0, displayedCount)
  const hasMoreProperties = displayedCount < allProperties.length

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value })
  }

  const openModal = (property: any) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProperty(null)
  }

  const handleLoadMore = () => {
    console.log("Before update - displayedCount:", displayedCount)
    setIsLoading(true)
    setTimeout(() => {
      setDisplayedCount((prev) => {
        const newCount = Math.min(prev + 3, allProperties.length)
        console.log("Updating displayedCount from", prev, "to", newCount)
        return newCount
      })
      setIsLoading(false)
    }, 800)
  }

  // const handleLoadMore = () => {
  //   setIsLoading(true)
  //   setDisplayedCount((prev) => prev + 3)
  //   setIsLoading(false)
  //   console.log("Displayed count:", displayedCount)
  //   console.log("All properties length:", allProperties.length)
  // }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Exclusive Inventory
            </motion.span>
            <motion.h1
              className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Luxury Properties
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Available Now
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Discover our curated collection of multi-million dollar properties in West Hollywood's most prestigious
              neighborhoods
            </motion.p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="priceRange" className="text-white text-sm">
                  Price Range
                </Label>
                <select
                  id="priceRange"
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 mt-1"
                >
                  <option value="">All Prices</option>
                  <option value="5-10M">$5M - $10M</option>
                  <option value="10-15M">$10M - $15M</option>
                  <option value="15M+">$15M+</option>
                </select>
              </div>

              <div>
                <Label htmlFor="propertyType" className="text-white text-sm">
                  Property Type
                </Label>
                <select
                  id="propertyType"
                  value={filters.propertyType}
                  onChange={(e) => handleFilterChange("propertyType", e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 mt-1"
                >
                  <option value="">All Types</option>
                  <option value="estate">Estate</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="mansion">Mansion</option>
                </select>
              </div>

              <div>
                <Label htmlFor="bedrooms" className="text-white text-sm">
                  Bedrooms
                </Label>
                <select
                  id="bedrooms"
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 mt-1"
                >
                  <option value="">Any</option>
                  <option value="4+">4+</option>
                  <option value="5+">5+</option>
                  <option value="6+">6+</option>
                  <option value="7+">7+</option>
                </select>
              </div>

              <div>
                <Label htmlFor="location" className="text-white text-sm">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="Enter location..."
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white mt-1"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex justify-between items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-white text-2xl font-semibold">
                {allProperties.length} Exclusive Properties Available
              </h2>
              <p className="text-gray-400">Handpicked luxury homes in prime locations</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 bg-transparent">
                Grid View
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 bg-transparent">
                List View
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {displayedProperties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={cardVariants}
                initial={index >= displayedCount - 3 ? { opacity: 0, y: 50, scale: 0.9 } : false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index >= displayedCount - 3 ? (index - (displayedCount - 3)) * 0.1 : 0,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:bg-gray-800/70 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={property.image || "/placeholder.svg"}
                      alt={property.address}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {property.price}
                    </motion.div>
                    <motion.div
                      className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {property.status}
                    </motion.div>
                    <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <Button size="sm" className="w-full bg-amber-500 text-black hover:bg-amber-600 font-semibold">
                        Schedule Viewing
                      </Button>
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{property.address}</h3>
                      <p className="text-amber-400 text-sm font-medium">{property.type}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="text-center">
                        <div className="text-white font-semibold">{property.beds}</div>
                        <div className="text-gray-400">Beds</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-semibold">{property.baths}</div>
                        <div className="text-gray-400">Baths</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-semibold">{property.sqft}</div>
                        <div className="text-gray-400">Sq Ft</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-3">
                        <motion.img
                          src={property.agent.image || "/placeholder.svg"}
                          alt={property.agent.name}
                          className="w-8 h-8 rounded-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <div>
                          <div className="text-white text-sm font-medium">{property.agent.name}</div>
                          <div className="text-gray-400 text-xs">Listing Agent</div>
                        </div>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
                          onClick={() => openModal(property)}
                        >
                          Details
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {hasMoreProperties && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 font-semibold px-8"
                  onClick={handleLoadMore}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading Properties..." : "Load More Properties"}
                </Button>
              </motion.div>
              <p className="text-gray-400 text-sm mt-2">
                Showing {displayedCount} of {allProperties.length} properties
              </p>
            </motion.div>
          )}
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black">
            Don't See What You're Looking For?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            We have access to exclusive off-market properties and private listings not shown publicly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-black text-white hover:bg-gray-900 font-semibold px-8 py-3">
                Request Private Listings
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-3 bg-transparent"
              >
                Speak with Agent
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Property Modal */}
      <PropertyModal property={selectedProperty} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
