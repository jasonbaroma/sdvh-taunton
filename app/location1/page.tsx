"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpg",
    alt: "Modern rental car on a quiet country lane near Wellington in Somerset",
  };

  return (
    <HomePage
      currentLocationLabel="Wellington"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Wellington"
      heroDescription="Vehicle Hire in Wellington for everyday driving, home moves, trade work and group travel. Flexible self-drive options backed by a wider Taunton fleet."
      serviceAreasTitle="Serving Wellington and nearby areas"
      serviceAreasDescription="We support Wellington and nearby parts of Somerset, with access to a wider vehicle hire service covering local towns, villages and key routes around the M5 corridor."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Choosing the right vehicle for Wellington journeys"
      infoContentSectionIntro="Wellington sits in a practical spot for commuting, business travel and access to surrounding Somerset and Devon routes. Vehicle hire here is often about matching the job properly, whether that means a car for flexibility, a van for lifting capacity or a minibus for group plans."
      infoContentBlock1Title="Well connected for work and regional travel"
      infoContentBlock1Body="Wellington is well placed for trips into Taunton, journeys along the M5 and travel out towards the Blackdown Hills. That makes hired cars and vans especially useful when your normal vehicle is not suitable for the route or the load."
      infoContentBlock2Title="A sensible choice for moving and trade jobs"
      infoContentBlock2Body="For local moves, furniture collection or property clear-outs, hiring a van for the day can be simpler than trying to manage everything with a smaller vehicle. It also helps local trades handle short-term demand without adding permanent fleet costs."
      infoContentBlock3Title="Useful for shared trips and event travel"
      infoContentBlock3Body="If you are organising transport for a family occasion, club outing or airport run, a minibus can keep the group together and reduce the need for multiple cars. It is a practical option for shared journeys starting from Wellington."
      bottomCtaTitle="Arrange vehicle hire in Wellington"
      bottomCtaDescription="If you need a car, van, minibus or truck in Wellington, we can help arrange a practical hire that fits the journey."
      secondaryCtaTitle="Need help deciding?"
      secondaryCtaDescription="Speak to our team if you want help comparing vehicle sizes, delivery options or longer-distance hire from Wellington."
      faqs={[
        { question: "Can I book vehicle hire in Wellington?", answer: "Yes, we can help with vehicle hire for Wellington, including cars, vans, minibuses and trucks depending on your needs and dates." },
        { question: "Do you deliver vehicles to Wellington?", answer: "In many cases, yes. Delivery and collection may be available in and around Wellington, subject to the booking details." },
        { question: "What van hire is available for moving jobs?", answer: "Vans are commonly hired for house moves, furniture collection, trade work and local delivery runs. We can help match the size to the job." },
        { question: "Is one-way hire available from Wellington?", answer: "Yes, one-way hire may be possible on selected bookings. Let us know the route and we will confirm availability." },
        { question: "How do I get started with a booking?", answer: "Just contact us with your dates, licence details and the type of vehicle you need. We will guide you through the options." },
      ]}
    />
  );
}
