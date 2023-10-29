<template>
  <div class="photo-wrapper" v-masonry transition-duration="0.3s" item-selector=".item" :origin-top="true" :horizontal-order="false">
    <div class="photo" v-for="(photo, i) in pexels.photos" :key="i">
      <img :src="photo.src.original" :alt="photo.alt" class="img" />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted, ref } from "vue"
import { getPexels, IPexels } from "@/api/getPexels"

export default {
  setup() {
    let state = reactive<{ pexels: IPexels }>({
      pexels: {
        photos: [],
      },
    })
    const count = ref(1)

    onMounted(() => {
      window.addEventListener("scroll", handleScroll)
      getPexelsPhotos()
    })

    const handleScroll = () => {
      let scrollHeight = window.scrollY
      let maxHeight = window.document.body.scrollHeight - window.document.documentElement.clientHeight

      if (scrollHeight >= maxHeight - 200) {
        count.value += 1
        getPexelsPhotos()
      }
    }

    const getPexelsPhotos = () => {
      getPexels(count.value).then((res) => {
        state.pexels.photos = state.pexels.photos.concat(JSON.parse(JSON.stringify(res.photos)))
      })
    }

    return {
      ...state,
    }
  },
}
</script>

<style lang="scss" scoped>
.photo-wrapper {
  width: 500px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  .photo {
    width: auto;
    height: 200px;

    .img {
      width: 100%;
      height: 100%;
      object-position: center center;
      object-fit: contain;
    }
  }
}
</style>
