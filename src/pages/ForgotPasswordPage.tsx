import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, ArrowRight, ArrowLeft, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API verification delay
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1200);
    };

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
                        {isSubmitted ? (
                            <CardContent className="pt-10 pb-8 px-8 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <MailCheck className="w-8 h-8 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Check your email</h2>
                                <p className="text-sm text-slate-500 mb-8">
                                    We've sent a password reset link to <br />
                                    <span className="font-semibold text-slate-800">{email}</span>
                                </p>
                                <Link to="/login" className="block w-full">
                                    <Button className="w-full font-bold h-12 text-base">
                                        Return to Log In
                                    </Button>
                                </Link>
                            </CardContent>
                        ) : (
                            <>
                                <CardHeader className="space-y-1 pb-6 text-center">
                                    <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
                                    <p className="text-sm text-slate-500">
                                        Enter your email address and we'll send you a link to reset your password.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleReset} className="space-y-6">

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700" htmlFor="email">Email Address</label>
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

                                        <Button type="submit" className="w-full font-bold h-12 text-base" disabled={isLoading}>
                                            {isLoading ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending Link...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Send Reset Link <ArrowRight className="w-4 h-4" />
                                                </span>
                                            )}
                                        </Button>
                                    </form>

                                    <div className="text-center mt-6">
                                        <Link to="/login" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
                                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Log In
                                        </Link>
                                    </div>
                                </CardContent>
                            </>
                        )}
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
