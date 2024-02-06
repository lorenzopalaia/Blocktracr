<template>
  <h2 class="text-8xl text-center text-white uppercase mt-16">
    Why
    <span
      class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
    >
      Blocktracr
    </span>
  </h2>
  <div class="flex flex-row mt-4 gap-8">
    <div class="w-1/3" v-for="feature in features" :key="feature">
      <div class="flex flex-row bg-base-100 rounded-xl border border-neutral h-full">
        <div class="w-1/4 m-4">
          <div class="rounded-lg bg-gradient-to-r from-primary to-secondary w-14">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="p-2">
              <path :d="feature.path" />
            </svg>
          </div>
        </div>
        <div class="w-3/4 m-4">
          <h3 class="text-4xl text-white uppercase">{{ feature.title }}</h3>
          <p class="mt-2 text-white">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: "Track cryptos",
          description:
            "Track your favorite coins and see their price changes in real time.",
          path: "M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z",
        },
        {
          title: "Wallet allocation",
          description:
            "Check your wallet allocation and see how much you have in each coin.",
          path: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
        },
        {
          title: "Detailed infos",
          description:
            "Get detailed information about each coin and see their historical data.",
          path: "M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z",
        },
      ],
    };
  },
};
</script>

<style></style>
