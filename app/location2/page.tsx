"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpeg",
    alt: "Clean rental van on a seafront road near Burnham-on-Sea with sea in the background",
  };

  return (
    <HomePage
      currentLocationLabel="Burnham-on-Sea"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Burnham-on-Sea"
      heroDescription="From seafront travel and family weekends to local deliveries and business use, we provide dependable vehicle hire in Burnham-on-Sea across cars, vans, minibuses and trucks."
      serviceAreasTitle="Around Burnham-on-Sea and nearby"
      serviceAreasDescription="Covering Burnham-on-Sea, Highbridge and surrounding Somerset routes, with flexible hire for coastal travel, home moves, business runs and everyday transport needs."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Straightforward vehicle hire for Burnham-on-Sea journeys"
      infoContentSectionIntro="Burnham-on-Sea works well for both local and longer trips, with quick access to the M5 via Junction 22 and straightforward routes across Somerset. Whether you are collecting furniture, planning a family journey, covering temporary business transport or heading along the coast, vehicle hire in Burnham-on-Sea gives you flexibility without relying on public transport links."
      infoContentBlock1Title="A good base for cross-county travel"
      infoContentBlock1Body="Chard sits on the A30 and close to the A358, so it works well for drivers heading toward Taunton, Ilminster, Yeovil or south toward Axminster. That road position makes hire especially useful for people who need to cover a wider patch across Somerset, Devon or Dorset in one day."
      infoContentBlock2Title="Where route planning matters most"
      infoContentBlock2Body="The town has practical fuel options on the main road approaches, including stations near East Street and along routes out of town. If you are using a larger van or truck, planning around busier town-centre periods can make loading and turning much easier."
      infoContentBlock3Title="Why local drivers often hire here"
      infoContentBlock3Body="Chard hires often suit household moves, business deliveries and work linked to surrounding rural areas where public transport is less flexible. It is also a sensible starting point for family trips toward the Jurassic Coast, where extra passenger or luggage space can make travel much more comfortable."
      bottomCtaTitle="Book vehicle hire in Burnham-on-Sea"
      bottomCtaDescription="Tell us what you need in Burnham-on-Sea and we will help arrange the right car, van, minibus or truck for a smooth coastal or long-distance journey."
      secondaryCtaTitle="Need advice for a Burnham-on-Sea booking?"
      secondaryCtaDescription="If you are comparing options for Burnham-on-Sea, speak to our team and we will help match the vehicle to your route, load or passenger numbers."
      faqs={[
        { question: "Can I arrange vehicle delivery in Burnham-on-Sea?", answer: "Yes, Burnham-on-Sea bookings can usually be arranged with delivery and collection options, subject to vehicle type, timing and availability." },
        { question: "Do you offer European travel from Burnham-on-Sea hires?", answer: "That depends on the vehicle selected and the route planned. If you need to take a hire vehicle from Burnham-on-Sea into Europe, ask when booking so the right cover and documents can be confirmed." },
        { question: "Is one-way vehicle hire available from Burnham-on-Sea?", answer: "A van is a common choice for furniture moves or equipment transport, while a car or minibus may suit family travel depending on what the journey involves." },
        { question: "Is insurance part of the booking?", answer: "Insurance is commonly included, although cover levels vary by booking. We will confirm what applies to your chosen vehicle when you arrange the hire." },
        { question: "Can I return the vehicle to a different location?", answer: "Some bookings can be set up as one-way hires, subject to vehicle type and destination. It is best to ask in advance if that is important for your trip." },
      ]}
    />
  );
}
