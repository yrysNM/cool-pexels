<template>
  <div>{{ pexels }}</div>
</template>

<script lang="ts">
import { reactive, onMounted } from "vue"
import { getPexels, IPexels } from "@/api/getPexels"

export default {
  setup() {
    let pexels = reactive<IPexels>({
      id: 0,
      width: 0,
      height: 0,
      url: "",
      photographer: "",
      photographer_url: "",
      photographer_id: 0,
      avg_color: "",
      src: {
        original: "",
        large2x: "",
        large: "",
        medium: "",
        small: "",
        portrait: "",
        landscape: "",
        tiny: "",
      },
      liked: false,
      alt: "",
    })

    onMounted(async () => {
      pexels = await getPexels(1)
    })

    return {
      pexels,
    }
  },
}
</script>

<style lang="scss" scoped></style>
