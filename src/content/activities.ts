export type ActivityCategory =
  | "Academics"
  | "Events"
  | "Sports"
  | "Awards"
  | "Community"
  | "Assembly"
  | "Excursion"
  | "Cultural Day"
  | "Class Activities"
  | "Extra Curricular";

export type ActivityPost = {
  slug: string;
  title: string;
  date: string;
  category: ActivityCategory;
  excerpt: string;
  coverImage: string;
  images: string[];
  content: string[];
};

export const activityCategories: Array<ActivityCategory | "All"> = [
  "All",
  "Academics",
  "Events",
  "Sports",
  "Awards",
  "Community",
  "Assembly",
  "Excursion",
  "Cultural Day",
  "Class Activities",
  "Extra Curricular",
];

export const activities: ActivityPost[] = [
  {
    slug: "morning-assembly-highlights",
    title: "Morning Assembly Highlights",
    date: "2026-03-01",
    category: "Assembly",
    excerpt:
      "A look at student presentations, announcements, and weekly character focus during assembly.",
    coverImage: "/images/activities/assembly/bf69ad4c-9fde-4131-bc71-366d181f965a.JPG",
    images: [
      "/images/activities/assembly/bf69ad4c-9fde-4131-bc71-366d181f965a.JPG",
      "/images/activities/assembly/IMG_2397.JPG",
      "/images/activities/assembly/IMG_2398.JPG",
      "/images/activities/assembly/IMG_2399.JPG",
      "/images/activities/assembly/IMG_2400.JPG",
      "/images/activities/assembly/IMG_2401.JPG",
      "/images/activities/assembly/f345d90d-ee0e-43d5-9c3e-12dfdd6cccb7.JPG",
    ],
    content: [
      "Use this post for your weekly or termly assembly updates. Replace the text with what happened and who participated.",
      "Drop your assembly photos into /public/images/activities/assembly and keep the file names above, or update the paths here.",
    ],
  },
  {
    slug: "student-excursion-day",
    title: "Student Excursion Day",
    date: "2026-03-05",
    category: "Excursion",
    excerpt:
      "Students visited learning sites outside the classroom for practical, real-world experience.",
    coverImage: "/images/activities/excursion/IMG_2241 2.JPG",
    images: [
      "/images/activities/excursion/IMG_2097 2.JPG",
      "/images/activities/excursion/IMG_2099 2.JPG",
      "/images/activities/excursion/IMG_2101 2.JPG",
      "/images/activities/excursion/IMG_2102 2.JPG",
      "/images/activities/excursion/IMG_2103 2.JPG",
      "/images/activities/excursion/IMG_2104 2.JPG",
      "/images/activities/excursion/IMG_2105 2.JPG",
      "/images/activities/excursion/IMG_2108 2.JPG",
      "/images/activities/excursion/IMG_2109 2.JPG",
      "/images/activities/excursion/IMG_2114 2.JPG",
      "/images/activities/excursion/IMG_2115 2.JPG",
      "/images/activities/excursion/IMG_2118 2.JPG",
      "/images/activities/excursion/IMG_2121 2.JPG",
      "/images/activities/excursion/IMG_2123 2.JPG",
      "/images/activities/excursion/IMG_2125 2.JPG",
      "/images/activities/excursion/IMG_2128 2.JPG",
      "/images/activities/excursion/IMG_2134 2.JPG",
      "/images/activities/excursion/IMG_2135 2.JPG",
      "/images/activities/excursion/IMG_2138 2.JPG",
      "/images/activities/excursion/IMG_2143 2.JPG",
      "/images/activities/excursion/IMG_2145 2.JPG",
      "/images/activities/excursion/IMG_2146 2.JPG",
      "/images/activities/excursion/IMG_2153 2.JPG",
      "/images/activities/excursion/IMG_2155 2.JPG",
      "/images/activities/excursion/IMG_2156 2.JPG",
      "/images/activities/excursion/IMG_2159 2.JPG",
      "/images/activities/excursion/IMG_2160 2.JPG",
      "/images/activities/excursion/IMG_2162 2.JPG",
      "/images/activities/excursion/IMG_2164 2.JPG",
      "/images/activities/excursion/IMG_2167 2.JPG",
      "/images/activities/excursion/IMG_2168 2.JPG",
      "/images/activities/excursion/IMG_2169 2.JPG",
      "/images/activities/excursion/IMG_2170 2.JPG",
      "/images/activities/excursion/IMG_2172 2.JPG",
      "/images/activities/excursion/IMG_2173 2.JPG",
      "/images/activities/excursion/IMG_2220 2.JPG",
      "/images/activities/excursion/IMG_2221 2.JPG",
      "/images/activities/excursion/IMG_2241 2.JPG",
      "/images/activities/excursion/IMG_2390.JPG",
    ],
    content: [
      "Use this section to describe where students visited, what they learned, and why the excursion was important.",
      "Drop excursion photos into /public/images/activities/excursion and keep the file names above, or edit paths here.",
    ],
  },
  {
    slug: "cultural-day-celebration",
    title: "Cultural Day Celebration",
    date: "2026-03-10",
    category: "Cultural Day",
    excerpt:
      "Students celebrated Nigerian cultures through attire, food, performances, and language displays.",
    coverImage: "/images/activities/cultural-day/IMG_2087.JPG",
    images: [
      "/images/activities/cultural-day/IMG_2085.JPG",
      "/images/activities/cultural-day/IMG_2087.JPG",
      "/images/activities/cultural-day/IMG_2090.JPG",
      "/images/activities/cultural-day/IMG_2183.JPG",
      "/images/activities/cultural-day/IMG_2185.JPG",
      "/images/activities/cultural-day/IMG_2186.JPG",
      "/images/activities/cultural-day/IMG_2187.JPG",
      "/images/activities/cultural-day/IMG_2188.JPG",
      "/images/activities/cultural-day/IMG_2189.JPG",
      "/images/activities/cultural-day/IMG_2190.JPG",
      "/images/activities/cultural-day/IMG_2191.JPG",
      "/images/activities/cultural-day/IMG_2192.JPG",
      "/images/activities/cultural-day/IMG_2193.JPG",
      "/images/activities/cultural-day/IMG_2194.JPG",
      "/images/activities/cultural-day/IMG_2195.JPG",
      "/images/activities/cultural-day/IMG_2196.JPG",
      "/images/activities/cultural-day/IMG_2197.JPG",
      "/images/activities/cultural-day/IMG_2198.JPG",
      "/images/activities/cultural-day/IMG_2199.JPG",
      "/images/activities/cultural-day/IMG_2200.JPG",
      "/images/activities/cultural-day/IMG_2201.JPG",
      "/images/activities/cultural-day/IMG_2202.JPG",
      "/images/activities/cultural-day/IMG_2203.JPG",
      "/images/activities/cultural-day/IMG_2204.JPG",
      "/images/activities/cultural-day/IMG_2205.JPG",
      "/images/activities/cultural-day/IMG_2216.JPG",
      "/images/activities/cultural-day/IMG_2218.JPG",
      "/images/activities/cultural-day/IMG_2226.JPG",
      "/images/activities/cultural-day/IMG_2244.JPG",
    ],
    content: [
      "Use this post for your cultural day recap. Mention featured cultures, performances, and awards.",
      "Drop cultural day photos into /public/images/activities/cultural-day and keep the file names above, or edit paths here.",
    ],
  },
  {
    slug: "classroom-activities-week",
    title: "Classroom Activities Week",
    date: "2026-03-12",
    category: "Class Activities",
    excerpt:
      "Snapshots from hands-on classroom projects, group work, and literacy/numeracy sessions.",
    coverImage: "/images/activities/class-activities/IMG_2092.JPG",
    images: [
      "/images/activities/class-activities/IMG_2084.JPG",
      "/images/activities/class-activities/IMG_2092.JPG",
      "/images/activities/class-activities/IMG_2094.JPG",
      "/images/activities/class-activities/IMG_2230.JPG",
      "/images/activities/class-activities/IMG_2234.JPG",
      "/images/activities/class-activities/IMG_2238.JPG",
      "/images/activities/class-activities/04ff1d25-3fc1-41ba-8a16-22b2fe6d22aa.JPG",
      "/images/activities/class-activities/0d7716e6-39b8-4e9a-a5f1-66f8843a3de4.JPG",
      "/images/activities/class-activities/17e87c0f-3342-4623-9487-15945501e7ce.JPG",
      "/images/activities/class-activities/79d8e8cc-4ecd-4901-a7ad-8a2dfca4d879.JPG",
      "/images/activities/class-activities/9d63122c-8562-4338-8a29-b2acd6818013.JPG",
      "/images/activities/class-activities/9f60e302-5f2b-46b6-945f-a4b4b2598174.JPG",
      "/images/activities/class-activities/9fb28c27-9a66-4f1a-9abb-a3c8df703aeb.JPG",
      "/images/activities/class-activities/a2999c3f-f2ca-4d02-89a0-41970abd5d3f.JPG",
      "/images/activities/class-activities/a5248410-0d0b-433a-8b8f-2577ec74620d.JPG",
      "/images/activities/class-activities/cc9e9e7d-36d2-44c9-8833-f8db84691922.JPG",
      "/images/activities/class-activities/f0665243-287f-44dc-95f7-74c304c5d939.JPG",
      "/images/activities/class-activities/f715a4d1-668e-4806-9bdb-b0417a769f19.JPG",
      "/images/activities/class-activities/IMG_2381.JPG",
      "/images/activities/class-activities/IMG_2391.JPG",
      "/images/activities/class-activities/IMG_2392.JPG",
      "/images/activities/class-activities/IMG_2393.JPG",
      "/images/activities/class-activities/IMG_2394.JPG",
      "/images/activities/class-activities/IMG_2395.JPG",
    ],
    content: [
      "Use this post to highlight classroom learning moments for parents and prospective families.",
      "Drop class activity photos into /public/images/activities/class-activities and keep the file names above, or edit paths here.",
    ],
  },
  // {
  //   slug: "first-term-open-house",
  //   title: "First Term Open House for Parents",
  //   date: "2026-01-20",
  //   category: "Events",
  //   excerpt:
  //     "Parents met with class teachers to review learning goals and partner with the school for student success.",
  //   coverImage: "/images/activities/open-house.jpg",
  //   images: ["/images/activities/open-house.jpg", "/images/gallery/events-1.jpg"],
  //   content: [
  //     "Our First Term Open House created a strong bridge between home and school. Parents interacted with subject teachers, reviewed curriculum expectations, and received academic support guides.",
  //     "The session also introduced our updated communication channels for homework updates, attendance notifications, and resumption reminders.",
  //   ],
  // },
  // {
  //   slug: "science-fair-2026",
  //   title: "Secondary Science Fair 2026",
  //   date: "2026-02-05",
  //   category: "Academics",
  //   excerpt:
  //     "Students showcased hands-on projects in renewable energy, water filtration, and basic robotics.",
  //   coverImage: "/images/activities/science-fair.jpg",
  //   images: ["/images/activities/science-fair.jpg", "/images/gallery/stem-1.jpg"],
  //   content: [
  //     "Our annual Science Fair brought together curiosity, teamwork, and practical problem-solving. Learners built models and presented confidently to parents and invited judges.",
  //     "The best projects will represent the school at the district STEM showcase later this year.",
  //   ],
  // },
  {
    slug: "sport-activities",
    title: "Sport Activities",
    date: "2026-02-10",
    category: "Sports",
    excerpt:
      "Highlights from our sport activities, including team games, drills, and fitness sessions.",
    coverImage: "/images/activities/sport/IMG_2231.JPG",
    images: [
      "/images/activities/sport/IMG_2088.JPG",
      "/images/activities/sport/IMG_2219.JPG",
      "/images/activities/sport/IMG_2222.JPG",
      "/images/activities/sport/IMG_2231.JPG",
      "/images/activities/sport/IMG_2236.JPG",
      "/images/activities/sport/4bd8804d-3df0-4702-89da-5a12624476d7.JPG",
      "/images/activities/sport/IMG_2396.JPG",
      "/images/activities/sport/IMG_2399.JPG",
      "/images/activities/sport/IMG_2400.JPG",
      "/images/activities/sport/IMG_2401.JPG",
    ],
    content: [
      "Use this post for sports activity updates, match summaries, or training sessions.",
      "Drop sports photos into /public/images/activities/sport and add them to the list here if you include more.",
    ],
  },
  // {
  //   slug: "outstanding-waec-results",
  //   title: "Outstanding WAEC Performance",
  //   date: "2026-01-30",
  //   category: "Awards",
  //   excerpt:
  //     "Our graduating class achieved excellent results in core science and arts subjects.",
  //   coverImage: "/images/activities/waec-results.jpg",
  //   images: ["/images/activities/waec-results.jpg", "/images/gallery/graduation-1.jpg"],
  //   content: [
  //     "We are proud of our students' strong WAEC performance and the dedication shown by our teaching staff and parents.",
  //     "This milestone reflects our commitment to consistent academic mentorship and exam readiness.",
  //   ],
  // },
  // {
  //   slug: "community-cleanup-drive",
  //   title: "Community Cleanup and Service Day",
  //   date: "2026-01-15",
  //   category: "Community",
  //   excerpt:
  //     "Students and staff joined local leaders in a sanitation and awareness outreach activity.",
  //   coverImage: "/images/activities/community-cleanup.jpg",
  //   images: [
  //     "/images/activities/community-cleanup.jpg",
  //     "/images/gallery/events-2.jpg",
  //   ],
  //   content: [
  //     "As part of our civic responsibility program, students participated in a supervised community cleanup, learning the value of service and environmental care.",
  //     "The activity reinforced practical citizenship and teamwork beyond the classroom.",
  //   ],
  // },
  {
    slug: "extra-curricular-activities",
    title: "Extra Curricular Activities",
    date: "2026-02-12",
    category: "Extra Curricular",
    excerpt:
      "Clubs, practical sessions, and enrichment activities that build confidence beyond the classroom.",
    coverImage: "/images/activities/extra-curricular/IMG_2207.JPG",
    images: [
      "/images/activities/extra-curricular/IMG_2083.JPG",
      "/images/activities/extra-curricular/IMG_2086.JPG",
      "/images/activities/extra-curricular/IMG_2093.JPG",
      "/images/activities/extra-curricular/IMG_2137.JPG",
      "/images/activities/extra-curricular/IMG_2140.JPG",
      "/images/activities/extra-curricular/IMG_2147.JPG",
      "/images/activities/extra-curricular/IMG_2207.JPG",
      "/images/activities/extra-curricular/IMG_2213.JPG",
      "/images/activities/extra-curricular/IMG_2223.JPG",
      "/images/activities/extra-curricular/IMG_2224.JPG",
      "/images/activities/extra-curricular/IMG_2229.JPG",
      "/images/activities/extra-curricular/IMG_2234.JPG",
      "/images/activities/extra-curricular/IMG_2379.JPG",
      "/images/activities/extra-curricular/IMG_2380.JPG",
      "/images/activities/extra-curricular/IMG_2382.JPG",
      "/images/activities/extra-curricular/IMG_2383.JPG",
      "/images/activities/extra-curricular/IMG_2387.JPG",
    ],
    content: [
      "Use this post for clubs, practical lessons, excursions within campus, and other enrichment activities.",
      "Drop extra-curricular photos into /public/images/activities/extra-curricular and list them here.",
    ],
  },
];

export function getActivityBySlug(slug: string) {
  return activities.find((activity) => activity.slug === slug);
}
