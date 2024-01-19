<template>
    <div class="container">
        <div>
            <img :src="foto" alt="foto" style="width: 200px; height: 200px; border-radius: 50%; margin: 0 auto; display: block;">
        </div>
        <div class="contacts">
            <el-link class="item" type="primary" href="https://www.linkedin.com/in/marcello-bellomi-05735b61/" target="_blank">
                <IconLinkedin />
            </el-link>
            <el-link class="item" type="primary" href="mailto:marcello.bellomi@gmail.com" target="_blank">
                <IconEmail />
            </el-link>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1rem;
}
.contacts {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
}

.item {
    margin: 0 10px;
}
</style>

<script setup lang="ts">
import foto from '../assets/foto.jpeg'
import IconEmail from '../components/icons/IconEmail.vue'
import IconLinkedin from '../components/icons/IconLinkedin.vue'
</script>