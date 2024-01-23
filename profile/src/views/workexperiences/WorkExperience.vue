<template>
    <div>
        we...{{ props.workExperience.company  }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { WorkExperience } from './WorkExperience';

const props = defineProps<{
  workExperience: WorkExperience
}>()

</script>