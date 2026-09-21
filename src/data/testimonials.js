export const testimonials = [
  {
    id: 1,
    placeholder: false,
    name: "Miss Ekenemchukwu Emelumadu",
    message:
      "Till Dawn Driving Academy is very great for beginners. The drivers are thorough and teach you all you need to know. They also help boost your confidence by encouraging you when driving. Would definitely recommend."
  },

  {
    id: 2,
    placeholder: false,
    name: "Miss Toni Nasiru",
    message:
      "I would like to say that I really enjoyed my lessons and I'm surprised that I was able to go from no driving knowledge at all to being able to drive comfortably on the road as a slow learner."
  },

  {
    id: 3,
    placeholder: false,
    name: "Miss Momoh",
    message:
      "The instructors were very patient and friendly. They explained everything clearly and made learning to drive much easier for me."
  },

  {
    id: 4,
    placeholder: false,
    name: "Dr Ameerah",
    message:
      "I learnt more than just how to drive. I also gained a better understanding of road signs, traffic rules and safe driving. I will highly recommend TDDA."
  }
];

export const addTestimonial = (testimonial) => {
  testimonials.push({
    ...testimonial,
    id: testimonials.length + 1,
    placeholder: false
  });
};