"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpg",
    alt: "White hire van on a quiet Somerset road near Street with distant hills",
  };

  return (
    <HomePage
      currentLocationLabel="Street"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Burnham-on-Sea"
      heroDescription="Vehicle Hire in Burnham-on-Sea for seaside travel, temporary transport, removals and business needs. Access cars, vans, minibuses and trucks through our wider Somerset service."
      serviceAreasTitle="Covering Street and nearby routes"
      serviceAreasDescription="We support Street and nearby parts of Somerset, making it straightforward to arrange vehicle hire for local journeys, deliveries, family plans and longer trips."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Vehicle hire that suits local work and everyday travel in Street"
      infoContentSectionIntro="Vehicle hire in Burnham-on-Sea often reflects the area's mix of residential needs, visitor travel and practical transport jobs. Whether you need a comfortable car, a van with more room or a larger vehicle for group or work use, the right hire can simplify the day."
      infoContentBlock1Title="Useful for coastal and inland journeys"
      infoContentBlock1Body="In Burnham-on-Sea, people often need a vehicle that can handle a mix of town journeys and longer drives inland. Car hire works well for visiting relatives, holiday accommodation changes and general travel when flexibility matters more than fixed timetables."
      infoContentBlock2Title="Extra carrying space when you need it"
      infoContentBlock2Body="Vans are a sensible option for moving items between properties, collecting bulky purchases or managing seasonal stock. If your transport needs change during busier periods, hiring can be a straightforward way to stay practical without overcommitting."
      infoContentBlock3Title="A handy option for family groups"
      infoContentBlock3Body="For shared travel, a minibus can make family outings and small group plans much easier to organise. It keeps everyone together and avoids coordinating several separate vehicles from the start."
      bottomCtaTitle="Organise your Burnham-on-Sea hire"
      bottomCtaDescription="We can help arrange vehicle hire in Burnham-on-Sea for coastal travel, moving jobs, business use and group transport."
      secondaryCtaTitle="Talk through the options"
      secondaryCtaDescription="Speak to us if you want help choosing between cars, vans, minibuses or trucks for a Street booking."
      faqs={[
        { question: "Do you provide vehicle hire in Burnham-on-Sea?", answer: "Yes, we cover Burnham-on-Sea with a range of self-drive hire options including cars, vans, minibuses and trucks." },
        { question: "What is car hire useful for locally?", answer: "Cars are often hired for visiting family, holiday travel, temporary replacement use and getting around the coast and wider Somerset area." },
        { question: "Can I hire a van for a move or collection?", answer: "Yes, van hire is a practical choice for moving home, collecting furniture, stock runs and other larger carrying jobs." },
        { question: "Is vehicle delivery available in Burnham-on-Sea?", answer: "Some bookings can include delivery and collection. Let us know the details and we will advise what is available for your hire." },
        { question: "Do you offer one-way hire?", answer: "One-way rentals are available on selected bookings. If you are planning a route that finishes elsewhere, ask us when you enquire." },
      ]}
    />
  );
}
