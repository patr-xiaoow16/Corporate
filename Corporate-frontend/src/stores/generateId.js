let lastId = 0;

export function generateChartId() {
    lastId += 1;
    return `chart-container-${lastId}`;
}
