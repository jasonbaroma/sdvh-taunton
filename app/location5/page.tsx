"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpeg",
    alt: "Unbranded rental minibus traveling along a summer country lane near Ilminster",
  };

  return (
    <HomePage
      currentLocationLabel="Ilminster"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Ilminster"
      heroDescription="Our vehicle hire in Ilminster is set up for everyday practicality, whether you need a car for travel, a van for moving, a minibus for a group or a truck for site work."
      serviceAreasTitle="Vehicle hire in Ilminster and nearby"
      serviceAreasDescription="Serving Ilminster and nearby South Somerset locations with flexible vehicle hire for trade work, household jobs, business journeys and personal travel."
      infoContentSectionKicker="Useful local planning"
      infoContentSectionTitle="Practical vehicle hire for Ilminster travel and transport"
      infoContentSectionIntro="Ilminster is a convenient base for travel across South Somerset thanks to its position near the A303 and A358. That makes vehicle hire especially useful for business trips, regional deliveries, home moves and family travel where timing, space and direct road access matter more than fixed public transport options."
      infoContentBlock1Title="Making the most of Street's road links"
      infoContentBlock1Body="Street is well connected by the A39 and nearby routes linking Glastonbury, Wells, Bridgwater and Taunton. For customers who need to cover several stops in one day, hiring locally can be much easier than trying to work around limited space or fixed public transport connections."
      infoContentBlock2Title="Busy-town timing and loading access"
      infoContentBlock2Body="The town's busy shopping and retail areas can affect traffic and parking at peak times, particularly around Clarks Village and central routes. If you are collecting stock, moving goods or using a larger van, setting off outside the busiest periods usually keeps things simpler."
      infoContentBlock3Title="Everyday reasons people hire here"
      infoContentBlock3Body="Street hires often support a mix of retail-related transport, family visits, local moves and work across nearby Somerset towns. It is also a practical starting point for group outings to Wells, Glastonbury Tor and surrounding attractions where extra passenger or luggage space is useful."
      bottomCtaTitle="Book a hire vehicle in Ilminster"
      bottomCtaDescription="If you need transport in Ilminster, we can help arrange the right vehicle for business mileage, moving jobs, local deliveries or personal travel."
      secondaryCtaTitle="Discuss your Ilminster hire plans"
      secondaryCtaDescription="If you are booking from Ilminster and want a sensible option for your route or workload, our team can point you towards the right vehicle."
      faqs={[
        { question: "Can you deliver a hire vehicle to Ilminster?", answer: "Yes, delivery and collection may be available for Ilminster hires, depending on where the vehicle is going and the booking details." },
        { question: "Do you offer cars, minibuses and trucks in Ilminster too?", answer: "Yes, we supply more than just vans. Customers in Ilminster can book cars, minibuses and trucks as well as vans, subject to availability and driver eligibility." },
        { question: "What should I hire for shopping, group travel or carrying goods?", answer: "A larger car or minibus can suit group travel, while vans are often chosen for stock movement, furniture transport or practical jobs around home and business premises." },
        { question: "Is one-way vehicle hire available from Ilminster?", answer: "One-way bookings can sometimes be arranged, depending on the route and vehicle selected. Ask early if that is part of your plan." },
        { question: "Can I use an Ilminster hire vehicle for longer UK journeys?", answer: "Some bookings can include European travel if arranged beforehand. We need advance notice so the vehicle and documentation can be prepared properly." },
      ]}
    />
  );
}
