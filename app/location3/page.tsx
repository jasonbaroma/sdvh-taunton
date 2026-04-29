"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpg",
    alt: "White van on a coastal road near Burnham-on-Sea with the sea in the background",
  };

  return (
    <HomePage
      currentLocationLabel="Burnham-on-Sea"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Bridgwater"
      heroDescription="Vehicle Hire in Bridgwater for commercial fleets, local deliveries, home moves and everyday transport. A practical self-drive service with access to a broad range of vehicles."
      serviceAreasTitle="Vehicle hire around Bridgwater"
      serviceAreasDescription="We cover Bridgwater and nearby Somerset locations, supporting residential and commercial customers across local estates, town routes and surrounding road links."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Vehicle hire that suits Bridgwater workloads"
      infoContentSectionIntro="In Bridgwater, vehicle hire is often driven by practical demands rather than occasional convenience. With major road links, active business areas and regular movement between Somerset towns, customers usually need transport that is ready for work, carrying capacity or efficient shared travel."
      infoContentBlock1Title="Useful for trade, sites and logistics"
      infoContentBlock1Body="Bridgwater is a busy working town with strong road connections, so hire demand often comes from businesses needing extra capacity at short notice. Vans and trucks can help cover peak workloads, project work and planned delivery runs without tying you into long-term commitments."
      infoContentBlock2Title="A better fit for bigger household jobs"
      infoContentBlock2Body="For personal use, a van can make moving house, clearing storage or collecting bulky items far more manageable. Hiring the right size from the outset saves repeat journeys and helps the day run to plan."
      infoContentBlock3Title="Flexible options beyond vans"
      infoContentBlock3Body="Cars and minibuses also have a place in Bridgwater when people need temporary replacement transport, staff movement or shared travel for events. Choosing a vehicle around passenger numbers and route length makes the whole journey easier."
      bottomCtaTitle="Book a vehicle for Bridgwater"
      bottomCtaDescription="Let us help you sort dependable vehicle hire in Bridgwater for work travel, moving jobs, deliveries or group transport."
      secondaryCtaTitle="Compare vehicle options"
      secondaryCtaDescription="From a short-term van to a larger commercial vehicle, we can help you narrow down the best hire for the task."
      faqs={[
        { question: "Is Bridgwater covered by your hire service?", answer: "Yes, we provide vehicle hire for Bridgwater, including cars, vans, minibuses and trucks for both private and business use." },
        { question: "What vehicles suit commercial use in Bridgwater?", answer: "Vans and trucks are popular for trade work, deliveries, site support, stock movement and local relocation jobs in and around Bridgwater." },
        { question: "Can I organise a one-way rental?", answer: "Yes, one-way hire may be arranged on selected bookings. This can be useful for relocation and longer delivery routes." },
        { question: "Do you offer delivery to Bridgwater addresses?", answer: "In many cases, yes. Delivery and collection can often be discussed when you book, depending on address and vehicle type." },
        { question: "How do I request a hire in Bridgwater?", answer: "Contact us with your dates, the type of vehicle you need and how it will be used. We will confirm the suitable options." },
      ]}
    />
  );
}
