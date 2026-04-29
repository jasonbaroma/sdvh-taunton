"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/callington-country-road.jpeg",
    alt: "Silver rental car on a hedge-lined country road near Ilminster",
  };

  return (
    <HomePage
      currentLocationLabel="Ilminster"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Ilminster"
      heroDescription="Need a car, van, minibus or truck in Ilminster? We provide flexible self-drive hire for local jobs, business use, family travel and longer distance journeys."
      serviceAreasTitle="Serving Ilminster and nearby areas"
      serviceAreasDescription="We serve Ilminster and surrounding parts of Somerset with self-drive vehicle hire that fits local travel, business needs and longer regional journeys."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Choosing the right vehicle for Ilminster journeys"
      infoContentSectionIntro="Vehicle hire in Ilminster often comes down to practicality. Some customers need a dependable car for onward travel, while others want a van for work, a minibus for group transport or a truck for heavier jobs. With good road links nearby, Ilminster is a sensible place to start many kinds of journey."
      infoContentBlock1Title="Useful for A303 access"
      infoContentBlock1Body="Ilminster works well for drivers needing quick access to the A303, whether the trip is local within South Somerset or further afield. Hiring the right vehicle can save time when you are moving goods, collecting stock or setting off early for a longer route."
      infoContentBlock2Title="A practical option for carrying loads"
      infoContentBlock2Body="For home projects, furniture collection or small business jobs, a van or truck can be a more practical choice than making repeated runs in a car. We can help match the vehicle to the job so the day runs more smoothly."
      infoContentBlock3Title="Flexible choices for people and plans"
      infoContentBlock3Body="If you are travelling as a group, a minibus can make local events, family outings and airport runs much easier to organise. For simpler day-to-day use, standard cars and larger family models are also available."
      bottomCtaTitle="Book vehicle hire in Ilminster"
      bottomCtaDescription="From short local use to longer runs across Somerset and beyond, we can help arrange practical vehicle hire in Ilminster."
      secondaryCtaTitle="Need help before you book?"
      secondaryCtaDescription="If you are comparing vehicle sizes or planning a longer route from Ilminster, we can help you narrow it down."
      faqs={[
        { question: "Can you deliver a hire vehicle to Ilminster?", answer: "Yes, we can often arrange delivery and collection in and around Ilminster, subject to the vehicle and booking details." },
        { question: "Is one-way vehicle hire available from Ilminster?", answer: "Yes, one-way hire is available on many bookings. Let us know your route and drop-off location when you enquire." },
        { question: "Is insurance included with Ilminster vehicle hire?", answer: "Many hires include insurance as part of the booking. The exact cover depends on the vehicle type and who will be driving." },
        { question: "Can I hire a vehicle in Ilminster for European travel?", answer: "Yes, selected vehicles can be taken into Europe by arrangement. It is best to mention this early so the right paperwork can be prepared." },
        { question: "What type of vehicle can I hire in Ilminster?", answer: "We offer a wide range including cars, vans, minibuses and trucks, so the best choice depends on passenger numbers, load size and journey type." },
      ]}
    />
  );
}
