import { slugifyLocation } from "@/lib/utils";

export const mainLocationLink = {
  label: "Taunton",
  href: "/",
};

type LocationMetadata = {
  label: string;
  href: string;
  county: string;
  region: string;
  population: string;
};

const mainLocationMetadata: LocationMetadata = {
  label: "Taunton",
  href: "/",
  county: "Somerset",
  region: "South West England",
  population: "69157",
};

const LOCATION_METADATA: LocationMetadata[] = [
  {
    label: "Wellington",
    href: `/${slugifyLocation("Wellington")}`,
    county: "Somerset",
    region: "South West England",
    population: "9439",
  },
  {
    label: "Bridgwater",
    href: `/${slugifyLocation("Bridgwater")}`,
    county: "Somerset",
    region: "South West England",
    population: "41500",
  },
  {
    label: "Burnham-on-Sea",
    href: `/${slugifyLocation("Burnham-on-Sea")}`,
    county: "Somerset",
    region: "South West England",
    population: "9637",
  },
  {
    label: "Frome",
    href: `/${slugifyLocation("Frome")}`,
    county: "Somerset",
    region: "South West England",
    population: "27915",
  },
  {
    label: "Street",
    href: `/${slugifyLocation("Street")}`,
    county: "Somerset",
    region: "South West England",
    population: "11985",
  },
  {
    label: "Ilminster",
    href: `/${slugifyLocation("Ilminster")}`,
    county: "Somerset",
    region: "South West England",
    population: "5808",
  },
];

export const nearbyLocationLinks = LOCATION_METADATA.map(({ label, href }) => ({
  label,
  href,
}));

export function buildLocationLinks(currentLocationLabel?: string) {
  const currentHref = currentLocationLabel ? `/${slugifyLocation(currentLocationLabel)}` : "/";
  const filteredNearbyLinks = nearbyLocationLinks.filter((location) => location.href !== currentHref);

  return [mainLocationLink, ...filteredNearbyLinks];
}

export const locationSlugEntries = LOCATION_METADATA.map(({ label }, index) => ({
  index: index + 1,
  label,
  slug: slugifyLocation(label),
}));
