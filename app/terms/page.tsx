import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="pt-32 pb-20">
                <Container className="max-w-4xl">
                    <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
                    <p className="text-muted-foreground mb-6">Last updated: February 2026</p>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing or using SourceSmart AI's services, you agree to be bound by these Terms of Service
                                and all applicable laws and regulations. If you do not agree with any of these terms,
                                you are prohibited from using or accessing our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Permission is granted to temporarily access and use SourceSmart AI's platform for personal,
                                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
                                and under this license you may not modify or copy the materials, use the materials for any
                                commercial purpose, or attempt to decompile or reverse engineer any software contained on our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Responsibilities</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You are responsible for maintaining the confidentiality of your account and password and for
                                restricting access to your computer. You agree to accept responsibility for all activities
                                that occur under your account or password.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Availability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                SourceSmart AI reserves the right to modify or discontinue, temporarily or permanently,
                                the service with or without notice. We shall not be liable to you or any third party for
                                any modification, suspension, or discontinuance of the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The service and its original content, features, and functionality are and will remain the
                                exclusive property of SourceSmart AI. Our trademarks and trade dress may not be used in
                                connection with any product or service without the prior written consent of SourceSmart AI.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                In no event shall SourceSmart AI, nor its directors, employees, partners, agents, suppliers,
                                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive
                                damages, including without limitation, loss of profits, data, use, goodwill, or other
                                intangible losses.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Governing Law</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms shall be governed and construed in accordance with the laws of the State of California,
                                United States, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                                What constitutes a material change will be determined at our sole discretion.
                                By continuing to access or use our service after those revisions become effective,
                                you agree to be bound by the revised terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms, please contact us at:
                                <br /><br />
                                <strong className="text-foreground">SourceSmart AI</strong><br />
                                Email: legal@sourcesmart.ai<br />
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
