import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                        <Shield className="w-8 h-8" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
                    <p className="text-slate-500 text-lg mb-10">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-8 text-slate-600 leading-relaxed max-w-3xl">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                            <p className="mb-4">
                                At Kalika Krisi, we collect information to provide better services to all our users. Information we collect includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Account Information:</strong> Name, phone number, email address, and role (Buyer, Seller, Admin, Expert) upon registration.</li>
                                <li><strong>Transaction Data:</strong> Details of your purchases, subscriptions, and catch-weight adjustments. Please note that payment details are processed securely by eSewa or Khalti and are not stored directly on our servers.</li>
                                <li><strong>Usage Data:</strong> Information about how you navigate and interact with our platform.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">We use the collected data for various purposes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide, maintain, and improve the Platform.</li>
                                <li>To manage your account, including subscriptions and JTA consultations.</li>
                                <li>To provide customer support and respond to your queries.</li>
                                <li>To monitor the usage of the Platform and detect, prevent, and address technical issues.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security and Traceability</h2>
                            <p>
                                We prioritize the security of your data. We implement reasonable security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. Furthermore, our Unique Identification Number (UIN) system for livestock is designed with data integrity in mind, ensuring a secure and transparent supply chain from birth to sale.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Sharing Your Information</h2>
                            <p>
                                We do not sell your personal information. We may share necessary transaction data with our affiliated farmers (Sellers) to fulfill your orders from the marketplace, or with our affiliated JTAs (Experts) if you request agricultural consultation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at privacy@kalikakrisi.com or call our active support center.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
