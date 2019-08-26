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
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'horizontal', //  vertical
                    x: 'left',
                    y:'bottom',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
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
