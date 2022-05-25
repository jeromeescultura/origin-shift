import React from "react";
import DropdownQuestion from "../components/DropdownQuestion";

const samplepagetwo = () => {
  const questions = [
    [
      {
        id: 1,
        qst: "Are you currently looking to implement any specifiy sustainability or energy efficiency goals at your business for the future?",
        choices: {
          no: "Not really",
          yes: "Yes, I'm considering it",
        },
      },
      {
        id: 2,
        qst: "What sort of changes have been implemented (if any) to help reduce the impact your business has on the environment?",
        choices: {
          energy_source: [
            "Replaced some or all energy inneficient equipment at your site(s) with more efficient ones",
            "Switch to an energy plan that carbon offsets your energy use",
            "Invested in renewable generators through programs like GreenPower, to feed renewables into the grid",
            "Installed solar at your site(s)",
            "Added battery storage to your solar system",
            "Replaced some or all of your vehicle fleet with electric vehicles",
          ],
          general_operations: [
            "Replaced some or all packaging used for your business to use more sustainable alternatives",
            "Introduced recycling and waste reduction processes at office sites",
            "Invested in renewable generators through programs like GreenPower, to feed renewables into the grid",
            "Optimised supply chain processes to reduce material wastage",
          ],
        },
      },
      {
        id: 3,
        qst: "How important is reducing your business’ impact on the environment to you?",
        choices: {
          notImportant: 0,
          considerable: 1,
          neutral: 2,
          important: 3,
          veryImportant: 4,
        },
      },
    ],
    [
      {
        id: 1,
        qst: [
          "What type of industry do your work in?",
          "How many business sites are you responsible for the energy management of?",
        ],
        choices: {
          industry: [
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
          ],
          bsites: {
            oneTwo: 1,
            twoFive: 2,
            fiveTen: 3,
            tenPlus: 4,
            noSites: 0,
          },
        },
      },
      {
        id: 2,
        qst: "What sort of energy sources do you rely on?",
        choices: {
          electricity: "electricity",
          natural_gas: "natural gas",
          lpg: "LPG",
        },
      },
      {
        id: 3,
        qst: "Roughly when does your business use the most energy?",
        choices: {
          constant: {
            title: "constant",
            desc: "It requires 24 hour supply (eg. to run refrigeration units or warehouse temperature)",
          },
          mornings: {
            title: "mornings",
            desc: "Roughly between 1am – 9am",
          },
          evenings: {
            title: "evenings",
            desc: "Roughly between 5pm - 1am",
          },
          standard: {
            title: "standard times",
            desc: "Roughly between 5pm - 1am",
          },
          unconstrained: {
            title: "Unconstrained by specific operating hours",
            desc: "Energy use varies greatly depending on business priorities",
          },
        },
      },
      {
        id: 4,
        qst: "Do you have land or roof space where you are allowed to renovate, upgrade or install equipment?",
        choices: {
          yes: "yes",
          no: "no",
          maybe: "i'm not sure",
        },
      },
    ],

    [
      {
        id: 1,
        qst: "Would you prefer to support projects in Australia only, or a mix of local and international projects?",
        choices: {
          au: "australian only",
          mix: "a mix",
        },
      },
      {
        id: 2,
        qst: "How much of an investment are you willing to make towards helping reduce the climate impact of your business practices?",
        choices: {
          little: "little to none",
          more: "i am open to investing a bit more, if it is within my means",
          many: "i have secured the capital or appetite of stakeholders to invest more",
        },
      },
      {
        id: 3,
        qst: "Would you be open to making a larger investment to explore bigger projects, if you didn’t need to invest too much capital upfront?",
        choices: {
          yes: "yes",
          no: "no",
          maybe: "i'm not sure",
        },
      },
    ],
  ];
  return (
    <div>
      <DropdownQuestion question={questions[1][0]} />
    </div>
  );
};

export default samplepagetwo;
