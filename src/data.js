const color = "rgba(75,192,192,1)";

const datasets = [
  {
    label: "My First dataset",
    lineTension: 0.1,
    borderColor: color,
    backgroundColor: "#EBF5FB",
    hidden: false,
    fill: false,
    data: [65, 59, 80, 81, 56, 55, 40],
  },
  {
    label: "second dataset",
    lineTension: 0.1,
    data: [45, 51, 75, 40, 5, 35, 20],
    borderColor: color,
    hidden: false,
    fill: false,
  },
];

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = { labels, datasets };
