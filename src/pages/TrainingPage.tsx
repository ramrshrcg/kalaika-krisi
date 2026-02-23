import { motion } from "framer-motion";
import { BookOpen, Video, Users, ArrowRight, PlayCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TrainingPage() {
    const COURSES = [
        {
            id: 1,
            title: "Sustainable Livestock Management",
            instructor: "Dr. Ram Sharma (JTA)",
            duration: "4 Weeks",
            type: "Video Series",
            image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=600&auto=format&fit=crop",
            icon: <Video className="w-5 h-5 text-blue-500" />
        },
        {
            id: 2,
            title: "Maximizing Yield with Organic Fertilizers",
            instructor: "Sita Gurung (Agronomist)",
            duration: "Self-paced",
            type: "Reading Material",
            image: "https://images.unsplash.com/photo-1592982537447-6f2b4c1db0dd?q=80&w=600&auto=format&fit=crop",
            icon: <FileText className="w-5 h-5 text-emerald-500" />
        },
        {
            id: 3,
            title: "Disease Prevention in Poultry",
            instructor: "Dr. Binod Thapa",
            duration: "Live Workshop",
            type: "Interactive Session",
            image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600&auto=format&fit=crop",
            icon: <Users className="w-5 h-5 text-purple-500" />
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header Banner */}
            <div className="bg-primary-900 text-white py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">Kalika Krisi Academy</h1>
                    <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto mb-8">
                        Empowering farmers through expert-led courses, technical resources, and continuous learning by specialized JTAs.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg" className="bg-white text-primary-900 border-0 hover:bg-slate-100 font-bold px-8">
                            Browse Courses
                        </Button>
                        <Link to="/consultations">
                            <Button size="lg" variant="outline" className="border-primary-400 text-primary-100 hover:bg-primary-800 bg-transparent px-8">
                                Book 1-on-1 Consult
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-6xl">

                {/* Featured Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                            <BookOpen className="text-primary-600" /> Latest Learning Resources
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {COURSES.map((course, i) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="h-48 relative overflow-hidden bg-slate-200">
                                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
                                        {course.icon} <span className="text-xs font-bold text-slate-800">{course.type}</span>
                                    </div>
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                                    {/* Overlay Play button if video */}
                                    {course.type === "Video Series" && (
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <PlayCircle className="w-16 h-16 text-white" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl text-slate-900 mb-2 leading-tight group-hover:text-primary-600 transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-500 mb-6">Instructor: {course.instructor}</p>

                                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                        <span className="text-sm font-semibold text-slate-600">{course.duration}</span>
                                        <Button variant="ghost" className="font-semibold text-primary-600 hover:text-primary-700 hover:bg-primary-50 px-4">
                                            Start Learning <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
