import _ from "lodash";
import {
  USER_SAMPLE_ROLES,
  EXPORT_ROLE,
  DELIVERY_MODE,
  MILK_FEEDING,
  CHILD_STAGE,
} from "../constants/DefaultValues";
import { urlToBase64 } from "./ImageUtil";
import { isMom } from "./ProfileUtils";
import { getTimePointHumanString } from "./SampleUtil";

const getExportRole = ({
  role,
  xSampleId,
  deliveryMode,
  timePoint,
  milkFeeding,
}) => {
  if (isMom({ role })) {
    if (xSampleId === "SMF8.B") {
      return EXPORT_ROLE.MOM_1;
    }
    return EXPORT_ROLE.MOM_2;
  }
  if (role === USER_SAMPLE_ROLES.BABY) {
    if (deliveryMode === DELIVERY_MODE.VD_IAP) {
      return EXPORT_ROLE.BABY_4;
    }
    if (
      [
        DELIVERY_MODE.C_SECTION_ELECTIVE,
        DELIVERY_MODE.C_SECTION_EMERGENCY,
        DELIVERY_MODE.C_Section,
      ].includes(deliveryMode)
    ) {
      return EXPORT_ROLE.BABY_5;
    }
    if (["Year1"].includes(timePoint)) {
      return EXPORT_ROLE.BABY_1;
    }
    if (
      [
        MILK_FEEDING.BREAST_MILK,
        MILK_FEEDING.SOLELY_BF,
        MILK_FEEDING.SOLELY_FF,
      ].includes(milkFeeding)
    ) {
      return EXPORT_ROLE.BABY_3;
    }
  }
  return EXPORT_ROLE.BABY_2;
};
const getIndicateTableContent = async ({ role, number }) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;
  const imagesSummary = await Promise.all([
    urlToBase64("/img/pdf/baby_curled.png", "png"),
  ]);
  const BABY_CURLED = imagesSummary[0];

  const styleIndicateNormal = {
    fontSize: 14,
    color: "#161616",
    lineHeight: 1.29,
  };
  const content = [];
  if (!isBaby) {
    if (number === 1) {
      content.push([
        {
          ...styleIndicateNormal,
          italics: true,
          text: [
            "Faecalibacterium\n",
            "Anaerostipes\n",
            "Ruminococcus\n",
            "Subdoligranum\n",
            "Eubacterium hallii\n",
            "Bifidobacterium\n",
          ],
        },
        {
          ...styleIndicateNormal,
          text: [
            "Convert the fibers and phytonutrients present in fruits, vegetables, legumes, grains directly or indirectly into beneficial bio-chemicals such as butyrate, that sustain our health.\n\n",
            "Butyrate is a small molecule that positively regulates our immune system. Butyrate is also a source of energy for the cells lining our intestine, and it also contributes to strengthen our intestinal barrier, a physical barrier that protects our body from being invaded by microbes and other harmful molecules present inside our gut.\n\n",
            {
              text: [
                "Among these microbes, ",
                { text: "Bifidobacterium", bold: true },
                " will be transferred from mother to baby during vaginal birth and breastfeeding.\n\n",
              ],
            },
          ],
        },
      ]);
      content.push([
        {
          stack: [
            {
              ...styleIndicateNormal,
              italics: true,
              text: ["\nBifidobacterium\n"],
            },
            { image: BABY_CURLED, width: 98, height: 118 },
          ],
        },
        {
          ...styleIndicateNormal,
          text: [
            "\nUses omega-3 present in fish, seafood and nuts and converts them, indirectly by cooperating with ",
            { text: "Faecalibacterium", bold: true },
            " for instance, into beneficial bio-chemicals (butyrate) that sustain our health.\n\n",
            { text: "Bifidobacterium", bold: true },
            " is one of the best microbial friends of baby. It is passed down from generation to generation, from grandmother to mother to granddaughter.\n\n",
            "Yes, Mummy. You will be transferring your",
            { text: "Bifidobacterium", bold: true },
            " to your baby during birth and breastfeeding!\n\n",
          ],
        },
      ]);
      content.push([
        {
          ...styleIndicateNormal,
          italics: true,
          text: ["\nBifidobacterium\n"],
        },
        {
          ...styleIndicateNormal,
          text: [
            { text: "\nBifidobacterium", bold: true },
            " consumes the sugars present in breast milk, and by doing so ",
            { text: "Bifidobacterium", bold: true },
            " shapes a healthy gut in your baby. The presence of ",
            { text: "Bifidobacterium", bold: true },
            "  in early life has been associated with a robust immunity such as protection against harmful microbes, decreased risk of allergy and better vaccination response.",
          ],
        },
      ]);
    } else if (number === 2) {
      content.push([
        {
          ...styleIndicateNormal,
          italics: true,
          text: [
            "Bifidobacterium\n",
            "Faecalibacterium\n",
            "Prevotella\n",
            "Roseburia\n",
          ],
        },
        {
          ...styleIndicateNormal,
          text: [
            "Convert the fibers and phytonutrients present in fruits, vegetables, legumes, grains directly or indirectly into beneficial bio-chemicals such as butyrate, that sustain our health.\n\n",
            "Butyrate is a small molecule that positively regulates our immune system. Butyrate is also a source of energy for the cells lining our intestine, and it also contributes to strengthen our intestinal barrier, a physical barrier that protects our body from being invaded by microbes and other harmful molecules present inside our gut.\n\n",
            {
              text: [
                "Among these microbes, ",
                { text: "Bifidobacterium", bold: true },
                " will be transferred from mother to baby during vaginal birth and breastfeeding.\n\n",
              ],
            },
          ],
        },
      ]);
      content.push([
        {
          stack: [
            {
              ...styleIndicateNormal,
              italics: true,
              text: ["\nBifidobacterium\n"],
            },
            { image: BABY_CURLED, width: 98, height: 118 },
          ],
        },
        {
          ...styleIndicateNormal,
          text: [
            "\nUses omega-3 present in fish, seafood and nuts and converts them, indirectly by cooperating with ",
            { text: "Faecalibacterium", bold: true },
            " for instance, into beneficial bio-chemicals (butyrate) that sustain our health.\n\n",
            { text: "Bifidobacterium", bold: true },
            " is one of the best microbial friends of baby. It is passed down from generation to generation, from grandmother to mother to granddaughter.\n\n",
          ],
        },
      ]);
      content.push([
        {
          ...styleIndicateNormal,
          italics: true,
          text: ["\nBifidobacterium\n"],
        },
        {
          ...styleIndicateNormal,
          text: [
            { text: "\nBifidobacterium", bold: true },
            " consumes the sugars present in breast milk, and by doing so ",
            { text: "Bifidobacterium", bold: true },
            " shapes a healthy gut in your baby. The presence of ",
            { text: "Bifidobacterium", bold: true },
            "  in early life has been associated with a robust immunity such as protection against harmful microbes, decreased risk of allergy and better vaccination response.",
          ],
        },
      ]);
    }
  } else if (number === 1) {
    // baby 01
    content.push([
      {
        ...styleIndicateNormal,
        italics: true,
        text: [
          "Faecalibacterium\n",
          "Bifidobacterium\n",
          "Roseburia\n",
          "Blautia\n",
        ],
      },
      {
        ...styleIndicateNormal,
        text: [
          "Convert the fibers and phytonutrients present in fruits, vegetables, legumes, grains directly or indirectly into beneficial bio-chemicals such as butyrate, that sustain our health.\n\n",
          "Butyrate is a small molecule that positively regulates our immune system. Butyrate is also a source of energy for the cells lining our intestine, and it also contributes to strengthen our intestinal barrier, a physical barrier that protects our body from being invaded by microbes and other harmful molecules present inside our gut.\n\n",
          {
            text: [
              "Among these microbes, ",
              { text: "Bifidobacterium", bold: true },
              "  will be transferred from mother to baby during vaginal birth and breastfeeding.\n\n",
            ],
          },
        ],
      },
    ]);
    content.push([
      {
        stack: [
          {
            ...styleIndicateNormal,
            italics: true,
            text: ["\nBifidobacterium\n"],
          },
          { image: BABY_CURLED, width: 98, height: 118 },
        ],
      },
      {
        ...styleIndicateNormal,
        text: [
          "\nUses omega-3 present in fish, seafood and nuts and converts them, indirectly by cooperating with ",
          { text: "Faecalibacterium", bold: true },
          " for instance, into beneficial bio-chemicals (butyrate) that sustain our health.\n\n",
          { text: "Bifidobacterium", bold: true },
          "  is one of the best microbial friends of baby. It is passed down from generation to generation, from grandmother to mother to granddaughter.\n\n",
          "Yes, Mummy. You transferred your ",
          { text: "Bifidobacterium", bold: true },
          " to your baby during birth and breastfeeding. And if you are still breastfeeding your baby, the sugars present in breast milk nurture your baby's ",
          { text: "Bifidobacterium.\n\n", bold: true },
        ],
      },
    ]);
    content.push([
      {
        ...styleIndicateNormal,
        italics: true,
        text: ["\nBifidobacterium\n"],
      },
      {
        ...styleIndicateNormal,
        text: [
          { text: "\nBifidobacterium", bold: true },
          " consumes the sugars present in breast milk, and by doing so ",
          { text: "Bifidobacterium", bold: true },
          " shapes a healthy gut in your baby. The presence of ",
          { text: "Bifidobacterium", bold: true },
          " in early life has been associated with a robust immunity such as protection against harmful microbes, decreased risk of allergy and better vaccination response.",
        ],
      },
    ]);
  } else if (number === 2) {
    // baby 02
    content.push([
      {
        stack: [
          {
            ...styleIndicateNormal,
            italics: true,
            text: ["\nBifidobacterium\n"],
          },
          { image: BABY_CURLED, width: 98, height: 118 },
        ],
      },
      {
        ...styleIndicateNormal,
        text: [
          { text: "\nBifidobacterium", bold: true },
          " is one of the best microbial friends of baby. It is passed down from generation to generation, from grandmother to mother to granddaughter.\n\n",
          "Yes, Mummy. You transferred your ",
          { text: "Bifidobacterium", bold: true },
          " to your baby during birth and breastfeeding. And if you are still breastfeeding your baby, the sugars present in breast milk nurture your baby's ",
          { text: "Bifidobacterium.\n\n", bold: true },
          { text: "Bifidobacterium", bold: true },
          " consumes the sugars present in breast milk, and by doing so ",
          { text: "Bifidobacterium", bold: true },
          " shapes a healthy gut in your baby. The presence of ",
          { text: "Bifidobacterium", bold: true },
          " in early life has been associated with a robust immunity such as protection against harmful microbes, decreased risk of allergy and better vaccination response.\n\n",
        ],
      },
    ]);
    content.push([
      {
        ...styleIndicateNormal,
        italics: true,
        text: ["\nBacteroides\n"],
      },
      {
        ...styleIndicateNormal,
        text: [
          { text: "\nBacteroides", bold: true },
          "  has been detected in the poop of babies born vaginally and breastfed.\n\n",
          "Similar to ",
          { text: "Bifidobacterium", bold: true },
          ", it is passed down from generation to generation, from grandmother to mother to granddaughter.\n\n",
          { text: "Bacteroides", bold: true },
          "  is known to have the ability to consume the sugars present in breast milk. However, little is known about its role in early life.",
        ],
      },
    ]);
  } else if (number === 3) {
    content.push([
      {
        stack: [
          {
            ...styleIndicateNormal,
            italics: true,
            text: ["\nBifidobacterium\n"],
          },
          { image: BABY_CURLED, width: 98, height: 118 },
        ],
      },
      {
        ...styleIndicateNormal,
        text: [
          { text: "\nBifidobacterium", bold: true },
          " is one of the best microbial friends of baby. It is passed down from generation to generation, from grandmother to mother to granddaughter.\n\n",
          "Yes, Mummy. You transferred your ",
          { text: "Bifidobacterium", bold: true },
          " to your baby during birth and breastfeeding. And if you are still breastfeeding your baby, the sugars present in breast milk nurture your baby's ",
          { text: "Bifidobacterium.\n\n", bold: true },
          { text: "Bifidobacterium", bold: true },
          " consumes the sugars present in breast milk, and by doing so ",
          { text: "Bifidobacterium", bold: true },
          " shapes a healthy gut in your baby. The presence of ",
          { text: "Bifidobacterium", bold: true },
          " in early life has been associated with a robust immunity such as protection against harmful microbes, decreased risk of allergy and better vaccination response.\n\n",
        ],
      },
    ]);
    content.push([
      {
        ...styleIndicateNormal,
        italics: true,
        text: ["\nStreptococcus\n"],
      },
      {
        ...styleIndicateNormal,
        text: [
          { text: "\nStreptococcus", bold: true },
          " is known to have the ability to ferment lactose that is present in breast milk.",
          { text: "Streptococcus", bold: true },
          " has been identified in the gut microbiome of breastfed babies.\n\n",
        ],
      },
    ]);
  } else if (number === 4) {
    content.push([
      {
        ...styleIndicateNormal,
        italics: true,
        text: ["Faecalibacterium\n", "Blautia\n", "Bifidobacterium\n"],
      },
      {
        ...styleIndicateNormal,
        text: [
          "Convert the fibers and phytonutrients present in fruits, vegetables, legumes, grains directly or indirectly into beneficial bio-chemicals such as butyrate, that sustain our health.\n\n",
          "Butyrate is a small molecule that positively regulates our immune system. Butyrate is also a source of energy for the cells lining our intestine, and it also contributes to strengthen our intestinal barrier, a physical barrier that protects our body from being invaded by microbes and other harmful molecules present inside our gut.\n\n",
          {
            text: [
              "Among these microbes, ",
              { text: "Bifidobacterium", bold: true },
              " will be transferred from mother to baby during vaginal birth and breastfeeding.\n\n",
            ],
          },
        ],
      },
    ]);
    content.push([
      {
        stack: [
          {
            ...styleIndicateNormal,
            italics: true,
            text: ["\nBifidobacterium\n"],
          },
          { image: BABY_CURLED, width: 98, height: 118 },
        ],
      },
      {
        ...styleIndicateNormal,
        text: [
          "\nUses omega-3 present in fish, seafood and nuts and converts them, indirectly by cooperating with ",
          { text: "Faecalibacterium", bold: true },
          " for instance, into beneficial bio-chemicals (butyrate) that sustain our health.\n\n",
        ],
      },
    ]);
    content.push([
      {
        ...styleIndicateNormal,
        italics: true,
        text: ["\nBifidobacterium\n"],
      },
      {
        ...styleIndicateNormal,
        text: [
          { text: "\nBifidobacterium", bold: true },
          " is one of the best microbial friends of baby. It is passed down from generation to generation, from grandmother to mother to granddaughter.\n\n",
          "Yes, Mummy. You transferred your ",
          { text: "Bifidobacterium", bold: true },
          " to your baby during birth and breastfeeding. And if you are still breastfeeding your baby, the sugars present in breast milk nurture your baby's ",
          { text: "Bifidobacterium.\n\n", bold: true },
          { text: "Bifidobacterium", bold: true },
          " consumes the sugars present in breast milk, and by doing so ",
          { text: "Bifidobacterium", bold: true },
          " shapes a healthy gut in your baby. The presence of ",
          { text: "Bifidobacterium", bold: true },
          " in early life has been associated with a robust immunity such as protection against harmful microbes, decreased risk of allergy and better vaccination response.",
        ],
      },
    ]);
  } else if (number === 5) {
    content.push([
      {
        stack: [
          {
            ...styleIndicateNormal,
            italics: true,
            text: ["\nBifidobacterium\n"],
          },
          { image: BABY_CURLED, width: 98, height: 118 },
        ],
      },
      {
        ...styleIndicateNormal,
        text: [
          { text: "Bifidobacterium", bold: true },
          " is one of the best microbial friends of baby. It is passed down from generation to generation, from grandmother to mother to granddaughter.\n\n",
          "Yes, Mummy. You transferred your ",
          { text: "Bifidobacterium", bold: true },
          " to your baby during birth and breastfeeding. And if you are still breastfeeding your baby, the sugars present in breast milk nurture your baby's ",
          { text: "Bifidobacterium.\n\n", bold: true },
          { text: "Bifidobacterium", bold: true },
          " consumes the sugars present in breast milk, and by doing so ",
          { text: "Bifidobacterium", bold: true },
          " shapes a healthy gut in your baby. The presence of ",
          { text: "Bifidobacterium", bold: true },
          " in early life has been associated with a robust immunity such as protection against harmful microbes, decreased risk of allergy and better vaccination response.\n\n",
        ],
      },
    ]);
    content.push([
      {
        ...styleIndicateNormal,
        italics: true,
        text: ["\nBacteroides\n"],
      },
      {
        ...styleIndicateNormal,
        text: [
          { text: "\nBacteroides", bold: true },
          " has been detected in the poop of babies born vaginally and breastfed.\n\n",
          "Similar to ",
          { text: "Bifidobacterium", bold: true },
          ", it is passed down from generation to generation, from grandmother to mother to granddaughter.\n\n",
          { text: "Bacteroides", bold: true },
          " is known to have the ability to consume the sugars present in breast milk. However, little is known about its role in early life.",
        ],
      },
    ]);
  }

  return content;
};

