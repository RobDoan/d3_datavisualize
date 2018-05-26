import { factoryChart } from "../lib";

export default function run() {
  const chart = factoryChart();

  chart.container
    .append("text")
    .text("Ceci n'est pas un trajet!")
    .attr("x", 50)
    .attr("y", 200)
    .attr("text-anchor", "start");

  chart.container
    .append("circle")
    .attr("cx", 350)
    .attr("cy", 250)
    .attr("r", 80)
    .attr("fill", "green")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 0.7);

  const rect = chart.container.insert("rect", "circle");

  rect
    .attr("x", 250)
    .attr("y", 150)
    .attr("width", 250)
    .attr("height", 250)
    .attr("fill", "white")
    .attr("stroke", "green");

  chart.container
    .append("ellipse")
    .attr("cx", 450)
    .attr("cy", 450)
    .attr("rx", 150)
    .attr("ry", 70)
    .attr("fill", "green")
    .attr("stroke-width", 0.7);

  chart.container
    .append("line")
    .attr("x1", 10)
    .attr("y1", 10)
    .attr("x2", 100)
    .attr("y2", 100)
    .attr("stroke", "blue")
    .attr("stroke-width", 3);
}
