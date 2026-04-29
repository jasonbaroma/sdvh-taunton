"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpg",
    alt: "Silver SUV on an open Somerset road near Bridgwater under a wide sky",
  };

  return (
    <HomePage
      currentLocationLabel="Bridgwater"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Minehead"
      heroDescription="Vehicle Hire in Minehead for coastal stays, family visits, local moves and business travel. Cars, vans, minibuses and trucks available through our wider Somerset service."
      serviceAreasTitle="Minehead and the surrounding West Somerset area"
      serviceAreasDescription="Our Minehead coverage extends across West Somerset, supporting customers in the town and nearby coastal and rural communities with flexible vehicle hire."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="How vehicle hire fits life in Minehead"
      infoContentSectionIntro="Vehicle hire in Minehead often needs to fit a mix of local errands, holiday travel and practical transport jobs. In a coastal town where journeys can range from short in-town trips to longer drives inland, having the right vehicle makes planning much easier."
      infoContentBlock1Title="Practical travel for coast and countryside"
      infoContentBlock1Body="Minehead is a place where plans often mix local driving with longer runs back across Somerset and beyond. Hiring a car can be useful for visitors, temporary replacement travel or anyone wanting a more suitable vehicle for the route."
      infoContentBlock2Title="Helpful for property and seasonal workloads"
      infoContentBlock2Body="If you are collecting furniture, moving between properties or handling supplies for holiday accommodation, a van gives you the space to do the job in fewer trips. For seasonal demand, short-term hire can make more sense than owning a larger vehicle year-round."
      infoContentBlock3Title="Group transport made simpler"
      infoContentBlock3Body="Minehead is also a strong starting point for family days out and group travel across Exmoor and the Somerset coast. A minibus can make shared plans easier, especially when several people would otherwise need separate cars."
      bottomCtaTitle="Start your Minehead hire enquiry"
      bottomCtaDescription="From local errands to larger transport jobs, we can help organise the right self-drive vehicle for Minehead bookings."
      secondaryCtaTitle="Talk through your options"
      secondaryCtaDescription="If you are weighing up a car for comfort, a van for capacity or a minibus for shared travel, we can talk through the options."
      faqs={[
        { question: "Do you cover Minehead for vehicle hire?", answer: "Yes, we can arrange vehicle hire for Minehead, with options that suit personal travel, removals, group outings and commercial use." },
        { question: "When is car hire useful in Minehead?", answer: "Cars are often chosen for coastal stays, visiting family, replacement travel and getting around West Somerset with more flexibility." },
        { question: "Can I hire a van for a move in Minehead?", answer: "Yes, van hire can be useful for moving into or out of the area, collecting larger items or handling temporary business demand." },
        { question: "Is delivery available around Minehead?", answer: "Some bookings can include delivery and collection, depending on the vehicle and location. Ask when you enquire and we will confirm the options." },
        { question: "Can I request European travel?", answer: "Yes, on selected hires. If you need to travel beyond the UK, speak to us before booking so the arrangements can be checked in advance." },
      ]}
    />
  );
}
