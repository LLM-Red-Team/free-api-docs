<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme'

const data = [
  {
    items: [{ img: 'https://qn.huat.xyz/mac/202308122340742.jpg' }]
  },
  {
    items: [{ img: 'https://qn.huat.xyz/mac/202308122340353.jpg' }]
  }
]
</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>

<style>
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-height: 90px;
}
</style>
