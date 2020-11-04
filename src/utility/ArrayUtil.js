const Random = (min, max) => min + Math.random() * (max - min);
const RandomFill = ({ amount, min, max }) => {
  const arr = [];
  let total = 0;
  // fill an array with random numbers
  for (let i = 0; i < amount; i += 1) {
    arr.push(Random(min, max));
  }
  // add up all the numbers
  for (let i = 0; i < amount; i += 1) {
    total += arr[i];
  }
  // normalise so numbers add up to 1
  for (let i = 0; i < amount; i += 1) {
    arr[i] /= total;
  }
  return arr;
};

const GenerateCompositionData = () => {
  let pageTenData = RandomFill({
    amount: 9,
    min: 10,
    max: 100,
  });
  pageTenData = pageTenData.map((value) => Number((value * 100).toFixed(2)));
  const data = [
    { name: "Faecalibacterium", value: pageTenData[0], color: "#FF8080" },
    { name: "Anaerostipes", value: pageTenData[1], color: "#FFA040" },
    { name: "Bifidobacterium", value: pageTenData[2], color: "#C0C000" },
    { name: "Romboutsia", value: pageTenData[3], color: "#00C000" },
    { name: "Bacteroides", value: pageTenData[4], color: "#55A0FB" },
    { name: "Ruminococcus", value: pageTenData[5], color: "#AD07E3" },
    { name: "Subdoligranum", value: pageTenData[6], color: "#FF8080" },
    { name: "Blautia", value: pageTenData[7], color: "#FFA040" },
    { name: "Eubacterium hallii", value: pageTenData[8], color: "#C0C000" },
  ];
  return data;
};

export { RandomFill, GenerateCompositionData };
