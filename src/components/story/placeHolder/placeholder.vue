<template>
  <div class="loading-wrapper">
    <div class="loading-content">
      <div class="loading-img"></div>
      <div class="loading-text-wrapper">
        <ul class="loading-text-list">
          <li
            class="loading-text-item"
            v-for="quantity in request"
            :key="quantity"
          >
            <div class="loading-text-item__block"></div>
            <div class="loading-text-item__block"></div>
            <div class="loading-text-item__block"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "placeHolder",
  data() {
    return {
      request: this.requestNumber,
    };
  },
  props: {
    requestNumber: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped lang="scss">


.loading-text-item__block {
  background-color: rgba(222, 222, 222, 1);
  border-radius: 4px;
  height: 14px;
  margin-bottom: 8px;
  &:nth-child(1) {
    width: 177px;
  }
  &:nth-child(2) {
    width: 217px;
  }
  &:nth-child(3) {
    width: 137px;
  }
}

.loading-content .loading-img {
text-align: center;
}

.loading-wrapper{
  margin-bottom: 37px;
}

.loading-content {
  padding-top: 18px;
}

.loading-img {
  width: 266px;
  height: 136px;
  background-color: rgba(222, 222, 222, 1);
  border-radius: 4px;
  margin-bottom: 22px;
}
</style>
