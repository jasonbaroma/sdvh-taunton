"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpeg",
    alt: "Compact rental vehicle driving along a country lane near Wellington in soft morning light",
  };

  return (
    <HomePage
      currentLocationLabel="Wellington"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Wellington"
      heroDescription="Vehicle Hire Wellington with flexible options for local errands, home moves, business transport and longer trips via the A38 and nearby M5 links."
      serviceAreasTitle="Serving Wellington and nearby routes"
      serviceAreasDescription="Serving Wellington and nearby parts of West Somerset and the Blackdown Hills, with practical vehicle hire for local moves, work travel, family trips and longer journeys across the South West."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="Planning vehicle hire around Wellington and the M5"
      infoContentSectionIntro="Wellington is a practical place to arrange vehicle hire if you need fast access to Somerset and Devon routes without the pressure of starting in a larger urban area. Customers here often hire for moving day, business appointments, family visits and jobs that need more carrying space than an everyday car can offer."
      infoContentBlock1Title="Road links that make collection practical"
      infoContentBlock1Body="Wellington is well placed for road access, sitting close to junction 26 of the M5 and directly on the A38. That makes it useful for drivers heading toward Taunton, Tiverton or Exeter, and ideal for hires that need quick motorway connections without starting in a larger town centre."
      infoContentBlock2Title="Fuel stops and town-centre access"
      infoContentBlock2Body="For fuel and quick stop-offs, the Chelston area by the motorway is a familiar point for drivers, with services and easy rejoining of the route. Around the town itself, Fore Street and surrounding streets can be tighter, so larger vans are easier to manage if loading is planned outside busier periods."
      infoContentBlock3Title="Useful for moves, work and rural trips"
      infoContentBlock3Body="Wellington hires often suit home moves, trade work and countryside travel toward the Blackdown Hills. If you are carrying equipment or heading to villages beyond the main road network, having the right-sized van or sturdy car can make the day far more straightforward."
      bottomCtaTitle="Need vehicle hire in Wellington?"
      bottomCtaDescription="Whether you need extra space for a house move, a reliable van for deliveries or a car for flexible travel from Wellington, we can help you arrange it."
      secondaryCtaTitle="Ready to arrange your Wellington hire?"
      secondaryCtaDescription="If you already know your dates and vehicle type, get in touch and we will help you sort out a straightforward Wellington booking."
      faqs={[
        { question: "What can I hire in Wellington?", answer: "Yes, Wellington customers can book cars, vans, minibuses and trucks, depending on availability and the type of journey planned." },
        { question: "Can the vehicle be delivered in Wellington?", answer: "Delivery and collection can often be arranged in Wellington, which is helpful if you are near the town centre, residential areas or business premises close to the A38." },
        { question: "Which hire vehicle suits a move in Wellington?", answer: "For local moves, a van is usually the most practical choice, while larger removals may need a Luton-style vehicle or another larger option depending on load size." },
        { question: "Do you offer one-way hire from Wellington?", answer: "One-way hire may be possible if you are starting in Wellington and finishing elsewhere. Availability depends on the vehicle and route." },
        { question: "What do I need before collecting a hire vehicle?", answer: "Bring your driving licence and any booking details requested at confirmation. For some hires, proof of address or additional checks may also be needed." },
      ]}
    />
  );
}
