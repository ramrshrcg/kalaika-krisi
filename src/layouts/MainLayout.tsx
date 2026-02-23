"use client";

import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { Leaf, ShoppingCart, User, LogOut, Settings, LayoutDashboard, CalendarCheck, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function MainLayout({ children }: { children: React.ReactNode }) {
    const { role, isAuthenticated, logout } = useAuth();
    const { cartCount } = useCart();

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Top Navbar */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Leaf className="h-6 w-6 text-primary-600" />
                        <Link to="/" className="font-bold text-xl tracking-tight text-primary-900">
                            Kalika Krisi
                        </Link>
                    </div>

                    {/* Navigation Links based on Role */}
                    <nav className="hidden md:flex items-center gap-6">
                        {role === "buyer" && (
                            <>
                                <Link to="/market" className="text-sm font-semibold text-slate-500 hover:text-primary-600 transition-colors">
                                    Market
                                </Link>
                                <Link to="/subscriptions" className="text-sm font-semibold text-slate-500 hover:text-primary-600 transition-colors">
                                    CSA Subscriptions
                                </Link>
                            </>
                        )}
                        {role === "seller" && (
                            <>
                                <Link to="/inventory" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-1">
                                    <CalendarCheck className="w-4 h-4" /> Inventory
                                </Link>
                                <Link to="/orders" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                                    Fulfillment
                                </Link>
                            </>
                        )}
                        {role === "admin" && (
                            <>
                                <Link to="/dashboard" className="text-sm font-medium text-primary-600 flex items-center gap-1">
                                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                                </Link>
                                <Link to="/settings" className="text-sm font-medium text-slate-600 hover:text-primary-600 flex items-center gap-1">
                                    <Settings className="w-4 h-4" /> Settings
                                </Link>
                            </>
                        )}
                        {role === "expert" && (
                            <>
                                <Link to="/consultations" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-1">
                                    <MessagesSquare className="w-4 h-4" /> Consultations
                                </Link>
                                <Link to="/training" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                                    Training
                                </Link>
                            </>
                        )}
                    </nav>

                    <div className="flex items-center gap-4">
                        {!isAuthenticated ? (
                            <div className="flex items-center gap-2">
                                <Link to="/login">
                                    <Button variant="ghost" size="sm" className="hidden md:flex">Log In</Button>
                                </Link>
                                <Link to="/register">
                                    <Button size="sm" className="hidden md:flex">Register</Button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                {role === "buyer" && (
                                    <Link to="/cart">
                                        <Button variant="ghost" size="icon" className="relative">
                                            <ShoppingCart className="h-5 w-5" />
                                            {cartCount > 0 && (
                                                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent-500 text-[10px] font-bold text-white flex items-center justify-center border-2 border-white shadow-sm">
                                                    {cartCount > 99 ? '99+' : cartCount}
                                                </span>
                                            )}
                                        </Button>
                                    </Link>
                                )}

                                <Button variant="outline" size="sm" className="hidden md:flex gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{role ? role.charAt(0).toUpperCase() + role.slice(1) : ''} Profile</span>
                                </Button>

                                <Button variant="ghost" size="icon" onClick={logout} title="Log Out" className="text-slate-500 hover:text-red-600 hover:bg-red-50">
                                    <LogOut className="h-4 w-4" />
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 bg-slate-50/50">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t bg-white py-8 mt-auto">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4">
                    <div className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-primary-200" />
                        <span>&copy; 2026 Kalika Krisi Tatha Pashupanchi Farm. All rights reserved.</span>
                    </div>
                    <div className="flex gap-4">
                        <Link to="#" className="hover:text-primary-600">Privacy</Link>
                        <Link to="#" className="hover:text-primary-600">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
