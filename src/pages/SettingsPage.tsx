import { useState } from "react";
import { User, Bell, Shield, Wallet, Globe, Smartphone, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("Profile");

    const TABS = [
        { id: "Profile", icon: User },
        { id: "Notifications", icon: Bell },
        { id: "Security", icon: Shield },
        { id: "Payments", icon: Wallet },
        { id: "Preferences", icon: Globe },
        { id: "Devices", icon: Smartphone },
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Account Settings</h1>
                    <p className="text-slate-500">Manage your profile information, preferences, and platform configurations.</p>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-6 shrink-0">
                        <nav className="flex md:flex-col gap-2 overflow-x-auto hide-scrollbar">
                            {TABS.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all text-left ${activeTab === tab.id
                                        ? "bg-primary-600 text-white shadow-md shadow-primary-900/10"
                                        : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900"
                                        }`}
                                >
                                    <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-primary-100" : "text-slate-400"}`} />
                                    {tab.id}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Region */}
                    <div className="flex-1 p-6 md:p-10">
                        {activeTab === "Profile" && (
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Profile Information</h2>

                                <div className="flex items-center gap-6 mb-10">
                                    <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-3xl font-bold border-4 border-white shadow-lg">
                                        AK
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Avatar</h3>
                                        <p className="text-sm text-slate-500 mb-3">Upload a picture to personalize your account.</p>
                                        <div className="flex gap-3">
                                            <Button size="sm" variant="outline">Upload New</Button>
                                            <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">Remove</Button>
                                        </div>
                                    </div>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">First Name</label>
                                            <input type="text" defaultValue="Admin" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Last Name</label>
                                            <input type="text" defaultValue="User" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                                        <input type="email" defaultValue="admin@kalikakrisi.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Phone Number</label>
                                        <input type="tel" defaultValue="+977 9800000000" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors" />
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 flex justify-end">
                                        <Button className="bg-primary-600 hover:bg-primary-700">
                                            <Save className="w-4 h-4 mr-2" /> Save Changes
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {activeTab === "Notifications" && (
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Notification Preferences</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50">
                                        <div>
                                            <h3 className="font-bold text-slate-800">Email Notifications</h3>
                                            <p className="text-sm text-slate-500">Receive order updates and promotions via email.</p>
                                        </div>
                                        <div className="w-11 h-6 bg-primary-600 rounded-full relative cursor-pointer">
                                            <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50">
                                        <div>
                                            <h3 className="font-bold text-slate-800">Push Notifications</h3>
                                            <p className="text-sm text-slate-500">Get real-time alerts on your devices.</p>
                                        </div>
                                        <div className="w-11 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                                            <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50">
                                        <div>
                                            <h3 className="font-bold text-slate-800">SMS Alerts</h3>
                                            <p className="text-sm text-slate-500">Receive critical account and security alerts via SMS.</p>
                                        </div>
                                        <div className="w-11 h-6 bg-primary-600 rounded-full relative cursor-pointer">
                                            <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "Security" && (
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Security Settings</h2>
                                <form className="space-y-6 mb-10">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Change Password</h3>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Current Password</label>
                                            <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">New Password</label>
                                            <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors" />
                                        </div>
                                    </div>
                                    <Button className="bg-slate-900 hover:bg-slate-800">Update Password</Button>
                                </form>
                                <div className="pt-6 border-t border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Two-Factor Authentication</h3>
                                    <p className="text-sm text-slate-500 mb-4">Add an extra layer of security to your account.</p>
                                    <Button variant="outline">Enable 2FA</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === "Payments" && (
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Payment Methods</h2>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between p-5 border border-primary-200 bg-primary-50 rounded-xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary-100 rounded-bl-full -mr-4 -mt-4" />
                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className="w-12 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-xs">
                                                eSewa
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-800">eSewa Wallet</h3>
                                                <p className="text-sm text-slate-500">Connected to 980****000</p>
                                            </div>
                                        </div>
                                        <div className="text-xs font-bold text-primary-600 bg-primary-100 px-2 py-1 rounded-full relative z-10">
                                            Default
                                        </div>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full border-dashed border-2 py-6 text-slate-500 hover:text-primary-600 hover:bg-primary-50 hover:border-primary-200">
                                    + Add New Payment Method
                                </Button>
                            </div>
                        )}

                        {activeTab === "Preferences" && (
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Platform Preferences</h2>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Language</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors">
                                            <option>English</option>
                                            <option>Nepali</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Currency Display</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors">
                                            <option>NPR (Rs.)</option>
                                            <option>USD ($)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "Devices" && (
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Active Sessions</h2>
                                <p className="text-sm text-slate-500 mb-6">Manage the devices that are currently logged into your account.</p>
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 rounded-xl">
                                        <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                                                <Globe className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-800">MacBook Pro - Chrome</h3>
                                                <p className="text-sm text-slate-500">Kathmandu, Nepal • Active Now</p>
                                            </div>
                                        </div>
                                        <div className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full w-max">
                                            Current Session
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 rounded-xl">
                                        <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                                                <Smartphone className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-800">iPhone 13 - Safari</h3>
                                                <p className="text-sm text-slate-500">Kathmandu, Nepal • Last active 2 hours ago</p>
                                            </div>
                                        </div>
                                        <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">Revoke Access</Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
