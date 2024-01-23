<template>
  <div>
    <div>
      <span class="company">{{ props.workExperience.company }}</span>
    </div>
    <el-timeline>
      <el-timeline-item v-for="(role, index) in workExperience.roles" :key="index" :timestamp="formatDateAsMonthYear(role.startDate)">
        <div>
          <h4 class="role-name">{{ role.role }}</h4>
          <p>{{ role.description }}</p>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped>
.role-name {
  font-weight: bold;
}

.company {
  font-weight: bold;
  font-size: 1.5em;
  color: var(--el-color-primary);
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { WorkExperience } from './WorkExperience';

function formatDateAsMonthYear(date: Date): string {
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
}

const props = defineProps<{
  workExperience: WorkExperience
}>()

</script>