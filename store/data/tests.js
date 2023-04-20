const tests = [
  {
    id: "01",
    title: "Can I park here?",
    answers: [
      {
        id: "a-11",
        title: "Sorry, I did that.",
        correct_answer: false,
      },
      {
        id: "a-12",
        title: "It's the same place.",
        correct_answer: false,
      },
      {
        id: "a-13",
        title: "Only for half an hour.",
        correct_answer: true,
      },
    ],
  },
  {
    id: "02",
    title: "What colour will you paint the children's bedroom?",
    answers: [
      {
        id: "a-21",
        title: "I hope it was right.",
        correct_answer: false,
      },
      {
        id: "a-22",
        title: "We can't decide.",
        correct_answer: true,
      },
      {
        id: "a-23",
        title: "It wasn't very difficult.",
        correct_answer: false,
      },
    ],
  },
  {
    id: "03",
    title: "I can't understand this email.",
    answers: [
      {
        testID: "03",
        id: "a-31",
        title: "Would you like some help?",
        correct_answer: true,
      },
      {
        id: "a-32",
        title: "Don't you know?",
        correct_answer: false,
      },
      {
        id: "a-33",
        title: "I suppose you can.",
        correct_answer: false,
      },
    ],
  },
  {
    id: "04",
    title: "I'd like two tickets for tomorrow night.",
    answers: [
      { id: "a-41", title: "How much did you pay?", correct_answer: false },
      { id: "a-42", title: "Afternoon and evening.", correct_answer: false },
      { id: "a-43", title: "I'll just check for you.", correct_answer: true },
    ],
  },
  {
    id: "05",
    title: "Shall we go to the gym now?",
    answers: [
      { id: "a-51", title: "I'm too tired.", correct_answer: true },
      { id: "a-52", title: "It's very good.", correct_answer: false },
      { id: "a-53", title: "Not at all.", correct_answer: false },
    ],
  },
  {
    id: "06",
    title:
      "His eyes were ...... bad that he couldn't read the number plate of the car in front.",
    answers: [
      { id: "a-61", title: "such", correct_answer: false },
      { id: "a-62", title: "too", correct_answer: false },
      { id: "a-63", title: "so", correct_answer: true },
      { id: "a-64", title: "very", correct_answer: false },
    ],
  },
  {
    id: "07",
    title:
      "The company needs to decide ...... and for all what its position is on this point.",
    answers: [
      { id: "a-71", title: "here", correct_answer: false },
      { id: "a-72", title: "once", correct_answer: true },
      { id: "a-73", title: "first", correct_answer: false },
      { id: "a-74", title: "finally", correct_answer: false },
    ],
  },
  {
    id: "08",
    title:
      "Don't put your cup on the ...... of the table – someone will knock it off.",
    answers: [
      { id: "a-81", title: "outside", correct_answer: false },
      { id: "a-82", title: "edge", correct_answer: true },
      { id: "a-83", title: "boundary", correct_answer: false },
      { id: "a-84", title: "border", correct_answer: false },
    ],
  },
  {
    id: "09",
    title: "I'm sorry - I didn't ...... to disturb you.",
    answers: [
      { id: "a-91", title: "hope", correct_answer: false },
      { id: "a-92", title: "think", correct_answer: false },
      { id: "a-93", title: "mean", correct_answer: true },
      { id: "a-94", title: "suppose", correct_answer: false },
    ],
  },
  {
    id: "10",
    title: "The singer ended the concert ...... her most popular song.",
    answers: [
      { id: "a-101", title: "by", correct_answer: false },
      { id: "a-102", title: "with", correct_answer: true },
      { id: "a-103", title: "in", correct_answer: false },
      { id: "a-104", title: "as", correct_answer: false },
    ],
  },
  {
    id: "11",
    title:
      "Would you mind ...... these plates a wipe before putting them in the cupboard?",
    answers: [
      { id: "a-111", title: "making", correct_answer: false },
      { id: "a-112", title: "doing", correct_answer: false },
      { id: "a-113", title: "getting", correct_answer: false },
      { id: "a-114", title: "giving", correct_answer: true },
    ],
  },
  {
    id: "12",
    title:
      "I was looking forward ...... at the new restaurant, but it was closed.",
    answers: [
      { id: "a-121", title: "to eat", correct_answer: false },
      { id: "a-122", title: "to have eaten", correct_answer: false },
      { id: "a-123", title: "to eating", correct_answer: true },
      { id: "a-124", title: "eating", correct_answer: false },
    ],
  },
  {
    id: "13",
    title:
      "...... tired Melissa is when she gets home from work, she always makes time to say goodnight to the children.",
    answers: [
      { id: "a-131", title: "Whatever", correct_answer: false },
      { id: "a-132", title: "No matter how", correct_answer: true },
      { id: "a-133", title: "However much", correct_answer: false },
      { id: "a-134", title: "Although", correct_answer: false },
    ],
  },
  {
    id: "14",
    title: "It was only ten days ago ...... she started her new job.",
    answers: [
      { id: "a-141", title: "then", correct_answer: false },
      { id: "a-142", title: "since", correct_answer: false },
      { id: "a-143", title: "after", correct_answer: false },
      { id: "a-144", title: "that", correct_answer: true },
    ],
  },
  {
    id: "15",
    title:
      "The shop didn't have the shoes I wanted, but they've ...... a pair specially for me.",
    answers: [
      { id: "a-151", title: "booked", correct_answer: false },
      { id: "a-152", title: "ordered", correct_answer: true },
      { id: "a-153", title: "commanded", correct_answer: false },
      { id: "a-154", title: "asked", correct_answer: false },
    ],
  },
  {
    id: "16",
    title:
      "Have you got time to discuss your work now or are you ...... to leave?",
    answers: [
      { id: "a-161", title: "thinking", correct_answer: false },
      { id: "a-162", title: "round", correct_answer: false },
      { id: "a-163", title: "planned", correct_answer: false },
      { id: "a-164", title: "about", correct_answer: true },
    ],
  },
  {
    id: "17",
    title: "She came to live here ...... a month ago.",
    answers: [
      { id: "a-171", title: "quite", correct_answer: false },
      { id: "a-172", title: "beyond", correct_answer: false },
      { id: "a-173", title: "already", correct_answer: false },
      { id: "a-174", title: "almost", correct_answer: true },
    ],
  },
  {
    id: "18",
    title:
      "Once the plane is in the air, you can ...... your seat belts if you wish.",
    answers: [
      { id: "a-181", title: "undress", correct_answer: false },
      { id: "a-182", title: "unfasten", correct_answer: true },
      { id: "a-183", title: "unlock", correct_answer: false },
      { id: "a-184", title: "untie", correct_answer: false },
    ],
  },
  {
    id: "19",
    title: "I left my last job because I had no ...... to travel.",
    answers: [
      { id: "a-191", title: "place", correct_answer: false },
      { id: "a-192", title: "possition", correct_answer: false },
      { id: "a-193", title: "opportunity", correct_answer: true },
      { id: "a-194", title: "possibility", correct_answer: false },
    ],
  },
  {
    id: "20",
    title: "It wasn't a bad crash and ...... damage was done to my car.",
    answers: [
      { id: "a-201", title: "little", correct_answer: true },
      { id: "a-202", title: "small", correct_answer: false },
      { id: "a-203", title: "light", correct_answer: false },
      { id: "a-204", title: "mere", correct_answer: false },
    ],
  },
  {
    id: "21",
    title: "I'd rather you ...... to her why we can't go.",
    answers: [
      { id: "a-211", title: "would explain", correct_answer: false },
      { id: "a-212", title: "explained", correct_answer: true },
      { id: "a-213", title: "to explain", correct_answer: false },
      { id: "a-214", title: "will explain", correct_answer: false },
    ],
  },
  {
    id: "22",
    title:
      "Before making a decision, the leader considered all ...... of the argument.",
    answers: [
      { id: "a-221", title: "sides", correct_answer: true },
      { id: "a-222", title: "features", correct_answer: false },
      { id: "a-223", title: "perspectives", correct_answer: false },
      { id: "a-224", title: "shades", correct_answer: false },
    ],
  },
  {
    id: "23",
    title: "This new printer is recommended as being ...... reliable.",
    answers: [
      { id: "a-231", title: "greatly", correct_answer: false },
      { id: "a-232", title: "highly", correct_answer: true },
      { id: "a-233", title: "strongly", correct_answer: false },
      { id: "a-234", title: "readily", correct_answer: false },
    ],
  },
  {
    id: "24",
    title:
      "When I realised I had dropped my gloves, I decided to ...... my steps.",
    answers: [
      { id: "a-241", title: "retrace", correct_answer: true },
      { id: "a-242", title: "regress", correct_answer: false },
      { id: "a-243", title: "resume", correct_answer: false },
      { id: "a-244", title: "return", correct_answer: false },
    ],
  },
  {
    id: "25",
    title: "Anne's house is somewhere in the ...... of the railway station.",
    answers: [
      { id: "a-251", title: "region", correct_answer: false },
      { id: "a-252", title: "quarter", correct_answer: false },
      { id: "a-253", title: "vicinity", correct_answer: true },
      { id: "a-254", title: "district", correct_answer: false },
    ],
  },
];
export { tests };
