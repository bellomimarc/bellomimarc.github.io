<template>
    <div class="container">
        <template v-for="skill in skills" :key="skill.name">
            <div class="item">
                {{ skill.name }}
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">

const skills = [
    { name: 'Redis' },
    { name: 'Node.js' },
    { name: 'JS/TS' },
    { name: 'Terraform' },
    { name: 'SQL' },
    { name: 'Postgres' },
    { name: 'Redshift' },
    { name: 'MSSQL' },
    { name: 'AWS' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'helm' },
    { name: 'Java' },
    { name: 'Kafka' },
    { name: 'Rabbitmq' },
    { name: 'MQTT' },
    { name: '.NET' },
    { name: 'Reactjs' },
    { name: 'Vuejs' },
    { name: 'knockoutjs' },
]

</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
}

.item {
    flex: 1 0 21%;
    font-weight: bold;
    color: var(--el-color-success);
    padding: 1rem;
}
</style>