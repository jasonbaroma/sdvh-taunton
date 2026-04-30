"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpeg",
    alt: "Rental crossover at a scenic roadside stop near Cheddar with green hills and stone walls",
  };

  return (
    <HomePage
      currentLocationLabel="Cheddar"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Cheddar"
      heroDescription="We provide practical vehicle hire in Cheddar for countryside travel, family outings, moving jobs and business transport, with cars, vans, minibuses and trucks available."
      serviceAreasTitle="Vehicle hire around Cheddar"
      serviceAreasDescription="Serving Cheddar and nearby Mendip villages with vehicle hire for local errands, scenic drives, family travel, event transport and heavier practical jobs."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Hiring a vehicle for Cheddar roads and wider Mendip travel"
      infoContentSectionIntro="Cheddar sits on an important route between Wells, Weston-super-Mare and the wider Mendip area, making it a useful base for both leisure and practical travel. Whether you are planning a trip through Cheddar Gorge, need a van for household jobs or want extra seats for a family outing, vehicle hire in Cheddar gives you more room and better route flexibility."
      infoContentBlock1Title="Key roads around Ilminster"
      infoContentBlock1Body="Ilminster is strongly positioned for east-west travel thanks to the A303, while the A358 connects drivers north toward Taunton and south toward Chard. That combination is useful if you are hiring for regional work, event transport or deliveries that need reliable access in several directions."
      infoContentBlock2Title="Stopping, fuelling and loading sensibly"
      infoContentBlock2Body="For fuel and quick stops, drivers often use services and filling stations on or near the A303 approaches, which can be more convenient than waiting until you are in a smaller village area. If you are taking out a larger vehicle, planning loading away from the narrowest central streets is sensible."
      infoContentBlock3Title="Best uses for a hire vehicle here"
      infoContentBlock3Body="Ilminster hires regularly suit trade work, market and event logistics, and trips to surrounding villages where carrying tools, stock or display equipment in a standard car is awkward. The town also works well for family travel toward South Somerset and the coast when extra space makes the journey easier."
      bottomCtaTitle="Arrange vehicle hire in Cheddar"
      bottomCtaDescription="Let us know your plans in Cheddar and we will help arrange a suitable vehicle for local driving, group trips, moving jobs or commercial use."
      secondaryCtaTitle="Talk through your Cheddar hire options"
      secondaryCtaDescription="Not sure what will suit your Cheddar journey? We can talk through vehicle sizes, passenger space and route needs before you book."
      faqs={[
        { question: "Can vehicles be delivered to Cheddar?", answer: "Yes, delivery and collection can often be arranged for Cheddar bookings depending on the vehicle, location and schedule required." },
        { question: "Is one-way hire possible from Cheddar?", answer: "Yes, one-way hire may be available from Cheddar on selected bookings. It depends on the vehicle type, destination and booking dates." },
        { question: "What if I need a vehicle for business or event use?", answer: "A vehicle with more carrying space is usually the best option for market setups, equipment runs or stock transport. We can help you choose based on load and route." },
        { question: "Is insurance included with Cheddar vehicle hire?", answer: "Many hires include insurance as part of the booking. The exact cover and any conditions will depend on the vehicle and driver details, so we confirm that before you travel from Cheddar." },
        { question: "What kind of vehicle is best for a Cheddar group trip or day out?", answer: "Some vehicles can travel into Europe with prior approval. Let us know before booking so any documentation and vehicle checks can be handled correctly." },
      ]}
    />
  );
}
