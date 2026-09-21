export const courses = [
  {
    id: "beginners",
    title: "Beginners Training",
    shortTitle: "Beginners",
    description: "No previous driving experience required. Perfect for first-time learners who want to build a strong foundation in driving skills and road safety.",
    icon: "Car",
    features: ["No experience needed", "Theory + Practical", "Road safety basics", "Vehicle familiarization"]
  },
  {
    id: "learners",
    title: "Learner Drivers Training",
    shortTitle: "Learners",
    description: "Structured training for learners developing their driving skills. Build confidence on the road with professional guidance.",
    icon: "GraduationCap",
    features: ["Progressive skill building", "Road practice", "Confidence building", "Professional instruction"]
  },
  {
    id: "advanced",
    title: "Advanced Drivers Training",
    shortTitle: "Advanced",
    description: "Training for experienced drivers seeking to improve their driving skills, road awareness and defensive driving techniques.",
    icon: "Award",
    features: ["Skill refinement", "Defensive driving", "Advanced maneuvers", "Road awareness"]
  },
  {
    id: "automatic",
    title: "Automatic Training",
    shortTitle: "Automatic",
    description: "Learn to drive automatic transmission vehicles with our structured training programme.",
    icon: "Settings",
    features: ["Automatic transmission", "Smooth driving", "Highway driving", "Parking skills"],
    pricing: {
      training: 60000,
      highwayCode: 5000,
      total: 65000
    }
  },
  {
    id: "manual",
    title: "Manual Training",
    shortTitle: "Manual",
    description: "Master manual transmission driving with comprehensive clutch and gear control training.",
    icon: "Cog",
    features: ["Manual transmission", "Clutch control", "Gear shifting", "Full vehicle control"],
    pricing: {
      training: 70000,
      highwayCode: 5000,
      total: 75000
    }
  },
  {
    id: "corporate",
    title: "Corporate Staff Training",
    shortTitle: "Corporate",
    description: "Professional driver training programmes for company staff and organizational drivers.",
    icon: "Building2",
    features: ["Corporate programmes", "Fleet training", "Safety compliance", "Tailored curriculum"]
  },
  {
    id: "dispatch",
    title: "Dispatch Rider Training",
    shortTitle: "Dispatch",
    description: "Specialized training for dispatch riders.",
    icon: "Zap",
    features: ["Rider training", "Safety awareness", "Road practice", "Professional instruction"]
  },
  {
    id: "keke",
    title: "Maruwa / Keke Driver Training",
    shortTitle: "Maruwa/Keke",
    description: "Driver training for Maruwa/Keke operators.",
    icon: "Truck",
    features: ["Tricycle operation", "Safety awareness", "Road practice", "Traffic rules"]
  },
  {
    id: "company-drivers",
    title: "Training for Existing Company Drivers",
    shortTitle: "Company Drivers",
    description: "Training for companies with existing drivers.",
    icon: "Users",
    features: ["Driver assessment", "Refresher training", "Safety awareness", "Practical training"]
  },
  {
    id: "escort",
    title: "Pickup & Escort Service Training",
    shortTitle: "Escort",
    description: "Specialized training for pickup and escort service operations.",
    icon: "Shield",
    features: ["Protocol training", "Safety procedures", "Practical training", "Defensive driving"]
  }
];

export const mainCourses = courses.filter((course) => ["beginners", "learners", "advanced", "corporate"].includes(course.id));

export const additionalCourses = courses.filter((course) => ["dispatch", "keke", "company-drivers", "escort"].includes(course.id));
