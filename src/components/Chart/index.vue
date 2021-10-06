<template>
  <div :class="{hidden: currentView !== 'chart'}">
    <p class="chart-title">Global data chart</p>
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent, computed } from "vue";
import { useStore } from "vuex";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  setup() {
    const store = useStore();
    const currentView = computed(() => store.getters.getCurrentView);
    const option = ref({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar"
        },
      ],
    });

    return {
      option,
      currentView
      };
  },
});
</script>

<style scoped>

div,
.chart {
  height: 60vh;
}

div {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.chart {
  width: 50vw;
  margin: 0 auto;
  -webkit-box-shadow: 5px 5px 15px -1px #000000;
  box-shadow: 5px 5px 15px -1px #000000;
}

.chart-title {
  margin: 0 auto;
  text-align: center;
  font-size: 1.25vw;
  font-weight: bold;
  margin: 10vh auto 2vh;
}

.hidden {
  display: none;
}
</style>
