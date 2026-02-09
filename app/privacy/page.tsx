import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="pt-32 pb-20">
                <Container className="max-w-4xl">
                    <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-6">Last updated: February 2026</p>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                SourceSmart AI collects information you provide directly to us, such as when you create an account,
                                request a demo, contact us, or use our services. This may include your name, email address,
                                company name, phone number, and any other information you choose to provide.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use the information we collect to provide, maintain, and improve our services,
                                process transactions, send you technical notices and support messages,
                                respond to your comments and questions, and communicate with you about products, services,
                                and events offered by SourceSmart AI.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not share your personal information with third parties except as described in this policy.
                                We may share information with vendors, consultants, and other service providers who need access
                                to such information to carry out work on our behalf.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We take reasonable measures to help protect information about you from loss, theft, misuse,
                                and unauthorized access, disclosure, alteration, and destruction. All data is encrypted
                                in transit and at rest using industry-standard encryption protocols.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use cookies and similar technologies to collect information about your browsing activities
                                and to personalize your experience. You can control cookies through your browser settings
                                and other tools.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You have the right to access, correct, or delete your personal information.
                                You may also have the right to object to or restrict certain processing of your information.
                                To exercise these rights, please contact us at privacy@sourcesmart.ai.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br /><br />
                                <strong className="text-foreground">SourceSmart AI</strong><br />
                                Email: privacy@sourcesmart.ai<br />
                                Address: 123 Innovation Drive, San Francisco, CA 94105
                            </p>
                        </section>
                    </div>
                </Container>
            </section>
            <Footer />
        </main>
    );
}
