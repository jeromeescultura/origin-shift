const questions = [
  {
    iconsQuestion: {
      id: "02",
      text: "What sort of energy sources do you rely on?",
      subText: "Select all that apply.",
      options: [
        {
          id: 1,
          text: "Electricity",
          icon: "/icons/electricity.svg",
        },
        {
          id: 2,
          text: "Natural gas",
          icon: "/icons/gas.svg",
        },
        {
          id: 3,
          text: "LPG",
          icon: "/icons/lpg.svg",
        },
      ],
    },
  },
  {
    checkboxQuestion: {
      id: "02",
      icon: "/icons/flame.svg",
      title: "General operations changes",
      text: "What sort of changes have been implemented (if any) to help reduce the impact your business has on the environment?",
      subText: "Select none or as many that apply.",
      questions: [
        {
          id: 1,
          text: "Replaced some or all energy inneficient equipment at your site(s) with more efficient ones",
        },
        {
          id: 2,
          text: "Switch to an energy plan that carbon offsets your energy use",
        },
        {
          id: 3,
          text: "Invested in renewable generators through programs like GreenPower, to feed renewables into the grid",
        },
      ],
    },
  },
  {
    radioQuestion: {
      id: "01",
      text: "How many business sites are you responsible for the energy management of?",
      options: [
        {
          id: 1,
          text: "1-2 sites",
        },
        {
          id: 2,
          text: "2-5 sites",
        },
        {
          id: 3,
          text: "No business sites - I operate out of my home",
        },
      ],
    },
  },
  {
    buttonQuestion: {
      id: "01",
      text: "Are you currently looking to implement any specifiy sustainability or energy efficiency goals at your business for the future?",
      options: [
        {
          id: 1,
          text: "Not really",
        },
        {
          id: 2,
          text: "Yes, I'm considering it",
        },
      ],
    },
  },
  {
    dropdownQuestion: {
      id: "01",
      text: "What type of industry do your work in?",
      options: [
        {
          id: 1,
          text: "test",
        },
        {
          id: 2,
          text: "sample",
        },
        {
          id: 3,
          text: "egg",
        },
        {
          id: 4,
          text: "hotdog",
        },
      ],
    },
  },
  {
    iconsRadioQuestion: {
      id: "01",
      text: "Would you prefer to support projects in Australia only, or a mix of local and international projects?",
      options: [
        {
          id: 1,
          icon: "/icons/au.svg",
          text: "australian only",
        },
        {
          id: 2,
          icon: "/icons/world.svg",
          text: "a mix",
        },
      ],
    },
  },
  {
    sliderQuestion: {
      id: "03",
      text: "How important is reducing your business’ impact on the environment to you?",
      options: [
        {
          id: 1,
          text: "Not Important",
        },
        {
          id: 2,
          text: "",
        },
        {
          id: 3,
          text: "",
        },
        {
          id: 4,
          text: "",
        },
        {
          id: 5,
          text: "Very Important",
        },
      ],
    },
  },
];

export default function handler(req, res) {
  res.status(200).json(questions);
}
