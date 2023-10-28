<template>
  <!-- <div class="masonry">
    <div class="brick" v-for="(photo, i) in pexels.photos" :key="i">
      <img :src="photo.src.original" :alt="photo.alt" class="img" />
    </div>
  </div> -->
  <div class="photo-wrapper">
    <div class="photo" v-for="(photo, i) in pexels.photos" :key="i">
      <img :src="photo.src.original" :alt="photo.alt" class="img" />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted } from "vue"
import { getPexels, IPexels } from "@/api/getPexels"

export default {
  setup() {
    let state = reactive<{ pexels: IPexels }>({
      pexels: {
        photos: [],
      },
    })

    onMounted(() => {
      getPexels(1).then((res) => {
        state.pexels.photos = res.photos
      })
    })

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

.masonry > * {
  break-inside: avoid;
  margin-bottom: 1rem;
}

.masonry {
  column-gap: 1rem;
  column-fill: initial;
  column-width: 180px;
}

@supports (grid-template-rows: masonry) {
  .masonry {
    display: grid;
    gap: 1rem;
    grid-template-rows: masonry;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    align-tracks: stretch;
  }

  .masonry > * {
    margin-bottom: initial;
  }
}
</style>
