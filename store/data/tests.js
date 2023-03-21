const tests = [
  {
    id: "01",
    question: "Can I park here?",
    answers: [
      {
        id: "a-11",
        answer: "Sorry, I did that.",
        correct: false,
      },
      {
        id: "a-12",
        answer: "It's the same place.",
        correct: false,
      },
      {
        id: "a-13",
        answer: "Only for half an hour.",
        correct: true,
      },
    ],
  },
  {
    id: "02",
    question: "What colour will you paint the children's bedroom?",
    answers: [
      {
        id: "a-21",
        answer: "I hope it was right.",
        correct: false,
      },
      {
        id: "a-22",
        answer: "We can't decide.",
        correct: true,
      },
      {
        id: "a-23",
        answer: "It wasn't very difficult.",
        correct: false,
      },
    ],
  },
  {
    id: "03",
    question: "I can't understand this email.",
    answers: [
      {
        testID: "03",
        id: "a-31",
        answer: "Would you like some help?",
        correct: true,
      },
      {
        id: "a-32",
        answer: "Don't you know?",
        correct: false,
      },
      {
        id: "a-33",
        answer: "I suppose you can.",
        correct: false,
      },
    ],
  },
  {
    id: "04",
    question: "I'd like two tickets for tomorrow night.",
    answers: [
      { id: "a-41", answer: "How much did you pay?", correct: false },
      { id: "a-42", answer: "Afternoon and evening.", correct: false },
      { id: "a-43", answer: "I'll just check for you.", correct: true },
    ],
  },
  {
    id: "05",
    question: "Shall we go to the gym now?",
    answers: [
      { id: "a-51", answer: "I'm too tired.", correct: true },
      { id: "a-52", answer: "It's very good.", correct: false },
      { id: "a-53", answer: "Not at all.", correct: false },
    ],
  },
  {
    id: "06",
    question:
      "His eyes were ...... bad that he couldn't read the number plate of the car in front.",
    answers: [
      { id: "a-61", answer: "such", correct: false },
      { id: "a-62", answer: "too", correct: false },
      { id: "a-63", answer: "so", correct: true },
      { id: "a-64", answer: "very", correct: false },
    ],
  },
  {
    id: "07",
    question:
      "The company needs to decide ...... and for all what its position is on this point.",
    answers: [
      { id: "a-71", answer: "here", correct: false },
      { id: "a-72", answer: "once", correct: true },
      { id: "a-73", answer: "first", correct: false },
      { id: "a-74", answer: "finally", correct: false },
    ],
  },
  {
    id: "08",
    question:
      "Don't put your cup on the ...... of the table – someone will knock it off.",
    answers: [
      { id: "a-81", answer: "outside", correct: false },
      { id: "a-82", answer: "edge", correct: true },
      { id: "a-83", answer: "boundary", correct: false },
      { id: "a-84", answer: "border", correct: false },
    ],
  },
  {
    id: "09",
    question: "I'm sorry - I didn't ...... to disturb you.",
    answers: [
      { id: "a-91", answer: "hope", correct: false },
      { id: "a-92", answer: "think", correct: false },
      { id: "a-93", answer: "mean", correct: true },
      { id: "a-94", answer: "suppose", correct: false },
    ],
  },
  {
    id: "10",
    question: "The singer ended the concert ...... her most popular song.",
    answers: [
      { id: "a-101", answer: "by", correct: false },
      { id: "a-102", answer: "with", correct: true },
      { id: "a-103", answer: "in", correct: false },
      { id: "a-104", answer: "as", correct: false },
    ],
  },
  {
    id: "11",
    question:
      "Would you mind ...... these plates a wipe before putting them in the cupboard?",
    answers: [
      { id: "a-111", answer: "making", correct: false },
      { id: "a-112", answer: "doing", correct: false },
      { id: "a-113", answer: "getting", correct: false },
      { id: "a-114", answer: "giving", correct: true },
    ],
  },
  {
    id: "12",
    question:
      "I was looking forward ...... at the new restaurant, but it was closed.",
    answers: [
      { id: "a-121", answer: "to eat", correct: false },
      { id: "a-122", answer: "to have eaten", correct: false },
      { id: "a-123", answer: "to eating", correct: true },
      { id: "a-124", answer: "eating", correct: false },
    ],
  },
  {
    id: "13",
    question:
      "...... tired Melissa is when she gets home from work, she always makes time to say goodnight to the children.",
    answers: [
      { id: "a-131", answer: "Whatever", correct: false },
      { id: "a-132", answer: "No matter how", correct: true },
      { id: "a-133", answer: "However much", correct: false },
      { id: "a-134", answer: "Although", correct: false },
    ],
  },
  {
    id: "14",
    question: "It was only ten days ago ...... she started her new job.",
    answers: [
      { id: "a-141", answer: "then", correct: false },
      { id: "a-142", answer: "since", correct: false },
      { id: "a-143", answer: "after", correct: false },
      { id: "a-144", answer: "that", correct: true },
    ],
  },
  {
    id: "15",
    question:
      "The shop didn't have the shoes I wanted, but they've ...... a pair specially for me.",
    answers: [
      { id: "a-151", answer: "booked", correct: false },
      { id: "a-152", answer: "ordered", correct: true },
      { id: "a-153", answer: "commanded", correct: false },
      { id: "a-154", answer: "asked", correct: false },
    ],
  },
  {
    id: "16",
    question:
      "Have you got time to discuss your work now or are you ...... to leave?",
    answers: [
      { id: "a-161", answer: "thinking", correct: false },
      { id: "a-162", answer: "round", correct: false },
      { id: "a-163", answer: "planned", correct: false },
      { id: "a-164", answer: "about", correct: true },
    ],
  },
  {
    id: "17",
    question: "She came to live here ...... a month ago.",
    answers: [
      { id: "a-171", answer: "quite", correct: false },
      { id: "a-172", answer: "beyond", correct: false },
      { id: "a-173", answer: "already", correct: false },
      { id: "a-174", answer: "almost", correct: true },
    ],
  },
  {
    id: "18",
    question:
      "Once the plane is in the air, you can ...... your seat belts if you wish.",
    answers: [
      { id: "a-181", answer: "undress", correct: false },
      { id: "a-182", answer: "unfasten", correct: true },
      { id: "a-183", answer: "unlock", correct: false },
      { id: "a-184", answer: "untie", correct: false },
    ],
  },
  {
    id: "19",
    question: "I left my last job because I had no ...... to travel.",
    answers: [
      { id: "a-191", answer: "place", correct: false },
      { id: "a-192", answer: "possition", correct: false },
      { id: "a-193", answer: "opportunity", correct: true },
      { id: "a-194", answer: "possibility", correct: false },
    ],
  },
  {
    id: "20",
    question: "It wasn't a bad crash and ...... damage was done to my car.",
    answers: [
      { id: "a-201", answer: "little", correct: true },
      { id: "a-202", answer: "small", correct: false },
      { id: "a-203", answer: "light", correct: false },
      { id: "a-204", answer: "mere", correct: false },
    ],
  },
  {
    id: "21",
    question: "I'd rather you ...... to her why we can't go.",
    answers: [
      { id: "a-211", answer: "would explain", correct: false },
      { id: "a-212", answer: "explained", correct: true },
      { id: "a-213", answer: "to explain", correct: false },
      { id: "a-214", answer: "will explain", correct: false },
    ],
  },
  {
    id: "22",
    question:
      "Before making a decision, the leader considered all ...... of the argument.",
    answers: [
      { id: "a-221", answer: "sides", correct: true },
      { id: "a-222", answer: "features", correct: false },
      { id: "a-223", answer: "perspectives", correct: false },
      { id: "a-224", answer: "shades", correct: false },
    ],
  },
  {
    id: "23",
    question: "This new printer is recommended as being ...... reliable.",
    answers: [
      { id: "a-231", answer: "greatly", correct: false },
      { id: "a-232", answer: "highly", correct: true },
      { id: "a-233", answer: "strongly", correct: false },
      { id: "a-234", answer: "readily", correct: false },
    ],
  },
  {
    id: "24",
    question:
      "When I realised I had dropped my gloves, I decided to ...... my steps.",
    answers: [
      { id: "a-241", answer: "retrace", correct: true },
      { id: "a-242", answer: "regress", correct: false },
      { id: "a-243", answer: "resume", correct: false },
      { id: "a-244", answer: "return", correct: false },
    ],
  },
  {
    id: "25",
    question: "Anne's house is somewhere in the ...... of the railway station.",
    answers: [
      { id: "a-251", answer: "region", correct: false },
      { id: "a-252", answer: "quarter", correct: false },
      { id: "a-253", answer: "vicinity", correct: true },
      { id: "a-254", answer: "district", correct: false },
    ],
  },
];
export { tests };