const getMenu = ({ exportRole, hideFact }) => {
  if (
    [
      EXPORT_ROLE.MOM_1,
      EXPORT_ROLE.MOM_2,
      EXPORT_ROLE.BABY_1,
      EXPORT_ROLE.BABY_4,
    ].includes(exportRole)
  ) {
    const menu = [
      { title: "Introduction", page: 0, slug: _.kebabCase("Introduction") },
      { title: "Composition", page: 4, slug: _.kebabCase("Composition") },
      { title: "Tips", page: 5, slug: _.kebabCase("Tips") },
    ];
    if (!hideFact) {
      menu.push({ title: "Facts", page: 12, slug: _.kebabCase("Facts") });
    }
    return menu;
  }
  const menu = [
    { title: "Introduction", page: 0, slug: _.kebabCase("Introduction") },
    { title: "Composition", page: 4, slug: _.kebabCase("Composition") },
    { title: "Support", page: 6, slug: _.kebabCase("Support") },
  ];
  if (!hideFact) {
    menu.push({ title: "Facts", page: 8, slug: _.kebabCase("Facts") });
  }

  return menu;
};

const getFootNoteData = ({ sample, member, width = 452 }) => {
  let result;
  const { deliveryMode, role } = member;
  if (role === USER_SAMPLE_ROLES.BABY) {
    const humanTimePoint = getTimePointHumanString({
      timePoint: sample.timePoint,
    });
    if (deliveryMode === DELIVERY_MODE.VD_IAP) {
      result = {
        y: 730,
        fontSize: 9,
        content: [
          [
            "*",
            {
              columns: [
                {
                  width,
                  text: [
                    `Database of babies born vaginally with IAP at ${humanTimePoint} of age.`,
                    " Intrapartum antibiotic prophylaxis (IAP) refers to the prescription/ administration of antibiotics to pregnant",
                    " women when labor begins. As part of prenatal care, pregnant women are tested for group B",
                    {
                      text: " Streptococcus",
                      italics: true,
                      margin: [20],
                    },
                    " (GBS) during their third trimester. If they are diagnosed as GBS carriers, they will be prescribed IAP when labor begins. This prevents the spread of GBS to the baby during labor, which prevents early onset neonatal",
                    " infections such as",
                    {
                      text: " Streptococcus",
                      italics: true,
                    },
                    " B infection (GBS infection). IAP could also be prescribed if the pregnant",
                    " woman develops a fever during labor.\n\n",
                  ],
                },
              ],
            },
          ],
          [
            "^",
            {
              text: [
                `Database of babies born vaginally at ${humanTimePoint} of age.`,
              ],
            },
          ],
        ],
      };
    } else if (
      [
        DELIVERY_MODE.C_Section,
        DELIVERY_MODE.C_SECTION_ELECTIVE,
        DELIVERY_MODE.C_SECTION_EMERGENCY,
      ].includes(deliveryMode)
    ) {
      result = {
        y: 810,
        fontSize: 10,
        content: [
          [
            "*",
            {
              columns: [
                {
                  width,
                  text: `Database of babies born by C-section at ${humanTimePoint} of age.\n`,
                },
              ],
            },
          ],
          [
            "^",
            {
              columns: [
                {
                  width,
                  text: `Database of babies born vaginally at ${humanTimePoint} of age.`,
                },
              ],
            },
          ],
        ],
      };
    } else {
      // VD
      result = {
        y: 810,
        fontSize: 10,
        content: [
          [
            "*",
            {
              columns: [
                {
                  width,
                  text: `Database of babies born vaginally at ${humanTimePoint} of age.\n`,
                },
              ],
            },
          ],
        ],
      };
    }
  } else {
    result = {
      y: 816,
      fontSize: 10,
      content: [
        [
          "*",
          {
            columns: [
              {
                width,
                text: `Database of mothers in their third trimester of pregnancy.\n`,
              },
            ],
          },
        ],
      ],
    };
  }
  return result;
};

