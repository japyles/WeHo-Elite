import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              About West Hollywood Elite
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Redefining Luxury
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Real Estate
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              For over two decades, we've been the trusted advisors to discerning clients seeking the finest properties
              in West Hollywood and beyond. Our commitment to excellence and unparalleled market knowledge sets us
              apart.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-white">Our Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2001, West Hollywood Elite emerged from a vision to transform the luxury real estate
                  experience. We recognized that high-net-worth individuals deserved more than traditional real estate
                  services—they deserved a partnership built on trust, expertise, and exclusivity.
                </p>
                <p>
                  Today, we represent the pinnacle of luxury real estate in West Hollywood, Beverly Hills, and the
                  Hollywood Hills. Our portfolio includes some of the most prestigious properties in Los Angeles, with
                  transactions exceeding $2 billion in luxury real estate sales.
                </p>
                <p>
                  Every property we represent tells a story of architectural excellence, prime location, and
                  uncompromising quality—values that mirror our own commitment to our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/office.jpg"
                alt="West Hollywood Elite Office"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black p-6 rounded-lg">
                <div className="text-2xl font-bold">$2B+</div>
                <div className="text-sm">In Luxury Sales</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">Meet Our Elite Team</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Industry leaders with decades of combined experience in luxury real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Victoria Sterling",
                title: "Founding Partner & CEO",
                experience: "25+ Years Experience",
                specialization: "Luxury Estates & Celebrity Homes",
                image: "/victoria-sterling.jpg",
              },
              {
                name: "Marcus Blackwell",
                title: "Senior Partner",
                experience: "20+ Years Experience",
                specialization: "Investment Properties & Development",
                image: "/markus-blackwell.jpg",
              },
              {
                name: "Sophia Chen",
                title: "Director of Sales",
                experience: "15+ Years Experience",
                specialization: "International Clients & Modern Architecture",
                image: "/sophia-chen.jpg",
              },
              {
                name: "Alexander Reed",
                title: "Senior Sales Associate",
                experience: "10+ Years Experience",
                specialization: "International Clients & Modern Architecture",
                image: "/Alexander-reed.jpg",
              },
              {
                name: "Isabella Martinez",
                title: "Senior Sales Associate",
                experience: "8+ Years Experience",
                specialization: "International Clients & Modern Architecture",
                image: "/isabella-martinez.jpg",
              },
            ].map((agent, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-1">{agent.name}</h3>
                  <p className="text-amber-400 font-medium mb-2">{agent.title}</p>
                  <p className="text-gray-400 text-sm mb-2">{agent.experience}</p>
                  <p className="text-gray-300 text-sm">{agent.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide every interaction and transaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Exclusivity",
                description: "Access to off-market properties and private listings unavailable elsewhere",
                icon: "🔐",
              },
              {
                title: "Integrity",
                description: "Transparent communication and ethical practices in every transaction",
                icon: "🤝",
              },
              {
                title: "Excellence",
                description: "Uncompromising standards in service delivery and client satisfaction",
                icon: "⭐",
              },
              {
                title: "Discretion",
                description: "Complete confidentiality and privacy protection for all our clients",
                icon: "🛡️",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 text-white">By the Numbers</h2>
            <p className="text-gray-400 text-lg">Our track record speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "$2B+", label: "Total Sales Volume" },
              { number: "500+", label: "Luxury Properties Sold" },
              { number: "98%", label: "Client Satisfaction Rate" },
              { number: "23", label: "Years of Excellence" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black">Experience the Elite Difference</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Join our exclusive clientele and discover why discerning buyers choose West Hollywood Elite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-gray-900 font-semibold px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/inventory">
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-3 bg-transparent"
              >
                View Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
