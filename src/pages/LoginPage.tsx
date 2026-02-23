"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, UserCircle2, ArrowRight } from "lucide-react";
import { useAuth, UserRole } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoginPage() {
    const { login } = useAuth();
    const [selectedRole, setSelectedRole] = useState<UserRole>("buyer");
    const [isLoading, setIsLoading] = useState(false);

    // Mock Form State
    const [email, setEmail] = useState("a@gmail.com");
    const [password, setPassword] = useState("Heto@123%^&");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API Call Auth delay
        setTimeout(() => {
            login(selectedRole);
        }, 800);
    };

    const ROLE_CARDS: { id: UserRole; title: string; desc: string }[] = [
        { id: "buyer", title: "Customer", desc: "Buy fresh produce & livestock" },
        { id: "seller", title: "Farmer", desc: "Manage inventory & sales" },
        { id: "expert", title: "JTA Expert", desc: "Consult farmers" },
        { id: "admin", title: "Admin", desc: "Platform management" }
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">

                <div className="flex justify-center mb-8">
                    <Link to="/" className="flex items-center gap-2">
                        <Leaf className="h-8 w-8 text-primary-600" />
                        <span className="font-extrabold text-3xl tracking-tight text-primary-900">
                            Kalika Krisi
                        </span>
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Card className="border-0 shadow-xl shadow-primary-900/5 ring-1 ring-slate-200/50">
                        <CardHeader className="space-y-1 pb-6 text-center">
                            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                            <p className="text-sm text-slate-500">Sign in to your account</p>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleLogin} className="space-y-6">

                                {/* Role Selector Mock */}
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-slate-700">I am logging in as a:</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {ROLE_CARDS.map((r) => (
                                            <button
                                                key={r.id}
                                                type="button"
                                                onClick={() => setSelectedRole(r.id)}
                                                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${selectedRole === r.id
                                                        ? "border-primary-500 bg-primary-50 text-primary-800"
                                                        : "border-slate-100 bg-white hover:border-slate-200 text-slate-600"
                                                    }`}
                                            >
                                                <span className="text-sm font-bold mb-0.5">{r.title}</span>
                                                <span className="text-[10px] text-center opacity-80 leading-tight">{r.desc}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 pt-2 border-t">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="hello@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <label className="text-sm font-medium text-slate-700" htmlFor="password">Password</label>
                                            <Link to="#" className="text-xs font-medium text-primary-600 hover:text-primary-500">
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            required
                                            className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <Button type="submit" className="w-full font-bold h-12 text-base" disabled={isLoading}>
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Authenticating...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Log In <ArrowRight className="w-4 h-4" />
                                        </span>
                                    )}
                                </Button>

                                <div className="text-center text-sm text-slate-500 mt-4">
                                    Don't have an account?{" "}
                                    <Link to="/register" className="font-semibold text-primary-600 hover:text-primary-500">
                                        Sign up
                                    </Link>
                                </div>

                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
