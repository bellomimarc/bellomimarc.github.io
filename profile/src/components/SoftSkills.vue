<template>
    <div id="softskills"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';

const option = {
    textStyle: {
        fontSize: '0.9rem',
    },
    radar: {
        axisName: {
            fontFamily: 'Ubuntu mono',
            color: '#a0cfff',
        },
        indicator: [
            { name: 'Pragmatism', max: 100, textStyle: { color: 'red' } },
            { name: 'Creative Thinking', max: 100 },
            { name: 'Communication', max: 100 },
            { name: 'Problem Solving', max: 100 },
            { name: 'Technicalities', max: 100 },
        ]
    },
    backgroundColor: 'white',
    series: [
        {
            name: 'softskills',
            type: 'radar',
            data: [
                {
                    value: [100, 80, 70, 100, 90],
                    name: 'Marcello',
                    lineStyle: {
                        color: '#a0cfff' // Change the line color here
                    },
                    itemStyle: {
                        color: '#67c23a' // Change the dot color here
                    }
                },
            ]
        }
    ]
};

onMounted(() => {
    echarts.init(document.getElementById('softskills')).setOption(option);
});
</script>

<style scoped>
#softskills {
    width: 100%;
    height: 100%;
    min-width: 100px;
    min-height: 20rem;
    margin: 2rem auto;
}
</style>