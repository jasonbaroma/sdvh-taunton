"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpeg",
    alt: "Unbranded rental van on a tree-lined rural road in the Taunton area",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire Taunton"
      heroDescription="Vehicle Hire Taunton for cars, vans, minibuses and trucks, with practical booking options for personal trips, business use, moving day and longer-distance travel."
      serviceAreasTitle="Vehicle hire across Taunton and nearby towns"
      serviceAreasDescription="Our vehicle hire service covers Taunton and nearby Somerset towns, making it easy to arrange cars, vans, minibuses and trucks for local journeys, longer trips and one-way bookings."
      infoContentSectionKicker="Local hire advice"
      infoContentSectionTitle="Practical vehicle hire guidance for Taunton journeys"
      infoContentSectionIntro="Hiring a vehicle in Taunton is often the simplest way to handle journeys that do not fit around your usual car, timetable or carrying space. With major road links nearby and a wide mix of residential, business and rural routes, the area suits everything from family trips to trade transport."
      infoContentBlock1Title="Getting out of Taunton efficiently"
      infoContentBlock1Body="Taunton works well as a starting point for journeys across Somerset thanks to quick access to the M5 at junction 25 and strong links on the A38 and A358. That makes it a practical place to collect or receive a hire vehicle for local driving or longer runs."
      infoContentBlock2Title="Useful for moving, work and local logistics"
      infoContentBlock2Body="If you are hiring for a move, delivery round or business trip, choosing delivery and collection can save time around busy town-centre traffic and parking. It is especially useful for home moves, office jobs and scheduled work across the wider county."
      infoContentBlock3Title="A strong base for wider Somerset travel"
      infoContentBlock3Body="Taunton sits within easy reach of the Quantocks, Exmoor routes, Bridgwater, Wellington and the south coast corridors. Whether you need a car for flexible travel, a minibus for group transport or a truck for heavier loads, the town is well placed for straightforward onward travel."
      bottomCtaTitle="Book the right vehicle for Taunton"
      bottomCtaDescription="Tell us what you need to move, carry or drive, and we will help you arrange the right vehicle in Taunton and the surrounding area."
      secondaryCtaTitle="Talk through your Taunton hire"
      secondaryCtaDescription="If you are comparing options for a journey, move or work booking, we can help you line up a suitable vehicle and practical hire terms from Taunton."
      faqs={[
        { question: "What types of vehicles can I hire in Taunton?", answer: "We offer a broad self-drive range including cars, vans, minibuses and trucks, so you can choose a vehicle that suits anything from a short local trip to a larger move or business job." },
        { question: "Can you deliver the hire vehicle to me?", answer: "Yes, delivery and collection can often be arranged, which is useful if you are at home, at work or planning a move and want to save time on pickup logistics." },
        { question: "Is one-way vehicle hire available?", answer: "One-way hire is available on selected bookings, subject to route and vehicle type. It is a practical option if you are relocating or finishing your journey in another part of the UK." },
        { question: "Is insurance included with the hire?", answer: "Many hires include insurance as part of the booking. The exact cover depends on the vehicle and journey, so it is best to confirm the details when arranging your hire." },
        { question: "Can I take a hire vehicle from Taunton into Europe?", answer: "European travel can be arranged on certain vehicles with advance notice. Let us know your route before booking so the correct paperwork and vehicle can be prepared." },
      ]}
    />
  );
}
