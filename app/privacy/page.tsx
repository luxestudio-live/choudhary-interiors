import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-16 sm:py-24 bg-gradient-to-br from-coral to-teal">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/90 max-w-2xl">
              We respect your privacy and are committed to protecting your personal information.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-soft-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 space-y-6">
              <p className="text-charcoal">
                This website collects information you provide through the contact form (such as name,
                email, phone, and project details) solely to respond to your enquiry and provide services.
              </p>
              <p className="text-charcoal">
                We do not sell or share your information with third parties. Your data is stored securely
                and used only for communication about your project.
              </p>
              <p className="text-charcoal">
                If you have any questions or requests regarding your data, please contact us at
                hello@choudharyinteriors.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
