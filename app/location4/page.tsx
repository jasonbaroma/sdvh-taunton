"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpg",
    alt: "White van on a Somerset lane near Frome bordered by stone walls and trees",
  };

  return (
    <HomePage
      currentLocationLabel="Frome"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Street"
      heroDescription="Vehicle Hire in Street for shopping trips, family plans, business travel and practical transport jobs. Self-drive cars, vans, minibuses and trucks available across the wider area."
      serviceAreasTitle="Covering Street and nearby Somerset towns"
      serviceAreasDescription="We support Street and nearby Somerset towns and villages, giving local customers access to a broader self-drive vehicle hire service when they need it."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Making local travel and carrying jobs easier in Street"
      infoContentSectionIntro="Vehicle hire in Street is often about convenience and flexibility. With local shopping, residential moves and short regional trips all creating different transport needs, customers benefit from being able to choose a vehicle that suits the day rather than stretching the use of the wrong one."
      infoContentBlock1Title="Flexible transport for everyday plans"
      infoContentBlock1Body="Street is a convenient base for local travel across mid-Somerset, whether you are heading towards Glastonbury, Wells or Taunton. Car hire can be especially handy when you need flexibility for shopping, appointments or visiting family without relying on your usual vehicle."
      infoContentBlock2Title="More space for collecting and moving"
      infoContentBlock2Body="For larger purchases, storage clear-outs or house moves, a van gives you room to do the job properly. It is a practical choice when a car is too limited but you only need extra capacity for a short period."
      infoContentBlock3Title="Good for shared journeys across the county"
      infoContentBlock3Body="Street also works well as a starting point for group outings across Somerset. Hiring a minibus can simplify parking, timing and route planning when several people are travelling together for a day out or event."
      bottomCtaTitle="Plan your Street vehicle hire"
      bottomCtaDescription="Tell us what kind of journey or job you have planned in Street and we will help match the vehicle to it."
      secondaryCtaTitle="Get help choosing a vehicle"
      secondaryCtaDescription="If you are unsure which size or type of vehicle will work best, we can help you make a practical choice before you book."
      faqs={[
        { question: "Can you supply vehicle hire in Street?", answer: "Yes, we can arrange vehicle hire in Street, including cars for personal travel, vans for carrying jobs and larger vehicles where needed." },
        { question: "What is car hire commonly used for in Street?", answer: "Car hire is useful for shopping trips, visiting family, business appointments and temporary replacement transport around Somerset." },
        { question: "Do you offer minibus hire for group travel?", answer: "Yes, minibus hire can be a good option for family outings, club travel and other shared trips that start locally." },
        { question: "Is delivery available in Street?", answer: "In many cases, yes. Let us know where the vehicle needs to go and we will confirm whether delivery can be arranged." },
        { question: "How do I book a vehicle?", answer: "Booking is straightforward. Contact us with your preferred dates, driver details and the type of vehicle you need, and we will guide you from there." },
      ]}
    />
  );
}
