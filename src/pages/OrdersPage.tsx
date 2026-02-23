import { useState } from "react";
import { Search, ChevronRight, Truck, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const MOCK_ORDERS = [
    { id: "ORD-9302", customer: "Sita Sharma", date: "Oct 24, 2026", amount: 4500, status: "Processing", items: 3 },
    { id: "ORD-9301", customer: "Rajesh Gurung", date: "Oct 23, 2026", amount: 1200, status: "Shipped", items: 1 },
    { id: "ORD-9299", customer: "Binod Thapa", date: "Oct 22, 2026", amount: 850, status: "Delivered", items: 1 },
    { id: "ORD-9298", customer: "Anita Karki", date: "Oct 20, 2026", amount: 3200, status: "Delivered", items: 4 },
];

export default function OrdersPage() {
    const [orders] = useState(MOCK_ORDERS);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("All");

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTab = activeTab === "All" || order.status === activeTab;
        return matchesSearch && matchesTab;
    });

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Processing': return <Clock className="w-4 h-4 text-amber-500" />;
            case 'Shipped': return <Truck className="w-4 h-4 text-primary-500" />;
            case 'Delivered': return <CheckCircle className="w-4 h-4 text-green-500" />;
            default: return null;
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Order Management</h1>
                    <p className="text-slate-500">Track incoming orders, update shipping statuses, and view customer details.</p>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Toolbar */}
                    <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar pb-2 md:pb-0">
                            {["All", "Processing", "Shipped", "Delivered"].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${activeTab === tab
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-auto">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search by ID or customer..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </div>

                    {/* Order List */}
                    <div className="divide-y divide-slate-100">
                        {filteredOrders.length === 0 ? (
                            <div className="p-12 text-center">
                                <p className="text-slate-500">No orders found matching your criteria.</p>
                            </div>
                        ) : (
                            filteredOrders.map(order => (
                                <div key={order.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group">
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">{order.id}</p>
                                            <p className="text-sm text-slate-500">{order.date}</p>
                                        </div>
                                        <div className="hidden sm:block">
                                            <p className="font-medium text-slate-900 mb-1">{order.customer}</p>
                                            <p className="text-sm text-slate-500">{order.items} items</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                                        <div className="text-left sm:text-right">
                                            <p className="font-bold text-slate-900 mb-1">Rs. {order.amount.toLocaleString()}</p>
                                            <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                                                {getStatusIcon(order.status)}
                                                <span className={`text-sm font-medium ${order.status === 'Processing' ? 'text-amber-600' :
                                                        order.status === 'Shipped' ? 'text-primary-600' :
                                                            'text-green-600'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-slate-400 group-hover:text-primary-600 transition-colors">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
                        <Button variant="ghost" className="text-primary-600 font-semibold hover:text-primary-700 hover:bg-primary-50">
                            Load More Orders
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
