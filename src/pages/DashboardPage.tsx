import { Users, ShoppingBag, Package, TrendingUp, DollarSign, Activity, FileText } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const SALES_DATA = [
    { name: 'Jan', sales: 4000, users: 2400 },
    { name: 'Feb', sales: 3000, users: 1398 },
    { name: 'Mar', sales: 2000, users: 9800 },
    { name: 'Apr', sales: 2780, users: 3908 },
    { name: 'May', sales: 1890, users: 4800 },
    { name: 'Jun', sales: 2390, users: 3800 },
    { name: 'Jul', sales: 3490, users: 4300 },
];

const CATEGORY_DATA = [
    { name: 'Produce', value: 400 },
    { name: 'Livestock', value: 300 },
    { name: 'Pantry', value: 300 },
    { name: 'Dairy', value: 200 },
];

export default function DashboardPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Admin Overlook</h1>
                        <p className="text-slate-500">Platform metrics, user growth, and marketplace health overview.</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                        Last 30 Days <span className="text-primary-600 ml-2">▼</span>
                    </div>
                </div>

                {/* Top KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                            <DollarSign className="w-24 h-24 text-primary-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-primary-50 p-2.5 rounded-lg text-primary-600">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-slate-600">Total Revenue</span>
                            </div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <h3 className="text-3xl font-black text-slate-900">Rs. 1.2M</h3>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-green-600">
                                <TrendingUp className="w-4 h-4" /> <span>+14.5% from last month</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                            <ShoppingBag className="w-24 h-24 text-blue-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-50 p-2.5 rounded-lg text-blue-600">
                                    <ShoppingBag className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-slate-600">Orders Processed</span>
                            </div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <h3 className="text-3xl font-black text-slate-900">3,492</h3>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-green-600">
                                <TrendingUp className="w-4 h-4" /> <span>+5.2% from last month</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                            <Users className="w-24 h-24 text-purple-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-purple-50 p-2.5 rounded-lg text-purple-600">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-slate-600">Active Users</span>
                            </div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <h3 className="text-3xl font-black text-slate-900">12,504</h3>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-amber-600">
                                <Activity className="w-4 h-4" /> <span>+1.1% from last month</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                            <Package className="w-24 h-24 text-amber-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-amber-50 p-2.5 rounded-lg text-amber-600">
                                    <Package className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-slate-600">Active Products</span>
                            </div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <h3 className="text-3xl font-black text-slate-900">458</h3>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-green-600">
                                <TrendingUp className="w-4 h-4" /> <span>+24 new listings</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm lg:col-span-2">
                        <h3 className="text-lg font-bold text-slate-800 mb-6">Revenue & User Growth</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={SALES_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Area type="monotone" dataKey="sales" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                                    <Area type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-800 mb-6">Sales by Category</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={CATEGORY_DATA} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="name" stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        cursor={{ fill: '#f8fafc' }}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar dataKey="value" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Table */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-6">Recent System Activity</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-slate-500 font-medium text-sm border-b border-slate-100">
                                    <th className="pb-3 px-4">Action</th>
                                    <th className="pb-3 px-4">User</th>
                                    <th className="pb-3 px-4">Role</th>
                                    <th className="pb-3 px-4">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                    <td className="py-3 px-4 flex items-center gap-2 text-slate-900 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-green-500" /> New Seller Registered
                                    </td>
                                    <td className="py-3 px-4 text-slate-600">Ram KC</td>
                                    <td className="py-3 px-4 text-slate-500">Farmer</td>
                                    <td className="py-3 px-4 text-slate-400">2 minutes ago</td>
                                </tr>
                                <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                    <td className="py-3 px-4 flex items-center gap-2 text-slate-900 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" /> Large Order Placed
                                    </td>
                                    <td className="py-3 px-4 text-slate-600">Hotel Annapurna</td>
                                    <td className="py-3 px-4 text-slate-500">Buyer (B2B)</td>
                                    <td className="py-3 px-4 text-slate-400">15 minutes ago</td>
                                </tr>
                                <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                    <td className="py-3 px-4 flex items-center gap-2 text-slate-900 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-amber-500" /> JTA Warning Issued
                                    </td>
                                    <td className="py-3 px-4 text-slate-600">System</td>
                                    <td className="py-3 px-4 text-slate-500">Automated</td>
                                    <td className="py-3 px-4 text-slate-400">1 hour ago</td>
                                </tr>
                                <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                    <td className="py-3 px-4 flex items-center gap-2 text-slate-900 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-purple-500" /> Payout Initiated
                                    </td>
                                    <td className="py-3 px-4 text-slate-600">Admin_01</td>
                                    <td className="py-3 px-4 text-slate-500">Admin</td>
                                    <td className="py-3 px-4 text-slate-400">3 hours ago</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-center">
                        <button className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
                            View Complete Activity Log <span className="ml-1">→</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
