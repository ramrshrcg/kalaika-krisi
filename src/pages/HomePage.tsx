"use client";
import { useNavigate } from "react-router-dom";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ArrowRight, Sprout, ShieldCheck, Sun, TrendingUp } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/useToast";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";

import { ALL_PRODUCTS } from "./MarketPage";

const PRODUCTS = ALL_PRODUCTS.slice(0, 4);

export default function HomePage() {
  const [email, setEmail] = useState(""); // Added, though not used in this snippet
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const { role } = useAuth();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (role === "seller") return <Navigate to="/inventory" replace />;
  if (role === "admin") return <Navigate to="/dashboard" replace />;
  if (role === "expert") return <Navigate to="/consultations" replace />;

  const handleAddToCart = (product: typeof PRODUCTS[0], e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product detail
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
      quantity: 1,
      isCatchWeight: product.isCatchWeight,
      estimatedWeight: product.estimatedWeight || undefined,
      uin: product.uin || undefined
    });
    //correct here
    if (isAuthenticated) {

      addToast(`✅ Added ${product.name} to your cart.`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-900 text-white pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/80 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 flex flex-col items-start max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-800/50 border border-primary-700/50 text-primary-200 text-sm mb-6"
          >
            <Sun className="w-4 h-4" /> Fresh from Nepal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-2xl leading-tight"
          >
            Nourish Your Family with <span className="text-accent-500">Pure, Local</span> Produce
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl"
          >
            Connecting smallholder organic farmers in Nepal directly to your table. Experience traceability, quality, and community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/market" className="inline-block w-full sm:w-auto">
              <Button size="lg" variant="accent" className="font-semibold text-primary-950 w-full">
                Shop Fresh Catalog <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/training" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 border-0 w-full">
                Learn About Our JTAs
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Outline */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 text-primary-600 p-3 rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">100% Traceable</h3>
                <p className="text-sm text-slate-500">Every livestock item is paired with a specific 12-digit UIN tracked from birth.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent-100 text-accent-600 p-3 rounded-xl bg-amber-100">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Fair 'Catch-Weight'</h3>
                <p className="text-sm text-slate-500">Pay for exactly what you get. Prices adjust dynamically upon final weighing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 text-primary-600 p-3 rounded-xl">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Expert Backed</h3>
                <p className="text-sm text-slate-500">Our farmers are guided by experienced JTAs for optimal crop and livestock health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      {(!role || role === "buyer") && (
        <section className="py-16 md:py-24 bg-slate-50 flex-1">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Harvest</h2>
                <p className="text-slate-500">Hand-picked fresh produce and ethically raised livestock.</p>
              </div>
              <Link to="/market" className="text-primary-600 font-medium hover:underline hidden sm:block">
                View full catalog
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">
                        {product.tag}
                      </span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-medium text-primary-600 mb-2">{product.category}</span>
                    <Link to={`/product/${product.id}`} className="font-bold text-slate-900 hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </Link>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-lg text-slate-900">Rs. {product.price.toLocaleString()}</span>
                        <span className="text-xs text-slate-500 ml-1">{product.unit}</span>
                      </div>
                      <button
                        className="p-2 rounded-full border border-slate-200 text-primary-600 hover:bg-primary-50 transition-colors"
                        onClick={(e) => handleAddToCart(product, e)}
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link to="/market" className="block w-full">
                <Button variant="outline" className="w-full">View full catalog</Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
