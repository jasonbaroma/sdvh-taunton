"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpeg",
    alt: "Estate car and white van on a tree-lined rural road in the Taunton area",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire Taunton"
      heroDescription="Vehicle Hire in Taunton for cars, vans, minibuses and trucks. Practical self-drive options for home moves, business use, group travel and everyday journeys."
      serviceAreasTitle="Areas we cover around Taunton"
      serviceAreasDescription="We provide vehicle hire across Taunton and nearby Somerset towns, helping customers book the right vehicle for local trips, house moves, business use and longer journeys."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="What makes vehicle hire useful in Taunton"
      infoContentSectionIntro="Hiring a vehicle in Taunton can be a practical way to handle everyday travel, larger jobs and longer planned journeys. With a mix of town driving, motorway access and rural routes across Somerset, customers often need a vehicle that fits a specific task rather than a one-size-fits-all option."
      infoContentBlock1Title="Hiring for local routes and longer runs"
      infoContentBlock1Body="Taunton works well as a base for both local driving and longer regional trips. With quick access towards the M5, nearby business parks and surrounding villages, hired vehicles are often useful for trade jobs, family travel and time-sensitive deliveries."
      infoContentBlock2Title="Useful options for moves and workload peaks"
      infoContentBlock2Body="If you are moving house, clearing storage or picking up stock, the right van or truck can save multiple trips. Delivery and collection can also make the process easier if you want the vehicle brought to your address or workplace."
      infoContentBlock3Title="Planning group travel from Taunton"
      infoContentBlock3Body="Taunton also suits group travel, whether you are organising transport for family events, sports trips or shared weekends away. A minibus can simplify travel plans and keep everyone on the same route from the start."
      bottomCtaTitle="Book the right vehicle for Taunton"
      bottomCtaDescription="Tell us what you need to move, carry or reach, and we will help match you with the right vehicle for the job."
      secondaryCtaTitle="Need a hand choosing?"
      secondaryCtaDescription="Tell us what you need to carry, how many people are travelling and where you are heading, and we will help point you to a suitable vehicle."
      faqs={[
        { question: "What types of vehicles can I hire?", answer: "We hire out cars, vans, minibuses and trucks, so whether you need a runabout, a moving van or a larger commercial vehicle, we can help." },
        { question: "Do you offer delivery and collection?", answer: "In many cases, yes. Delivery and collection can often be arranged to make the hire more convenient, depending on location and vehicle type." },
        { question: "Can I book a one-way rental?", answer: "One-way hire is available on selected bookings. Let us know your start point and destination and we will confirm what is possible." },
        { question: "Can I take the vehicle to Europe?", answer: "Some hires can be arranged for European travel, but this needs to be agreed in advance so the correct vehicle and documents can be prepared." },
        { question: "How do I arrange a booking?", answer: "You can contact the team with your dates, licence details, route and vehicle preference. We will talk you through the suitable options and next steps." },
      ]}
    />
  );
}
