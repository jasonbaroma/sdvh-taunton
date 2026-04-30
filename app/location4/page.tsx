"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpeg",
    alt: "Clean rental van driving along a leafy avenue near Street in Somerset",
  };

  return (
    <HomePage
      currentLocationLabel="Street"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Street"
      heroDescription="From retail trips and local deliveries to family travel and business transport, our vehicle hire in Street covers cars, vans, minibuses and trucks with flexible booking support."
      serviceAreasTitle="Serving Street and the surrounding area"
      serviceAreasDescription="Covering Street, nearby Glastonbury and surrounding Somerset roads, with vehicle hire suited to shopping runs, local moves, work travel and longer bookings."
      infoContentSectionKicker="Coastal travel advice"
      infoContentSectionTitle="Useful vehicle hire for Street and nearby Somerset routes"
      infoContentSectionIntro="Street is well placed for practical travel across mid-Somerset, with good links towards Glastonbury, Wells and the A39 corridor. That makes local vehicle hire useful for everything from stock collection and home projects to family trips and temporary business transport when you need extra space or carrying capacity."
      infoContentBlock1Title="Easy links from the coast to the motorway"
      infoContentBlock1Body="Burnham-on-Sea benefits from quick links to the M5 at junction 22 via Edithmead, making it easy to head toward Bristol, Taunton or Exeter. That is especially useful if you want the convenience of a coastal starting point without losing access to major road connections."
      infoContentBlock2Title="Seasonal traffic and practical access"
      infoContentBlock2Body="Around the seafront and town centre, parking and access can feel tighter in busier visitor periods, so larger vans are easier to manage if collections, loading or returns are planned outside peak beach traffic. Fuel stops around the approach roads and motorway side are often the most convenient."
      infoContentBlock3Title="When hiring is especially useful here"
      infoContentBlock3Body="Burnham-on-Sea hires often suit holiday accommodation changeovers, family outings, event transport and household moves. They are also useful for trips toward Brean, Weston-super-Mare and wider Somerset where extra seats or luggage space can make a real difference."
      bottomCtaTitle="Start your Street vehicle hire"
      bottomCtaDescription="Planning transport in Street? We can help you secure a suitable hire vehicle for shopping trips, business use, house moves or longer journeys across Somerset."
      secondaryCtaTitle="Need help choosing a Street hire vehicle?"
      secondaryCtaDescription="If you are weighing up options for Street, we can help you choose the right vehicle for passenger numbers, luggage, tools or delivery work."
      faqs={[
        { question: "Do you offer delivery and collection in Street?", answer: "Yes, delivery and collection can often be arranged in Street, depending on the vehicle chosen and the booking schedule." },
        { question: "Can I book one-way vehicle hire from Street?", answer: "Yes, subject to availability. If you need to return the vehicle to a different branch or service area after starting in Street, ask when booking and we will confirm the options." },
        { question: "Which hire vehicle is best for a seaside or family trip?", answer: "A car or minibus can work well for family and group outings, while a van is usually more practical for moves, furniture transport or equipment jobs." },
        { question: "What vehicles can I hire in Street?", answer: "We offer a wide range, including cars for everyday travel, vans for moving or deliveries, minibuses for group transport and trucks for heavier working use in and around Street." },
        { question: "Does the hire include insurance?", answer: "Many hires include insurance, but the exact arrangement depends on the vehicle category and booking details. We will confirm that with you before travel." },
      ]}
    />
  );
}
