import type { Metadata } from "next";
import Link from "next/link";
import { getBrandConfig } from "@/lib/brands";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `About ${brand.name} | Community Pharmacy in Paterson, NJ`,
    description: `Learn about ${brand.name}, a trusted community pharmacy in Paterson since 2015. We offer personalized care, free delivery, immunizations, and medication management.`,
    alternates: { canonical: "/about" },
  };
}

export default function AboutPage() {
  const brand = getBrandConfig();

  const pharmacyInfo = {
    founded: 2015,
    teamSize: 12,
    patientsServed: "500+",
    rating: "4.7★",
    specialties: [
      { name: "Medication Management", description: "Comprehensive reviews and adherence support" },
      { name: "Immunizations", description: "Flu, COVID-19, RSV, and more" },
      { name: "Health Screenings", description: "Blood pressure, diabetes, cholesterol" },
      { name: "Delivery Service", description: "Free local prescription delivery" },
    ],
    values: [
      { name: "Trust", description: "Building lasting relationships through honesty" },
      { name: "Compassion", description: "Caring for each patient like family" },
      { name: "Excellence", description: "Committed to the highest quality care" },
      { name: "Community", description: "Serving our neighbors in Paterson" },
    ],
    milestones: [
      { year: 2015, event: "Pharmacy founded in Paterson" },
      { year: 2017, event: "Launched free delivery service" },
      { year: 2019, event: "Expanded immunizations program" },
      { year: 2021, event: "Added health screening services" },
      { year: 2024, event: "Served 500+ patients and counting" },
    ],
    communityEvents: [
      {
        title: "Women's Health Event",
        description:
          "Hosted a private women's health session led by a specialist, creating a safe space for open discussions on topics often considered private.",
        date: "May 2026",
      },
      {
        title: "Health Fair Participation",
        description:
          "Organized and participated in community health fairs, providing free health screenings, educational materials, and family-friendly activities.",
        date: "August 2023",
      },
      {
        title: "Community Solidarity",
        description:
          "Closed our doors in solidarity with global events, demonstrating our commitment to humanity and community values beyond healthcare.",
        date: "December 2023",
      },
      {
        title: "Pharmacy Internship Program",
        description:
          "Welcomed pharmacy interns from LECOM School of Pharmacy, providing hands-on clinical experience and mentoring the next generation of pharmacists.",
        date: "July 2026",
      },
    ],
    patientStories: [
      {
        title: "A Patient's Legacy",
        description:
          "For nearly 12 years, a patient named George visited us almost daily, not just for medications but for connection. When he stopped coming, we checked on him, visited him in the hospital, and remained a source of support for his family. This is what community pharmacy means to us.",
      },
      {
        title: "More Than a Pharmacy",
        description:
          "We celebrate life's happy moments with our patients and stand beside families during the hardest ones. From birthdays to farewells, we are part of the fabric of our community.",
      },
      {
        title: "A Life-Saving Conversation",
        description:
          "A patient came in looking for a headache medication. Instead of simply handing over a bottle, we asked a few questions and checked their blood pressure. It was dangerously high. That conversation changed the next step in their care.",
      },
    ],
    clinicalServices: [
      {
        title: "Health Clarity Sessions",
        description:
          "Dedicated one-on-one time with a clinical pharmacist, personalized around your story, your concerns, and your health goals. Together, we create a plan that works for you.",
      },
      {
        title: "Diabetes Support",
        description:
          "From glucose testing to medication management and lifestyle education, we provide comprehensive support for patients living with diabetes.",
      },
      {
        title: "Medicare & Insurance Guidance",
        description:
          "We help patients navigate Medicare Part D plans and insurance questions, ensuring they get the coverage they need without the confusion.",
      },
    ],
  };

  return (
    <section className="min-h-screen bg-paper">

      {/* ===== HERO SECTION - Full Width ===== */}
      <div className="w-full bg-linear-to-br from-amber/5 via-paper to-sage/5 border-b border-ink/5 py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="font-mono text-sm uppercase tracking-wider text-amber-dark font-semibold">
              Our Story
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl lg:text-6xl leading-tight">
              About {brand.name}
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/70 max-w-3xl">
              <p>
                {brand.name} is a neighborhood pharmacy in Paterson, New Jersey,
                serving patients from {brand.address.street} with refill support,
                free local delivery, diabetes testing and education, immunizations,
                medication reviews, and everyday care that stays close to home.
              </p>
              <p>
                Founded in {pharmacyInfo.founded} with a vision to provide accessible
                healthcare, our pharmacy has grown into a trusted community partner
                serving over {pharmacyInfo.patientsServed} patients in the Paterson area.
                We believe healthcare begins with listening, and every patient has a story
                that deserves to be heard.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== QUICK STATS - Full Width ===== */}
      <div className="w-full border-b border-ink/5 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl border border-ink/5 bg-paper/40 p-5 text-center">
              <p className="text-2xl font-bold text-ink">{pharmacyInfo.founded}</p>
              <p className="text-sm text-ink/50">Founded</p>
            </div>
            <div className="rounded-xl border border-ink/5 bg-paper/40 p-5 text-center">
              <p className="text-2xl font-bold text-ink">{pharmacyInfo.teamSize}+</p>
              <p className="text-sm text-ink/50">Team Members</p>
            </div>
            <div className="rounded-xl border border-ink/5 bg-paper/40 p-5 text-center">
              <p className="text-2xl font-bold text-ink">{pharmacyInfo.patientsServed}</p>
              <p className="text-sm text-ink/50">Patients Served</p>
            </div>
            <div className="rounded-xl border border-ink/5 bg-paper/40 p-5 text-center">
              <p className="text-2xl font-bold text-ink">{pharmacyInfo.rating}</p>
              <p className="text-sm text-ink/50">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CONTENT - Full Width with Max Width ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">

        {/* ===== VALUES ===== */}
        <div>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-ink">Our Core Values</h2>
            <p className="mt-2 text-lg text-ink/70">
              Guiding principles that shape everything we do.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pharmacyInfo.values.map((value) => (
              <div key={value.name} className="rounded-xl border border-ink/5 bg-paper/40 p-5">
                <p className="text-lg font-semibold text-ink">{value.name}</p>
                <p className="text-sm text-ink/50 mt-1">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CLINICAL SERVICES ===== */}
        <div>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-ink">Our Clinical Services</h2>
            <p className="mt-2 text-lg text-ink/70">
              We go beyond traditional pharmacy services to provide comprehensive
              clinical care that addresses your unique health needs.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pharmacyInfo.clinicalServices.map((service) => (
              <div key={service.title} className="rounded-xl border border-ink/5 bg-paper/40 p-5">
                <p className="text-lg font-semibold text-ink">{service.title}</p>
                <p className="text-sm text-ink/50 mt-1">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PATIENT STORIES ===== */}
        <div>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-ink">Patient Stories</h2>
            <p className="mt-2 text-lg text-ink/70">
              These are the moments that define who we are and why we do what we do.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {pharmacyInfo.patientStories.map((story) => (
              <div key={story.title} className="rounded-xl border border-ink/5 bg-paper/40 p-5">
                <p className="text-lg font-semibold text-ink">{story.title}</p>
                <p className="text-sm text-ink/50 mt-1 leading-relaxed">{story.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== COMMUNITY EVENTS ===== */}
        <div>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-ink">Community Events & Engagement</h2>
            <p className="mt-2 text-lg text-ink/70">
              We believe in being an active and engaged member of the Paterson community.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pharmacyInfo.communityEvents.map((event) => (
              <div key={event.title} className="rounded-xl border border-ink/5 bg-paper/40 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-lg font-semibold text-ink">{event.title}</p>
                  <span className="text-sm text-ink/40 font-mono">{event.date}</span>
                </div>
                <p className="text-sm text-ink/50 mt-1 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SPECIALTIES ===== */}
        <div>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-ink">Our Specialties</h2>
            <p className="mt-2 text-lg text-ink/70">
              We offer a range of pharmacy services to support your health and wellness journey.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pharmacyInfo.specialties.map((service) => (
              <div key={service.name} className="rounded-xl border border-ink/5 bg-paper/40 p-5 text-center">
                <p className="text-lg font-semibold text-ink">{service.name}</p>
                <p className="text-sm text-ink/50 mt-1">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MILESTONES ===== */}
        <div>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-ink">Our Journey</h2>
            <p className="mt-2 text-lg text-ink/70">
              Key moments in our history.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {pharmacyInfo.milestones.map((milestone, index) => (
              <div key={index} className="flex flex-wrap items-baseline gap-4 border-b border-ink/5 pb-4 last:border-b-0">
                <span className="font-mono text-lg font-bold text-amber-dark w-20">{milestone.year}</span>
                <p className="text-lg text-ink/70">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== TESTIMONIALS ===== */}
        <div>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-ink">What Our Patients Say</h2>
            <p className="mt-2 text-lg text-ink/70">
              Real feedback from real people.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-ink/5 bg-paper/40 p-6">
              <p className="text-lg italic text-ink/70 leading-relaxed">
                &ldquo;The team at {brand.name} always takes the time to explain my medications clearly. I feel genuinely cared for every visit.&rdquo;
              </p>
              <div className="mt-4">
                <p className="text-sm font-medium text-ink">Sarah M.</p>
                <p className="text-sm text-ink/50">Paterson, NJ</p>
              </div>
            </div>
            <div className="rounded-xl border border-ink/5 bg-paper/40 p-6">
              <p className="text-lg italic text-ink/70 leading-relaxed">
                &ldquo;Their delivery service has been a lifesaver for my family. Reliable, friendly, and always on time.&rdquo;
              </p>
              <div className="mt-4">
                <p className="text-sm font-medium text-ink">David R.</p>
                <p className="text-sm text-ink/50">Paterson, NJ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA SECTION - Full Width ===== */}
      <div className="w-full bg-linear-to-br from-amber/5 via-paper to-sage/5 border-t border-ink/5 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl font-semibold text-ink">
                Come see the {brand.name} difference
              </h3>
              <div className="mt-3 space-y-1 text-lg text-ink/70">
                <p>{brand.address.street}</p>
                <p>{brand.address.city}, {brand.address.state} {brand.address.zip}</p>
                <p className="text-base text-ink/50">
                  {brand.hours.map((hour) => `${hour.day}: ${hour.time}`).join(" • ")}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href={`tel:${brand.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105"
              >
                Call Now
              </a>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-8 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-ink transition-all hover:border-ink/40 hover:bg-ink/5 hover:scale-105"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}