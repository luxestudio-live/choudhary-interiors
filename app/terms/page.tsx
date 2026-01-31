import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-16 sm:py-24 bg-gradient-to-br from-coral to-teal">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-white/90 max-w-2xl">
              Please review these terms before using our website or services.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-soft-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 space-y-6">
              <p className="text-charcoal">
                All content on this website is provided for informational purposes. Project timelines,
                budgets, and design concepts are indicative and may vary based on site conditions and
                client requirements.
              </p>
              <p className="text-charcoal">
                By submitting your information, you consent to be contacted regarding your enquiry.
                We reserve the right to update these terms at any time.
              </p>
              <p className="text-charcoal">
                For questions, contact us at hello@choudharyinteriors.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
