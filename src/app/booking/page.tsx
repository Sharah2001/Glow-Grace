import BookingForm from '../../components/booking/BookingForm';
import SectionHeader from '../../components/ui/SectionHeader';

export default function BookingPage() {
  return (
    <div className="pt-28 pb-20 bg-ivory/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Banner Headers */}
        <SectionHeader
          eyebrow="The Concierge"
          heading="Secure Your Self-Care Sanctuary"
          subtext="Uncompromising, private cosmetic-grade dermal and aesthetic therapies. Select your treatment, configure your preferred date, and verify your details below."
          align="center"
        />

        {/* Multi-step form wrapper */}
        <div className="mt-8 animate-fade-up">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
