"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Trash2, ShieldCheck, Scale, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout">("cart");

    const deliveryFee = 150;
    const totalWithDelivery = cartItems.length > 0 ? cartTotal + deliveryFee : 0;

    if (checkoutStep === "checkout") {
        return (
            <div className="container mx-auto max-w-2xl px-4 py-12">
                <Link to="#" onClick={(e) => { e.preventDefault(); setCheckoutStep("cart"); }} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 mb-6">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Cart
                </Link>
                <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Secure Checkout</h2>

                    <div className="p-4 bg-slate-50 rounded-lg mb-6 flex justify-between items-center border">
                        <div>
                            <p className="font-medium text-slate-800">{cartItems.length} Items in Cart</p>
                            <p className="text-xs text-amber-600 font-medium mt-1">✨ Includes 'Catch-Weight' Estimated Prices</p>
                        </div>
                        <p className="font-bold text-lg text-slate-900">Rs. {totalWithDelivery.toLocaleString()}</p>
                    </div>

                    <p className="text-sm font-medium text-slate-600 mb-4">Select Payment Method</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button className="flex flex-col items-center justify-center p-4 border rounded-xl hover:border-green-500 hover:bg-green-50 transition-colors focus:ring-2 focus:ring-green-500 group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Esewa_logo.webp" alt="eSewa" className="h-8 mb-2 group-hover:scale-105 transition-transform" />
                            <span className="text-xs font-semibold text-slate-600 group-hover:text-green-700">Pay with eSewa</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-4 border rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-colors focus:ring-2 focus:ring-purple-500 group">
                            <span className="text-xl font-bold text-purple-600 mb-2 group-hover:scale-105 transition-transform">Khalti</span>
                            <span className="text-xs font-semibold text-slate-600 group-hover:text-purple-700">Pay with Khalti</span>
                        </button>
                    </div>

                    <Button variant="default" size="lg" className="w-full font-bold text-lg h-14">
                        Complete Payment <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 mb-8">
                <ArrowLeft className="mr-2 w-4 h-4" /> Continue Shopping
            </Link>

            <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Your Cart</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border shadow-sm flex flex-col items-center justify-center">
                    <div className="bg-slate-50 p-6 rounded-full inline-block mb-6 text-slate-300">
                        <ShoppingBag className="w-16 h-16" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h2>
                    <p className="text-slate-500 mb-8">Looks like you haven't added any farm fresh produce yet.</p>
                    <Link to="/market">
                        <Button size="lg" className="rounded-full px-8">Browse Market</Button>
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3 space-y-4">
                        {cartItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl border shadow-sm"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl border shrink-0" />
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 leading-tight">{item.name}</h3>
                                            <p className="text-sm text-slate-500 mt-1">Rs. {item.price.toLocaleString()} {item.unit}</p>

                                            {item.isCatchWeight && (
                                                <div className="flex items-center gap-1 mt-2 text-xs font-medium text-amber-600 bg-amber-50 self-start px-2 py-1 rounded-md">
                                                    <Scale className="w-3 h-3" /> Catch-Weight: Est. {item.estimatedWeight}kg
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-2 text-slate-400 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center border rounded-lg overflow-hidden bg-slate-50">
                                            <button
                                                className="w-8 h-8 flex items-center justify-center font-medium text-slate-600 hover:bg-slate-200 disabled:opacity-50"
                                                onClick={() => updateQuantity(item.id, -1)}
                                                disabled={item.quantity <= 1}
                                            >-</button>
                                            <div className="w-10 h-8 flex items-center justify-center font-bold text-sm text-slate-900 border-x border-slate-200 bg-white">
                                                {item.quantity}
                                            </div>
                                            <button
                                                className="w-8 h-8 flex items-center justify-center font-medium text-slate-600 hover:bg-slate-200"
                                                onClick={() => updateQuantity(item.id, 1)}
                                            >+</button>
                                        </div>
                                        <div className="font-bold text-lg">
                                            Rs. {(item.price * (item.isCatchWeight ? (item.estimatedWeight || 1) : 1) * item.quantity).toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-2xl border shadow-sm sticky top-24">
                            <h3 className="font-bold text-xl mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6 text-sm">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-slate-900">Rs. {cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Delivery Fee</span>
                                    <span className="font-medium text-slate-900">Rs. {deliveryFee.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="border-t pt-4 mb-6">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-lg text-slate-900">Estimated Total</span>
                                    <span className="font-extrabold text-2xl text-primary-600">Rs. {totalWithDelivery.toLocaleString()}</span>
                                </div>
                                <p className="text-xs text-slate-500">
                                    *Final price may vary slightly based on exact catch-weight packing.
                                </p>
                            </div>

                            <Button size="lg" className="w-full font-bold h-12 text-base" onClick={() => setCheckoutStep("checkout")}>
                                Proceed to Checkout
                            </Button>

                            <div className="mt-6 flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border">
                                <ShieldCheck className="w-5 h-5 text-primary-500 shrink-0" />
                                <p>All Kalika Krisi purchases are fully traceable and guarantee fair payouts directly to smallholder farmers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
