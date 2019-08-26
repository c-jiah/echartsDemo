<template>
  <div id="myChart" :style="{width: '340px', height: '300px',margin:'0 auto',}"></div>
</template>

<script>
export default {
    name:'Echarts2',
    data() {
        return {
            
        }
    },
    mounted() {
        this.initWhater()
    },
    methods: {
        initWhater() {
    　　　　let myChart = this.$echarts.init(document.getElementById('myChart'))
    　　　　myChart.setOption({
                tooltip: { //提示框设置
                    trigger: 'item',
                    backgroundColor: 'rgba(255,255,255,1)',
                    textStyle:{
                        color:'#000'
                    },
                    // formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'horizontal', //  vertical
                    x: 'left',
                    y:'bottom',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                    icon: "circle", //circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                    itemWidth: 10,  // 设置宽度
                    itemHeight: 10, // 设置高度
                    // itemGap: 100 // 设置间距
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['30%', '45%'],
                        avoidLabelOverlap: false,
                        itemStyle:{ //设置饼图板块之间的间距
                            normal: {
                                borderWidth: 1, 
                                borderColor: '#fff',
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '15',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            })
    　　}
    }
}

</script>
