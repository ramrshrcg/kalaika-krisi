"use client";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, ArrowRight, ShieldCheck, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/useToast";

// Mock Database
const PRODUCTS = [
    {
        id: 1,
        name: "Organic Jumla Marsi Rice",
        price: 250,
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?q=80&w=600&auto=format&fit=crop",
        category: "Grain",
        tag: "Fresh Harvest",
        isCatchWeight: false,
        description: "Authentic Marsi rice grown in the high altitudes of Jumla. Packed with distinct flavor and nutritional benefits, directly sourced from Kalika Krisi cooperative."
    },
    {
        id: 2,
        name: "Free-Range Kadaknath Chicken",
        price: 1200,
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=600&auto=format&fit=crop",
        category: "Livestock",
        tag: "Catch-Weight",
        isCatchWeight: true,
        uin: "KRN-1029-4821",
        estimatedWeight: 1.5,
        description: "Premium free-range Kadaknath chicken raised without antibiotics. This is a catch-weight item: you authorization is for estimated weight, final price adjusts to exact packed weight."
    },
];

export default function ProductDetailPage() {
    const params = useParams();
    const productId = parseInt(params.id as string);
    const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0]; // Fallback to first if not found

    const { addToCart } = useCart();
    const { addToast } = useToast();

    const [quantity, setQuantity] = useState(1);
    const [checkoutStep, setCheckoutStep] = useState<"product" | "checkout">("product");

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            unit: product.unit,
            image: product.image,
            quantity: quantity,
            isCatchWeight: product.isCatchWeight,
            estimatedWeight: product.estimatedWeight,
            uin: product.uin
        });
        addToast(`✅ Added ${quantity} of ${product.name} to your cart.`);
    };

    const estimatedTotal = product.isCatchWeight
        ? product.price * (product.estimatedWeight || 1) * quantity
        : product.price * quantity;

    if (checkoutStep === "checkout") {
        return (
            <div className="container mx-auto max-w-2xl px-4 py-12">
                <Link to="#" onClick={(e) => { e.preventDefault(); setCheckoutStep("product"); }} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 mb-6">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Product
                </Link>
                <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Secure Checkout</h2>

                    <div className="p-4 bg-slate-50 rounded-lg mb-6 flex justify-between items-center border">
                        <div>
                            <p className="font-medium text-slate-800">{product.name} (x{quantity})</p>
                            {product.isCatchWeight && (
                                <p className="text-xs text-amber-600 font-medium">✨ 'Catch-Weight' Estimated Price</p>
                            )}
                        </div>
                        <p className="font-bold text-lg text-slate-900">Rs. {estimatedTotal.toLocaleString()}</p>
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
                        Proceed to Payment <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-5xl px-4 py-8 md:py-16">
            <Link to="/market" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 mb-8">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Market
            </Link>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Product Image */}
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="aspect-square rounded-3xl overflow-hidden bg-slate-100 border relative shadow-sm"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                        <div className="absolute top-4 left-4 z-10">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white/90 text-slate-800 shadow-sm backdrop-blur-sm">
                                {product.tag}
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="mb-2">
                        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">{product.category}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{product.name}</h1>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">{product.description}</p>

                    {product.isCatchWeight && (
                        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-6 shadow-sm">
                            <div className="flex items-start gap-3">
                                <Scale className="text-amber-600 w-6 h-6 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-amber-900 mb-1">Catch-Weight Item</h4>
                                    <p className="text-sm text-amber-800 leading-relaxed">
                                        This is a live/fresh product. You are authorizing payment for the <strong>estimated weight ({product.estimatedWeight}kg)</strong>. The final invoice will be adjusted after harvesting & weighing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {product.uin && (
                        <div className="flex items-center gap-2 mb-6 text-sm text-slate-500">
                            <ShieldCheck className="w-4 h-4 text-primary-500" /> Traceability UIN: <span className="font-mono text-slate-800 bg-slate-100 px-2 py-0.5 rounded">{product.uin}</span>
                        </div>
                    )}

                    <div className="border-t border-b py-6 mb-8 flex items-center justify-between">
                        <div>
                            <span className="text-3xl font-extrabold text-slate-900">Rs. {product.price.toLocaleString()}</span>
                            <span className="text-slate-500 font-medium ml-2">{product.unit}</span>
                        </div>

                        <div className="flex items-center border rounded-lg bg-white overflow-hidden shadow-sm">
                            <button
                                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <div className="w-12 h-10 flex items-center justify-center font-bold text-slate-900 border-x">
                                {quantity}
                            </div>
                            <button
                                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button size="lg" className="flex-1 font-bold text-base h-14" onClick={() => { handleAddToCart(); setCheckoutStep("checkout"); }}>
                            Buy Now (Rs. {estimatedTotal.toLocaleString()})
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 border-primary-200 text-primary-700 hover:bg-primary-50" onClick={handleAddToCart}>
                            <ShoppingCart className="w-5 h-5" />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}
