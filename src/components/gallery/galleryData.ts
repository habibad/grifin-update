export interface GalleryItem {
  id: string;
  title: string;
  category: "retail" | "flex" | "land" | "build-to-suit" | "people-moments";
  categoryLabel: string;
  location: string;
  src: string;
  alt: string;
}

export const GALLERY_CATEGORIES = [
  { id: "all", label: "ALL" },
  { id: "retail", label: "RETAIL" },
  { id: "flex", label: "FLEX" },
  { id: "land", label: "LAND" },
  { id: "build-to-suit", label: "BUILD TO SUIT" },
  { id: "people-moments", label: "PEOPLE & MOMENTS" },
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  // Row 1 (Hero Pair: Large Left, Two Stacked Right)
  {
    id: "gallery-01",
    title: "Commercial Retail Center & Storefronts",
    category: "retail",
    categoryLabel: "RETAIL",
    location: "Shoals, Alabama",
    src: "/images/gallery/reference/gallery-01.jpg",
    alt: "Commercial retail center with black canopy and stone facade at sunset",
  },
  {
    id: "gallery-02",
    title: "Industrial Flex Park Facilities",
    category: "flex",
    categoryLabel: "FLEX",
    location: "Shoals Industrial District",
    src: "/images/gallery/reference/gallery-02.jpg",
    alt: "Industrial flex buildings with roll-up commercial bay doors under sunset sky",
  },
  {
    id: "gallery-03",
    title: "Commercial Land Development Acreage",
    category: "land",
    categoryLabel: "LAND",
    location: "Highway 72 Commercial Corridor",
    src: "/images/gallery/reference/gallery-03.jpg",
    alt: "Aerial parcel view of commercial acreage ready for development",
  },

  // Row 2 (3 Columns)
  {
    id: "gallery-04",
    title: "Shoppes on 2nd Retail Promenade",
    category: "retail",
    categoryLabel: "RETAIL",
    location: "Downtown Shoals, AL",
    src: "/images/gallery/reference/gallery-04.jpg",
    alt: "Retail promenade storefronts under warm sunset sky",
  },
  {
    id: "gallery-05",
    title: "Executive Boardroom Wood Wall & Crest",
    category: "people-moments",
    categoryLabel: "PEOPLE & MOMENTS",
    location: "Griffin Brothers Headquarters",
    src: "/images/gallery/reference/gallery-05.jpg",
    alt: "Executive office interior with fluted walnut paneling and metallic gold Griffin crest",
  },
  {
    id: "gallery-06",
    title: "Luxury Commercial Office Lounge & Suites",
    category: "build-to-suit",
    categoryLabel: "BUILD TO SUIT",
    location: "Shoals Commercial Center",
    src: "/images/gallery/reference/gallery-06.jpg",
    alt: "Luxury commercial lounge with leather seating and glass conference suites",
  },

  // Row 3 (3 Columns)
  {
    id: "gallery-07",
    title: "Contemporary Commercial Center at Dusk",
    category: "build-to-suit",
    categoryLabel: "BUILD TO SUIT",
    location: "Florence, AL",
    src: "/images/gallery/reference/gallery-07.jpg",
    alt: "Commercial building with stone facade and timber overhang illuminated at dusk",
  },
  {
    id: "gallery-08",
    title: "The Team Behind Griffin Brothers",
    category: "people-moments",
    categoryLabel: "PEOPLE & MOMENTS",
    location: "The Shoals, Alabama",
    src: "/images/gallery/reference/gallery-08.jpg",
    alt: "Griffin Brothers leadership and community members sharing a moment outdoors",
  },
  {
    id: "gallery-09",
    title: "Highway 72 Retail Strip Center",
    category: "retail",
    categoryLabel: "RETAIL",
    location: "Highway 72, Shoals",
    src: "/images/gallery/reference/gallery-09.jpg",
    alt: "Commercial retail center with illuminated storefront signage at sunset",
  },

  // Row 4 (3 Columns)
  {
    id: "gallery-10",
    title: "High-Bay Logistics & Flex Warehouse",
    category: "flex",
    categoryLabel: "FLEX",
    location: "Airport Business Park",
    src: "/images/gallery/reference/gallery-10.jpg",
    alt: "Warehouse interior with polished concrete floor, steel trusses, and roll-up doors",
  },
  {
    id: "gallery-11",
    title: "Regional Distribution Campus & Acreage",
    category: "land",
    categoryLabel: "LAND",
    location: "Northwest Alabama",
    src: "/images/gallery/reference/gallery-11.jpg",
    alt: "High-altitude aerial view of expansive commercial distribution campus",
  },
  {
    id: "gallery-12",
    title: "Architectural Exterior Entrance Detail",
    category: "build-to-suit",
    categoryLabel: "BUILD TO SUIT",
    location: "Wilson Crossing",
    src: "/images/gallery/reference/gallery-12.jpg",
    alt: "Close-up architectural detail of stone pillars, wood canopy, and warm lighting",
  },
];
