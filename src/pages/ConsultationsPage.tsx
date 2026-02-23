import { useState } from "react";
import { Calendar, MessageSquare, Video, Users, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const MOCK_APPOINTMENTS = [
    { id: "APT-101", farmer: "Sita Sharma", topic: "Organic Pest Control for Tomatoes", date: "Today, 2:00 PM", status: "Upcoming" },
    { id: "APT-102", farmer: "Rajesh Gurung", topic: "Livestock Feed Optimization", date: "Tomorrow, 10:30 AM", status: "Upcoming" },
    { id: "APT-098", farmer: "Binod Thapa", topic: "Soil Testing Results", date: "Yesterday", status: "Completed" }
];

export default function ConsultationsPage() {
    const [activeTab, setActiveTab] = useState("Appointments");

    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-2">JTA Expert Dashboard</h1>
                    <p className="text-slate-500">Manage your consultations, answer farmer queries, and host workshops.</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Upcoming Sessions</p>
                            <p className="text-2xl font-bold text-slate-900">2</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-lg text-green-600">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Unanswered Queries</p>
                            <p className="text-2xl font-bold text-slate-900">5</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Farmers Assisted</p>
                            <p className="text-2xl font-bold text-slate-900">128</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[400px]">
                    {/* Tabs */}
                    <div className="flex border-b border-slate-100 bg-slate-50 overflow-x-auto hide-scrollbar">
                        {["Appointments", "Farmer Q&A", "My Courses"].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab
                                        ? "border-primary-600 text-primary-600 bg-white"
                                        : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                        {activeTab === "Appointments" && (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-lg font-bold text-slate-800">Your Schedule</h2>
                                    <Button variant="outline" size="sm">
                                        <Calendar className="w-4 h-4 mr-2" /> Sync Calendar
                                    </Button>
                                </div>

                                {MOCK_APPOINTMENTS.map(apt => (
                                    <div key={apt.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-slate-100 rounded-xl hover:border-primary-100 hover:bg-primary-50 transition-all gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-full ${apt.status === 'Upcoming' ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-400'}`}>
                                                <Video className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900">{apt.topic}</h3>
                                                <p className="text-sm text-slate-500 flex items-center gap-1">
                                                    <Users className="w-3 h-3" /> {apt.farmer}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:items-end w-full sm:w-auto gap-2 sm:gap-1">
                                            <div className="flex items-center gap-2">
                                                {apt.status === 'Upcoming' ? <Clock className="w-4 h-4 text-amber-500" /> : <CheckCircle className="w-4 h-4 text-green-500" />}
                                                <span className="text-sm font-bold text-slate-700">{apt.date}</span>
                                            </div>
                                            {apt.status === 'Upcoming' && (
                                                <Button size="sm" className="w-full sm:w-auto text-xs h-8">Join Video Call</Button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "Farmer Q&A" && (
                            <div className="flex flex-col items-center justify-center p-12 text-center text-slate-500">
                                <MessageSquare className="w-12 h-12 text-slate-200 mb-4" />
                                <h3 className="text-lg font-bold text-slate-700 mb-1">Q&A Forum Coming Soon</h3>
                                <p className="max-w-md">This tab will feature a threaded forum where JTAs can answer text-based questions submitted by farmers.</p>
                            </div>
                        )}

                        {activeTab === "My Courses" && (
                            <div className="flex flex-col items-center justify-center p-12 text-center text-slate-500">
                                <Video className="w-12 h-12 text-slate-200 mb-4" />
                                <h3 className="text-lg font-bold text-slate-700 mb-1">Course Management</h3>
                                <p className="max-w-md">Upload new video series or reading materials for the Kalika Krisi Academy here.</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
