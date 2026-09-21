export const pricing = [
  {
    id: "automatic",
    title: "Automatic Training",
    icon: "Settings",
    trainingFee: 60000,
    highwayCode: 5000,
    total: 65000,
    description: "Learn to drive automatic transmission vehicles with professional instruction.",
    features: [
      "Professional automatic driving lessons",
      "Theory classes",
      "Practical driving sessions",
      "Road sign and highway code training",
      "Simulator training",
      "Defensive driving basics",
      "CBT preparation",
      "Certificate on completion"
    ],
    schedule: {
      weekday: "3 weeks (15 working days)",
      weekend: "7 Saturdays"
    }
  },
  {
    id: "manual",
    title: "Manual Training",
    icon: "Cog",
    trainingFee: 70000,
    highwayCode: 5000,
    total: 75000,
    description: "Master manual transmission driving with comprehensive clutch and gear control.",
    features: [
      "Professional manual driving lessons",
      "Clutch and gear control training",
      "Theory classes",
      "Practical driving sessions",
      "Road sign and highway code training",
      "Simulator training",
      "Defensive driving techniques",
      "CBT preparation",
      "Certificate on completion"
    ],
    schedule: {
      weekday: "3 weeks (15 working days)",
      weekend: "7 Saturdays"
    },
  }
];

export const weekdayTraining = {
  title: "3-Week Weekday Programme",
  duration: "15 working days",
  theory: {
    classes: 5,
    duration: "1 hour per class"
  },
  practical: {
    lessons: 10,
    duration: "30 minutes per lesson"
  }
};

export const weekendTraining = {
  title: "Weekend Programme",
  duration: "7 Saturdays",
  theory: {
    classes: 2,
    duration: "1 hour per class"
  },
  practical: {
    lessons: 5,
    duration: "1 hour per lesson"
  }
};
