import { motion } from "framer-motion";
import { Check, Leaf, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/useToast";

const SUBSCRIPTIONS = [
    {
        id: 101, // Use unique IDs offset from normal products
        name: "Standard Veggie Box",
        price: 3200,
        unit: "per month",
        category: "Produce",
        tag: "Most Popular",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
        description: "A weekly delivery of seasonal, organic vegetables harvested the same morning.",
        features: [
            "5kg Mixed Seasonal Vegetables",
            "Weekly Delivery (4x per month)",
            "Free Farm Recipe Cards",
            "Pause anytime"
        ],
        isCatchWeight: false,
        estimatedWeight: null,
        uin: null
    },
    {
        id: 102,
        name: "Premium Farm Harvest",
        price: 5500,
        unit: "per month",
        category: "Mixed",
        tag: "Best Value",
        image: "https://images.unsplash.com/photo-1595858022728-6e54f0099684?q=80&w=600&auto=format&fit=crop",
        description: "The ultimate farm-to-table experience with veggies, eggs, and dairy.",
        features: [
            "7kg Mixed Seasonal Vegetables",
            "1 Crate (30) Free-Range Eggs",
            "1L Pure Mustard Oil",
            "Priority Support"
        ],
        isCatchWeight: false,
        estimatedWeight: null,
        uin: null
    }
];

export default function SubscriptionsPage() {
    const { addToCart } = useCart();
    const { addToast } = useToast();

    const handleSubscribe = (sub: typeof SUBSCRIPTIONS[0]) => {
        addToCart({
            id: sub.id,
            name: sub.name + " Subscription",
            price: sub.price,
            unit: "Monthly",
            image: sub.image,
            quantity: 1,
            isCatchWeight: sub.isCatchWeight,
            estimatedWeight: sub.estimatedWeight || undefined,
            uin: sub.uin || undefined
        });
        addToast(`✅ Added ${sub.name} Subscription to your cart.`);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-primary-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 to-transparent" />
                <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-800/80 border border-primary-700 backdrop-blur text-primary-200 text-sm mb-6"
                    >
                        <Leaf className="w-4 h-4" /> Community Supported Agriculture
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white"
                    >
                        Farm Fresh Delivery, <span className="text-accent-500">Every Week</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto mb-10"
                    >
                        Subscribe to our CSA program. Get the freshest organic produce delivered directly from our farm to your doorstep, supporting local farmers consistently.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-6xl -mt-10 relative z-20">

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    {SUBSCRIPTIONS.map((sub, i) => (
                        <motion.div
                            key={sub.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col"
                        >
                            <div className="h-48 relative overflow-hidden bg-slate-200">
                                <div className="absolute top-4 right-4 z-10 bg-accent-500 text-white rounded-full px-4 py-1 text-sm font-bold shadow-sm">
                                    {sub.tag}
                                </div>
                                <img src={sub.image} alt={sub.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="font-extrabold text-2xl text-slate-900 mb-2">{sub.name}</h3>
                                <p className="text-slate-500 mb-6 min-h-[48px]">{sub.description}</p>

                                <div className="mb-8">
                                    <span className="text-4xl font-extrabold text-slate-900">Rs. {sub.price.toLocaleString()}</span>
                                    <span className="text-slate-500 font-medium ml-2">{sub.unit}</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {sub.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                                <Check className="w-3 h-3 stroke-[3]" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    size="lg"
                                    className="w-full h-14 text-lg font-bold rounded-xl bg-primary-600 hover:bg-primary-700"
                                    onClick={() => handleSubscribe(sub)}
                                >
                                    Select Plan <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-slate-200">
                    <div>
                        <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6">
                            <HeartHandshake className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Support Farmers directly</h3>
                        <p className="text-slate-500">Your subscription provides a predictable income for our smallholder partner farmers.</p>
                    </div>
                    <div>
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
                            <Leaf className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Ultra-Fresh Quality</h3>
                        <p className="text-slate-500">Produce is harvested the same morning it is delivered, maximizing nutritional value.</p>
                    </div>
                    <div>
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Flexible & Secure</h3>
                        <p className="text-slate-500">Pause your subscription during vacations easily through your buyer dashboard.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
