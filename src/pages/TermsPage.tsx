import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                        <FileText className="w-8 h-8" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Terms of Service</h1>
                    <p className="text-slate-500 text-lg mb-10">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-8 text-slate-600 leading-relaxed max-w-3xl">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the Kalika Krisi digital platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. The "Catch-Weight" Policy</h2>
                            <p className="mb-4">
                                Certain items, particularly livestock or bulk harvested goods, are sold on a "Catch-Weight" basis. By purchasing a Catch-Weight item, you acknowledge:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The price displayed at checkout is an <strong>estimate</strong> based on the product's estimated weight.</li>
                                <li>The final price will be determined upon the physical scaling of the specific item allocated to your order.</li>
                                <li>The final charge may be slightly higher or lower than the estimate. You agree to pay the final calculated amount required before final delivery or pickup.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Accounts and Roles</h2>
                            <p className="mb-4">When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Sellers:</strong> Must ensure all inventory details (especially UINs and Catch-Weight data) are accurately inputted into the system.</li>
                                <li><strong>Buyers:</strong> Must ensure delivery details are accurate and must commit to paying the final invoice, including catch-weight adjustments.</li>
                                <li><strong>Experts (JTAs):</strong> Must provide advice in accordance with scientific standards, though Kalika Krisi is not liable for crop failure resulting from implemented advice.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Subscriptions and Payments</h2>
                            <p>
                                CSA Subscriptions (e.g., Weekly Vegetable Boxes) are billed on a recurring basis as selected during purchase. Payments are processed securely via third-party gateways (eSewa, Khalti). We reserve the right to refuse or cancel your order if fraud or an unauthorized/illegal transaction is suspected.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Modifications to Service</h2>
                            <p>
                                We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
