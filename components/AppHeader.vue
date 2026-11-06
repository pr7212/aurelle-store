<script setup lang="ts">
const { cartCount } = useCart()
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 bg-[#faf9f6]/95 backdrop-blur">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

      <NuxtLink to="/" class="text-3xl font-serif tracking-[0.2em]">
        AURELLE<span class="text-[#b58b52]">.</span>
      </NuxtLink>

      <nav class="hidden items-center gap-10 text-sm md:flex">
        <NuxtLink to="/" class="hover:text-[#b58b52]">Home</NuxtLink>
        <NuxtLink to="/#collection" class="hover:text-[#b58b52]">Collection</NuxtLink>
        <NuxtLink to="/#about" class="hover:text-[#b58b52]">Our Story</NuxtLink>
      </nav>

      <NuxtLink to="/cart" class="relative flex items-center gap-2 text-sm">
        <span>Shopping Bag</span>
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#25231f] text-xs text-white">
          {{ cartCount }}
        </span>
      </NuxtLink>

    </div>
  </header>
</template>
