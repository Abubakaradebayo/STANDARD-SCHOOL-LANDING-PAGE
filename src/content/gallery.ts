export type GalleryCategory =
  | "All"
  | "Events"
  | "Classroom"
  | "Sports";

export type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
};

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Events",
  "Classroom",
  "Sports",
];

// Interleaved so home-page slice(0, 8) shows variety across all categories
export const galleryImages: GalleryImage[] = [
  // Round 1
  { src: "/images/activities/cultural-day/IMG_2087.JPG", alt: "Cultural day parade", category: "Events" },
  { src: "/images/activities/class-activities/IMG_2092.JPG", alt: "Pupils in class", category: "Classroom" },
  { src: "/images/activities/sport/IMG_2231.JPG", alt: "Inter-house sports", category: "Sports" },

  // Round 2
  { src: "/images/activities/excursion/IMG_2390.JPG", alt: "Airport excursion group photo", category: "Events" },
  { src: "/images/activities/class-activities/04ff1d25-3fc1-41ba-8a16-22b2fe6d22aa.JPG", alt: "Primary pupils at their desks", category: "Classroom" },
  { src: "/images/activities/sport/IMG_2088.JPG", alt: "Sports day activities", category: "Sports" },

  // Round 3
  { src: "/images/activities/cultural-day/IMG_2183.JPG", alt: "Cultural day celebration", category: "Events" },
  { src: "/images/activities/class-activities/17e87c0f-3342-4623-9487-15945501e7ce.JPG", alt: "Nursery lunch time", category: "Classroom" },
  { src: "/images/activities/sport/IMG_2396.JPG", alt: "Students in playground formation", category: "Sports" },

  // Round 4
  { src: "/images/activities/cultural-day/IMG_2190.JPG", alt: "Cultural day performance", category: "Events" },
  { src: "/images/activities/class-activities/79d8e8cc-4ecd-4901-a7ad-8a2dfca4d879.JPG", alt: "Secondary class lesson", category: "Classroom" },
  { src: "/images/activities/sport/IMG_2219.JPG", alt: "Team sports", category: "Sports" },

  // Round 5
  { src: "/images/activities/cultural-day/IMG_2379.JPG", alt: "Creative craft project", category: "Events" },
  { src: "/images/activities/class-activities/IMG_2084.JPG", alt: "Classroom learning", category: "Classroom" },
  { src: "/images/activities/sport/IMG_2401.JPG", alt: "Students stretching exercises", category: "Sports" },

  // Round 6
  { src: "/images/activities/cultural-day/IMG_2196.JPG", alt: "Cultural day display", category: "Events" },
  { src: "/images/activities/class-activities/a5248410-0d0b-433a-8b8f-2577ec74620d.JPG", alt: "Secondary students studying", category: "Classroom" },
  { src: "/images/activities/sport/IMG_2222.JPG", alt: "Sports practice", category: "Sports" },

  // Round 7
  { src: "/images/activities/cultural-day/IMG_2204.JPG", alt: "Cultural day attire", category: "Events" },
  { src: "/images/activities/class-activities/IMG_2094.JPG", alt: "Teacher guiding students", category: "Classroom" },
  { src: "/images/activities/sport/IMG_2399.JPG", alt: "Morning assembly in courtyard", category: "Sports" },

  // Round 8
  { src: "/images/activities/cultural-day/IMG_2244.JPG", alt: "Cultural day group photo", category: "Events" },
  { src: "/images/activities/class-activities/IMG_2381.JPG", alt: "Teacher reviewing student work", category: "Classroom" },
  { src: "/images/activities/sport/IMG_2236.JPG", alt: "Football practice", category: "Sports" },

  // Round 9
  { src: "/images/activities/cultural-day/f345d90d-ee0e-43d5-9c3e-12dfdd6cccb7.JPG", alt: "Staff group photo", category: "Events" },
  { src: "/images/activities/class-activities/IMG_2394.JPG", alt: "Nursery classroom with alphabet charts", category: "Classroom" },
  { src: "/images/activities/sport/IMG_2400.JPG", alt: "Morning assembly lines", category: "Sports" },

  // Round 10
  { src: "/images/activities/assembly/bf69ad4c-9fde-4131-bc71-366d181f965a.JPG", alt: "Student lineup with staff", category: "Events" },
  { src: "/images/activities/class-activities/IMG_2230.JPG", alt: "Group work session", category: "Classroom" },
  { src: "/images/activities/sport/4bd8804d-3df0-4702-89da-5a12624476d7.JPG", alt: "PE session outdoors", category: "Sports" },

  // Round 11 (remaining)
  { src: "/images/activities/class-activities/IMG_2234.JPG", alt: "Hands-on learning", category: "Classroom" },
  { src: "/images/activities/class-activities/IMG_2238.JPG", alt: "Classroom activities", category: "Classroom" },
];
