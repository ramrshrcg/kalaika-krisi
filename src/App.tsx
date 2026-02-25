import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import MarketPage from "./pages/MarketPage";
import TrainingPage from "./pages/TrainingPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import InventoryPage from "./pages/InventoryPage";
import OrdersPage from "./pages/OrdersPage";
import ConsultationsPage from "./pages/ConsultationsPage";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";

import { ToastProvider } from "@/hooks/useToast";
import { CartProvider } from "@/hooks/useCart";
import { AuthProvider } from "@/hooks/useAuth";
import { MainLayout } from "@/layouts/MainLayout";

function App() {
    return (
        <Router>
            <ToastProvider>
                <AuthProvider>
                    <CartProvider>
                        <MainLayout>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/register" element={<RegisterPage />} />
                                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/product/:id" element={<ProductDetailPage />} />
                                <Route path="/market" element={<MarketPage />} />
                                <Route path="/training" element={<TrainingPage />} />
                                <Route path="/subscriptions" element={<SubscriptionsPage />} />
                                <Route path="/inventory" element={<InventoryPage />} />
                                <Route path="/orders" element={<OrdersPage />} />
                                <Route path="/consultations" element={<ConsultationsPage />} />
                                <Route path="/dashboard" element={<DashboardPage />} />
                                <Route path="/settings" element={<SettingsPage />} />
                                <Route path="/about" element={<AboutPage />} />
                            </Routes>
                        </MainLayout>
                    </CartProvider>
                </AuthProvider>
            </ToastProvider>
        </Router >
    );
}

export default App;
