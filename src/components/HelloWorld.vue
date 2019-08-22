<template>
  <div id="myChartWhater" :style="{width: '340px', height: '220px',margin:'0 auto',}"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  mounted() {
    this.initWhater();
  },
  methods: {
    initWhater() {
      let myChart = this.$echarts.init(document.getElementById("myChartWhater"));
      myChart.setOption({
        series: [
          {
            name: "风险预警占比",
            type: "pie",
            radius: ["25%", "40%"],
            center: ["50%", "50%"],
            roseType: false,
            data: [
              {
                value: 40,
                name: "红色预警"
              },
              {
                value: 30,
                name: "橙色预警"
              },
              {
                value: 10,
                name: "黄色预警"
              },
              {
                value: 50,
                name: "蓝色预警"
              }
            ],
            label: {
              fontSize: 12,
              color: "#545454",
              formatter: function(param) {
                return (
                  param.name +"(" + Math.round(param.percent) + "%" + ")" + "\n" + param.value + "个"
                );
              }
            },
            labelLine: {
              smooth: false,
              lineStyle: {
                width: 2
              }
            },
            itemStyle: {
              color: function(params) {
                switch (params.name) {
                  case "红色预警":
                    return "#D70002";
                  case "橙色预警":
                    return "#FF9309";
                  case "黄色预警":
                    return "#FFFB09";
                  case "蓝色预警":
                    return "#035EF7";
                  default:
                    break;
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
