"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/callington-country-road.jpeg",
    alt: "Rental estate car on a quiet rural road near Chard in early morning light",
  };

  return (
    <HomePage
      currentLocationLabel="Chard"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Chard"
      heroDescription="We offer dependable vehicle hire in Chard for personal trips, business transport, van jobs, group travel and heavier-duty work across Somerset, Devon and Dorset routes."
      serviceAreasTitle="Serving Chard and the surrounding area"
      serviceAreasDescription="We cover Chard and surrounding parts of south Somerset, with hire support for nearby villages, business premises and residential addresses as well as onward routes into Devon and Dorset."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Practical vehicle hire advice for Chard journeys"
      infoContentSectionIntro="Chard sits close to county borders and key west-country routes, so vehicle hire here often supports practical journeys rather than short local hops. Whether you need a car for flexible travel, a van for moving goods, a minibus for group trips or a truck for heavier work, the town is well placed for onward travel in several directions."
      infoContentBlock1Title="Getting in and out of Chard"
      infoContentBlock1Body="Chard works well for hires that need quick access to the A30 and the A358, whether you are heading towards Taunton, Ilminster or the Dorset border. That makes it a practical base for vans, minibuses and larger vehicles that need straightforward road links without starting in a bigger town centre."
      infoContentBlock2Title="Fuel and stop planning"
      infoContentBlock2Body="For longer runs, most drivers top up around the main approach roads and retail areas before joining the wider route network. If you are collecting goods or travelling with a full load, it helps to plan fuel and comfort stops before heading deeper into rural Somerset, East Devon or West Dorset."
      infoContentBlock3Title="Useful hire patterns locally"
      infoContentBlock3Body="Many hires in Chard are for house moves, trade work, event transport or family journeys where extra space matters more than city-centre driving. A delivered vehicle can save a separate trip, and one-way hire can be useful if your route finishes away from town."
      bottomCtaTitle="Reserve vehicle hire in Chard"
      bottomCtaDescription="Tell us what you need in Chard and we will help arrange a suitable hire vehicle for local driving, long-distance travel, moving work or commercial use."
      secondaryCtaTitle="Need help choosing the right vehicle in Chard?"
      secondaryCtaDescription="Speak to our team about the kind of journey you are making and we will help arrange a suitable car, van, minibus or truck for Chard."
      faqs={[
        { question: "What vehicles do you offer in Bridgwater?", answer: "Bridgwater customers can book from a wide fleet that includes cars, vans, minibuses and trucks for both domestic and commercial use." },
        { question: "Can you deliver a hire vehicle in Bridgwater?", answer: "Yes, delivery and collection can often be arranged in Bridgwater, which is especially useful for business premises, home moves and scheduled site work." },
        { question: "Which hire type suits commercial use in Bridgwater?", answer: "A van or truck is often the best fit for deliveries, equipment or site-related work, while cars and minibuses are available for travel-focused bookings." },
        { question: "Can I start in Bridgwater and return elsewhere?", answer: "One-way hire may be available on selected vehicles and routes. If you need to finish outside Bridgwater, mention that at the booking stage." },
        { question: "Is insurance included with Bridgwater vehicle hire?", answer: "Many hires include insurance, with details depending on the vehicle and booking. We will confirm the cover that applies before you travel." },
      ]}
    />
  );
}