const getTableContent = ({
  exportRole,
  hadData,
  childStage,
  isHcp = false,
}) => {
  let childStr = "";
  let widthLongText = 370;
  if (childStage === CHILD_STAGE.BABY) {
    childStr = "Baby";
    widthLongText = 370;
  } else if (childStage === CHILD_STAGE.TODDLE) {
    childStr = "Toddler";
    widthLongText = 388;
  } else if (childStage === CHILD_STAGE.YOUNG) {
    childStr = "Child Young";
  }
  switch (exportRole) {
    case EXPORT_ROLE.BABY_1:
    case EXPORT_ROLE.BABY_4: {
      const content = [
        {
          text: `A Microbiome Report, Unique to Your ${childStr}`,
          pageLink: 1,
        },
        {
          text: "Microbiome Composition",
          bold: true,
          color: "#8161ac",
          pageLink: 5,
        },
        {
          text: `Tips to Nurture Your ${childStr}'s Microbiome`,
          bold: true,
          color: "#01a0e3",
          pageLink: hadData ? 11 : 11 - 5,
        },
        {
          text: "How Can You Support a Healthy Microbiome",
          isSub: true,
          pageLink: hadData ? 13 : 13 - 5,
        },
        {
          text: `Personalized Food Table Based on Your ${childStr}'s Microbiome`,
          isSub: true,
          pageLink: hadData ? 14 : 14 - 5,
          textWidth: widthLongText,
        },
        {
          text: "My Healthy Plate",
          isSub: true,
          pageLink: hadData ? 15 : 15 - 5,
        },
      ];
      if (!isHcp) {
        content.push({
          text: "Facts About Our Microbiome",
          bold: true,
          color: "#00cdca",
          pageLink: hadData ? 18 : 18 - 5,
        });
      }
      if (hadData) {
        content.splice(2, 0, {
          text: "RESULTS: Microbiome Composition Comparison",
          isSub: true,
          pageLink: 7,
        });
        content.splice(2, 0, {
          text: "RESULTS: Microbiome Composition",
          isSub: true,
          pageLink: 6,
        });
      }
      return content;
    }
    case EXPORT_ROLE.BABY_2:
    case EXPORT_ROLE.BABY_3:
    case EXPORT_ROLE.BABY_5: {
      const content = [
        {
          text: `A Microbiome Report, Unique to Your ${childStr}`,
          pageLink: 1,
        },
        {
          text: "Microbiome Composition",
          bold: true,
          color: "#8161ac",
          pageLink: 5,
        },
        {
          text: `How Can You Support Your ${childStr}'s Microbiome`,
          bold: true,
          color: "#01a0e3",
          pageLink: hadData ? 11 : 11 - 4,
        },
      ];
      if (!isHcp) {
        content.push({
          text: "Facts About Our Microbiome",
          bold: true,
          color: "#00cdca",
          pageLink: hadData ? 13 : 13 - 4,
        });
      }
      if (hadData) {
        content.splice(2, 0, {
          text: "RESULTS: Microbiome Composition Comparison",
          isSub: true,
          pageLink: 7,
        });
        content.splice(2, 0, {
          text: "RESULTS: Microbiome Composition",
          isSub: true,
          pageLink: 6,
        });
      }
      return content;
    }
    case EXPORT_ROLE.MOM_1:
    case EXPORT_ROLE.MOM_2: {
      const content = [
        {
          text: `A Microbiome Report, Uniquely Yours`,
          pageLink: 1,
        },
        {
          text: "Microbiome Composition",
          bold: true,
          color: "#8161ac",
          pageLink: 5,
        },
        {
          text: `Tips to Nurture Your Microbiome`,
          bold: true,
          color: "#01a0e3",
          pageLink: hadData ? 11 : 11 - 5,
        },
        {
          text: "How Can You Support a Healthy Microbiome",
          isSub: true,
          pageLink: hadData ? 13 : 13 - 5,
        },
        {
          text: `Personalized Food Table Based on Your Microbiome`,
          isSub: true,
          pageLink: hadData ? 14 : 14 - 5,
        },
        {
          text: "My Healthy Plate",
          isSub: true,
          pageLink: hadData ? 15 : 15 - 5,
        },
      ];
      if (!isHcp) {
        content.push({
          text: "Facts About Our Microbiome",
          bold: true,
          color: "#00cdca",
          pageLink: hadData ? 18 : 18 - 5,
        });
      }
      if (hadData) {
        content.splice(2, 0, {
          text: "RESULTS: Microbiome Composition Comparison",
          isSub: true,
          pageLink: 7,
        });
        content.splice(2, 0, {
          text: "RESULTS: Microbiome Composition",
          isSub: true,
          pageLink: 6,
        });
      }
      return content;
    }
    default:
      break;
  }
  return [];
};

export {
  getExportRole,
  getIndicateTableContent,
  getMenu,
  getFootNoteData,
  getTableContent,
};
