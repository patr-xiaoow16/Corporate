<template>
    <div>
        <svg ref="svg" :width="width" :height="height"></svg>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as d3 from 'd3';

const width = 400;
const height = 700;
const svg = ref(null);

const data = [
    { year: 2013, text: "Foundation of Borcelle", detail: "Foundation by a group of visionary entrepreneurs." },
    { year: 2015, text: "First Product", detail: "Launch of revolutionary project management software." },
    { year: 2016, text: "Expansion", detail: "Opened eight international branches." },
    { year: 2017, text: "Market Leader", detail: "Acquisition of a competitor, becoming a market leader." },
    { year: 2018, text: "New Product", detail: "Launch of a new product for business management." },
    { year: 2019, text: "Alliance", detail: "Alliance with a technology leader in AI." },
    { year: 2020, text: "Sustainability", detail: "Implemented social responsibility and sustainability policies." },
    { year: 2021, text: "E-Learning", detail: "Launched an online training platform." },
    { year: 2022, text: "Recognition", detail: "Recognized as a top innovative company." },
    { year: 2023, text: "10th Anniversary", detail: "Celebrating a decade of innovation." }
];

// 这是 wrap 函数的定义
function wrap(text, width) {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.5, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
        }
    });
}

onMounted(() => {
    const svgEl = d3.select(svg.value);
    const offsetX = 50;

    svgEl.append("line")
        .attr("class", "timeline")
        .attr("x1", width / 2 -60)
        .attr("y1", 50)
        .attr("x2", width / 2 -60)
        .attr("y2", height - 50)
        .style("stroke", "#bbb")
        .style("stroke-width", "2px");

    const events = svgEl.selectAll("g.event")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "event")
        .attr("transform", (d, i) => `translate(${width / 2 -60}, ${100 + i * 50})`);

    events.append("circle")
        .attr("r", 10)
        .style("fill", "orange")
        .style("stroke", "gray")
        .style("stroke-width", "1px");

    events.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", (d, i) => (i % 2 === 0 ? -50 : 50))
        .attr("y2", 0)
        .style("stroke", "gray")
        .style("stroke-width", "1px");

    events.append("text")
        .attr("x", (d, i) => (i % 2 === 0 ? -60 : 60))
        .attr("y", 0)
        .attr("dy", ".35em")
        .text((d, i) => `${i + 1}`)
        .style("text-anchor", (d, i) => i % 2 === 0 ? "end" : "start")
        .style("font-size", "12px")
        .style("fill", "black");

    events.append("text")
        .attr("class", "event-text")
        .attr("x", (d, i) => (i % 2 === 0 ? -180 : 180)) // 减小了文本位置偏移量
        .attr("y", 10)
        .attr("dy", ".35em")
        .text(d => `${d.year}: ${d.text}`)
        .style("text-anchor", (d, i) => i % 2 === 0 ? "end" : "start")
        .style("font-size", "12px")
        .style("fill", "black")
        .call(wrap, 150);

    events.append("text")
        .attr("class", "detail-text")
        .attr("x", (d, i) => (i % 2 === 0 ? -190 : 190)) // 减小了文本位置偏移量
        .attr("y", 40)
        .attr("dy", ".35em")
        .text(d => d.detail)
        .style("text-anchor", (d, i) => i % 2 === 0 ? "end" : "start")
        .style("font-size", "10px")
        .style("fill", "gray")
        .style("font-style", "italic")
        .call(wrap, 150);
});
</script>


<style scoped>
.timeline {
    stroke: #bbb;
    stroke-width: 2px;
}

.event-circle {
    fill: #4CAF50;
    stroke: none;
}

.event-text,
.detail-text {
    fill: black;
    font-family: Arial, sans-serif;
}
</style>