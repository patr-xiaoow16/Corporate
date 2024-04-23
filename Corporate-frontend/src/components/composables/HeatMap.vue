<template>
    <div ref="heatmapRef" style="width: 100%; position: relative; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.2);"></div>
    <div id="tooltip"
        style="position: absolute; visibility: hidden; padding: 8px 12px; background: rgba(255,255,255,0.9); border-radius: 4px; box-shadow: 0px 2px 10px rgba(0,0,0,0.2); font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 14px; color: #333; pointer-events: none; z-index: 10;">
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import * as d3 from 'd3';

const heatmapRef = ref(null);

onMounted(async () => {
    await nextTick();
    if (!heatmapRef.value) {
        console.error('Heatmap container is not mounted');
        return;
    }
    
    const data = await d3.csv('/业绩预告.csv');
    let allDays = [];
    data.forEach(entry => {
        const start = new Date(entry.报告期);
        const end = new Date(entry.公告日期);
        for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
            allDays.push({
                date: new Date(day),
                type: entry.业绩预告类型,
                performanceRange: entry['业绩预告区间 (万)']
            });
        }
    });

    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const cellSize = 10; // size of the cells
    const gapSize = 0.6;   // size of the gaps between the cells

    const width = heatmapRef.value.clientWidth - margin.left - margin.right;
    const cellsPerRow = Math.floor(width / (cellSize + gapSize));
    const numRows = Math.ceil(allDays.length / cellsPerRow);
    const computedHeight = numRows * (cellSize + gapSize) + margin.top + margin.bottom; // Compute the necessary height

    const svg = d3.select(heatmapRef.value)
        .append('svg')
        .attr('width', '100%')
        .attr('height', computedHeight)
        .style('display', 'block');

    const colorScale = d3.scaleOrdinal()
        .domain(['预增', '预降', '预平'])
        .range(['#ff8c8c', '#8ccfff', '#bebebe']);

    svg.selectAll('rect')
        .data(allDays)
        .enter()
        .append('rect')
        .attr('width', cellSize)
        .attr('height', cellSize)
        .attr('x', (d, i) => margin.left + (i % cellsPerRow) * (cellSize + gapSize))
        .attr('y', (d, i) => margin.top + Math.floor(i / cellsPerRow) * (cellSize + gapSize))
        .attr('fill', d => colorScale(d.type))
        .attr('stroke', '#ffffff')
        .attr('stroke-width', gapSize)
        .on('mouseover', (event, d) => {
            const tooltip = d3.select('#tooltip');
            const tooltipHtml = `<strong>日期:</strong> ${d.date.toISOString().slice(0, 10)}<br><strong>业绩预告区间:</strong> ${d.performanceRange}`;
            
            tooltip
                .style('visibility', 'visible')
                .style('left', `${event.pageX}px`)
                .style('top', `${event.pageY}px`)
                .html(tooltipHtml);
        })
        .on('mouseout', () => {
            d3.select('#tooltip').style('visibility', 'hidden');
        });

    // Update the height of the container to match the computed height of the SVG
    heatmapRef.value.style.height = `${computedHeight}px`;
});
</script>

