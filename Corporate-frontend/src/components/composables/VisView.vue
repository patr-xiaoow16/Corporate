<template>
    <div class="card">
      <div class="card-header">
        Data Visualization
      </div>
      <div ref="vegaContainer" class="vega-chart-container"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import vegaEmbed from 'vega-embed';
//   import { useStore } from '@/stores/main';
  

//   const store = useStore();

  const vegaContainer = ref(null);
  const spec = {
    // Vega-Lite specification object
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple bar chart with embedded data.',
    data: {
      values: [
        {a: 'A', b: 28}, {a: 'B', b: 55}, {a: 'C', b: 43},
        {a: 'D', b: 91}, {a: 'E', b: 81}, {a: 'F', b: 53},
        {a: 'G', b: 19}, {a: 'H', b: 87}, {a: 'I', b: 52}
      ]
    },
    mark: 'bar',
    encoding: {
      x: {field: 'a', type: 'nominal', axis: {labelAngle: 0}},
      y: {field: 'b', type: 'quantitative'}
    }
  };
  
  const renderChart = () => {
    if (vegaContainer.value) {
      vegaEmbed(vegaContainer.value, spec, { actions: false })
        .then(result => {
          console.log('Chart rendered!', result);
        })
        .catch(error => {
          console.error('Error rendering chart:', error);
          vegaContainer.value.innerHTML = 'Failed to render chart';
        });
    }
  };

//   const renderChart = () => {
//     const chart = store.charts[store.currentQuestionIndex];
//     if (vegaContainer.value && chart) {
//         vegaEmbed(vegaContainer.value, chart.spec, { actions: false })
//             .then(result => console.log('Chart rendered!', result))
//             .catch(error => console.error('Error rendering chart:', error));
//     }
// };
  
  onMounted(renderChart);
  </script>
  
  <style>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background-color: #fff;
    margin: 20px;
    overflow: hidden;
  }
  
  .card-header {
    padding: 16px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    background-color: #f9f9f9;
    border-bottom: 1px solid #eee;
  }
  
  .vega-chart-container {
    width: 100%;
    height: 400px;
  }
  </style>
  