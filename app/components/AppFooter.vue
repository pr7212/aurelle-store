<template>
  <footer class="bg-[#25231f] px-6 py-12 text-white">
    <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
      <div>
        <h2 class="font-serif text-3xl tracking-widest">AURELLE.</h2>
        <p class="mt-4 text-sm text-gray-400">Elegance in every detail.</p>
      </div>

      <div>
        <h3 class="mb-4 font-semibold">Explore</h3>
        <div class="flex flex-col gap-3 text-sm text-gray-400">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/#collection">Collection</NuxtLink>
          <NuxtLink to="/cart">Shopping Bag</NuxtLink>
        </div>
      </div>

      <div>
        <h3 class="mb-4 font-semibold">Our Promise</h3>
        <p class="text-sm leading-7 text-gray-400">
          Timeless designs, thoughtful details and jewellery made to celebrate
          your everyday moments.
        </p>
      </div>
    </div>

    <div
      class="mx-auto mt-12 max-w-7xl border-t border-gray-700 pt-6 text-center text-xs text-gray-500"
    >
      © {{ new Date().getFullYear() }} AURELLE. All rights reserved.
    </div>
  </footer>
</template>
