import { Leaf, Award, Globe, Users, ShieldCheck, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import formers_working_in_the_field from "../assets/image/Ramesh_working.jpg";
import rpg from "../assets/image/rpg.png";

const FOUNDERS = [
    {
        initials: "RPG",
        name: "Ram Pyari Ghimire",
        role: "Founder & Lead Farmer",
        description: "A visionary agriculturist with over 15 years of hands-on experience in organic farming and sustainable livestock management in Nepal. Ram spearheads our agricultural operations."
    },
    {
        initials: "RCG",
        name: "Ram Chandra Ghimire ",
        role: "Co-Founder & Tech Lead",
        description: "Bringing Silicon Valley tech to rural Nepal, Ram Chandra Ghimire engineered the digital platform that connects our farm directly to your table, ensuring fair prices and unmatched freshness."
    },
    {
        initials: "PG",
        name: "Prakash Gurung",
        role: "Head of JTA Consultations",
        description: "An expert agronomist and certified JTA. Prakash ensures that our crops and livestock are raised following the highest scientific and ethical standards."
    }
];

const FEATURES = [
    {
        icon: Sprout,
        title: "Fresh Farm-to-Table",
        description: "We eliminate the middlemen. You buy directly from our fields, ensuring maximum freshness and allowing us to maintain sustainable farming practices."
    },
    {
        icon: Users,
        title: "Expert JTA Consultations",
        description: "Our platform features built-in access to Junior Technical Assistants (JTAs) who provide vital agricultural knowledge, ensuring high crop yield and livestock health."
    },
    {
        icon: Globe,
        title: "Digital Ecosystem",
        description: "A comprehensive digital ecosystem tailored to the Nepali agricultural sector. From catch-weight pricing to real-time inventory tracking, everything is handled digitally."
    },
    {
        icon: ShieldCheck,
        title: "Role-Specific Dashboards",
        description: "Custom-tailored experiences for Buyers, Sellers, Admins, and Consultants. Each user sees exactly the tools they need to succeed."
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary-900 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/80 to-transparent" />
                <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-800/80 border border-primary-700 text-primary-200 text-sm font-semibold mb-6 shadow-xl backdrop-blur-md">
                            <Leaf className="w-4 h-4" /> About Kalika Krisi
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                            Rooted in Tradition, <br className="hidden md:block" /> Powered by Technology.
                        </h1>
                        <p className="text-lg md:text-xl text-primary-100/90 leading-relaxed font-medium">
                            We are revolutionizing Nepal's agricultural landscape by merging sustainable farming with a cutting-edge digital ecosystem.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Our History</h2>
                            <div className="w-20 h-1.5 bg-primary-500 rounded-full" />
                            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Kalika Krisi Tatha Pashupanchi Farm began as a humble family initiative in the heart of Nepal. Recognizing the vast disconnect between hardworking local farmers and urban consumers, our founders set out to build a bridge.
                                </p>
                                <p>
                                    In the early days, we focused purely on sustainable crop cultivation and ethical livestock rearing. However, we quickly realized that without an efficient logistics and sales platform, much of the fresh produce was lost to market inefficiencies and predatory middlemen.
                                </p>
                                <p>
                                    Today, Kalika Krisi has evolved into a fully integrated digital ecosystem. We not only produce high-quality organic food but also empower a network of local farmers, provide expert JTA consultations, and offer a seamless "farm-to-table" e-commerce experience for our customers.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 transition-transform hover:rotate-0 duration-500">
                                <img src={formers_working_in_the_field} alt="Farmers working in the field" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                                <div className="bg-primary-100 text-primary-600 p-3 rounded-full">
                                    <Award className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-slate-900">10+ Years</p>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Detail Section */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Platform Features</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Discover how our digital tools are transforming the agricultural supply chain.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {FEATURES.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all group"
                            >
                                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founding Members */}
            <section className="py-20 bg-primary-900 text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-4">Meet Our Founders</h2>
                        <div className="w-20 h-1.5 bg-primary-500 rounded-full mb-6" />
                        <p className="text-lg text-primary-100 max-w-2xl">The passionate individuals driving the vision of a sustainable, digitally-empowered Nepal.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {FOUNDERS.map((founder, idx) => (
                            <div key={idx} className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 p-8 rounded-3xl hover:bg-primary-800 transition-colors">
                                <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg mb-6 rotate-3">
                                    {founder.initials}
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                                <p className="text-primary-300 font-medium mb-4">{founder.role}</p>
                                <p className="text-primary-100/80 leading-relaxed text-sm">
                                    {founder.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
