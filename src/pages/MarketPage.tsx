import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/useToast";
import { motion } from "framer-motion";

const ALL_PRODUCTS = [
    {
        id: 1,
        name: "Organic Jumla Marsi Rice",
        price: 250,
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?q=80&w=600&auto=format&fit=crop",
        category: "Grain",
        tag: "Fresh Harvest",
        isCatchWeight: false,
        estimatedWeight: null,
        uin: null,
    },
    {
        id: 2,
        name: "Free-Range Kadaknath Chicken",
        price: 1200,
        unit: "per bird (est. 1.5kg)",
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=600&auto=format&fit=crop",
        category: "Livestock",
        tag: "Catch-Weight",
        isCatchWeight: true,
        estimatedWeight: 1.5,
        uin: "UIN1234567890",
    },
    {
        id: 3,
        name: "Pure Mustard Oil",
        price: 380,
        unit: "per Liter",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop",
        category: "Pantry",
        tag: "Bestseller",
        isCatchWeight: false,
        estimatedWeight: null,
        uin: null,
    },
    {
        id: 4,
        name: "Seasonal Organic Vegetables Box",
        price: 850,
        unit: "per Box (5kg)",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
        category: "Produce",
        tag: "Subscription",
        isCatchWeight: false,
        estimatedWeight: null,
        uin: null,
    },
    {
        id: 5,
        name: "Himalayan Raw Honey",
        price: 1500,
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1587049352847-4d4b12fe3488?q=80&w=600&auto=format&fit=crop",
        category: "Pantry",
        tag: "Organic",
        isCatchWeight: false,
        estimatedWeight: null,
        uin: null,
    },
    {
        id: 6,
        name: "Farm Fresh Eggs",
        price: 450,
        unit: "per crate (30 pcs)",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854d14c?q=80&w=600&auto=format&fit=crop",
        category: "Livestock",
        tag: "Daily Need",
        isCatchWeight: false,
        estimatedWeight: null,
        uin: null,
    }
];

const CATEGORIES = ["All", "Grain", "Livestock", "Pantry", "Produce"];

export default function MarketPage() {
    const { addToCart } = useCart();
    const { addToast } = useToast();
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const handleAddToCart = (product: typeof ALL_PRODUCTS[0], e: React.MouseEvent) => {
        e.preventDefault();
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
        addToast(`✅ Added ${product.name} to your cart.`);
    };

    const filteredProducts = ALL_PRODUCTS.filter(product => {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-slate-50 min-h-screen py-8">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Kalika Krisi Market</h1>
                        <p className="text-slate-600 text-lg">Fresh, traceable, and organic products directly from our farmers.</p>
                    </div>

                    <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search farm fresh..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 w-full md:w-64 transition-all"
                            />
                        </div>
                        <Button variant="outline" className="h-[46px] rounded-xl bg-white hidden sm:flex">
                            <Filter className="mr-2 h-4 w-4" /> Filters
                        </Button>
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex overflow-x-auto pb-4 mb-6 gap-2 hide-scrollbar">
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${activeCategory === category
                                    ? "bg-primary-600 text-white shadow-md shadow-primary-900/10"
                                    : "bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-700 border border-slate-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-24 bg-white rounded-3xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-700 mb-2">No products found</h3>
                        <p className="text-slate-500">Try adjusting your filters or search query.</p>
                        <Button variant="outline" className="mt-6" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                            Clear Filters
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product, i) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">
                                            {product.tag}
                                        </span>
                                        {product.isCatchWeight && (
                                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-amber-100/90 text-amber-800 backdrop-blur-sm shadow-sm">
                                                Catch-Weight
                                            </span>
                                        )}
                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <span className="text-xs font-bold tracking-wider text-primary-600 mb-2 uppercase">{product.category}</span>
                                    <Link to={`/product/${product.id}`} className="text-xl font-bold text-slate-900 hover:text-primary-600 transition-colors line-clamp-2 mb-3">
                                        {product.name}
                                    </Link>
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
                                        <div>
                                            <span className="font-extrabold text-2xl text-slate-900">Rs. {product.price.toLocaleString()}</span>
                                            <span className="text-xs font-medium text-slate-500 block">{product.unit}</span>
                                        </div>
                                        <button
                                            className="p-3 rounded-xl border border-slate-200 text-primary-600 hover:bg-primary-50 hover:border-primary-200 transition-colors group-hover:bg-primary-600 group-hover:text-white"
                                            onClick={(e) => handleAddToCart(product, e)}
                                        >
                                            <ShoppingCart className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}
