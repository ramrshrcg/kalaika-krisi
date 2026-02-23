import { useState } from "react";
import { Plus, Edit2, Trash2, Package, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const INITIAL_INVENTORY = [
    { id: 1, name: "Organic Jumla Marsi Rice", stock: 150, unit: "kg", price: 250, status: "In Stock" },
    { id: 2, name: "Free-Range Kadaknath Chicken", stock: 12, unit: "birds", price: 1200, status: "Low Stock" },
    { id: 3, name: "Pure Mustard Oil", stock: 45, unit: "Liters", price: 380, status: "In Stock" },
    { id: 4, name: "Seasonal Organic Vegetables", stock: 0, unit: "Boxes", price: 850, status: "Out of Stock" }
];

export default function InventoryPage() {
    const [inventory, setInventory] = useState(INITIAL_INVENTORY);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredInventory = inventory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Inventory Management</h1>
                        <p className="text-slate-500">Manage your farm produce, update stock levels, and set prices.</p>
                    </div>
                    <Button className="bg-primary-600 hover:bg-primary-700 w-full md:w-auto">
                        <Plus className="w-5 h-5 mr-2" /> Add New Product
                    </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                            <Package className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Total Products</p>
                            <p className="text-2xl font-bold text-slate-900">{inventory.length}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                            <Package className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Low Stock</p>
                            <p className="text-2xl font-bold text-slate-900">
                                {inventory.filter(i => i.status === "Low Stock").length}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="bg-red-100 p-3 rounded-lg text-red-600">
                            <Package className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Out of Stock</p>
                            <p className="text-2xl font-bold text-slate-900">
                                {inventory.filter(i => i.status === "Out of Stock").length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between gap-4">
                        <h2 className="text-xl font-bold text-slate-800">Current Listings</h2>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 text-sm">
                                    <th className="py-4 px-6 font-semibold">Product Name</th>
                                    <th className="py-4 px-6 font-semibold">Stock Level</th>
                                    <th className="py-4 px-6 font-semibold">Price</th>
                                    <th className="py-4 px-6 font-semibold">Status</th>
                                    <th className="py-4 px-6 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredInventory.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 font-medium text-slate-900">{item.name}</td>
                                        <td className="py-4 px-6 text-slate-600">
                                            {item.stock} <span className="text-xs">{item.unit}</span>
                                        </td>
                                        <td className="py-4 px-6 text-slate-600">Rs. {item.price}</td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                                                    item.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' :
                                                        'bg-red-100 text-red-700'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredInventory.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="py-12 text-center text-slate-500">
                                            No products found matching your search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
