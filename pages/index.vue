<script setup lang="ts">
const categories = ['All', 'Necklaces', 'Rings', 'Earrings', 'Bracelets'];

const selectedCategory = ref('All');
const search = ref('');

const products = [
  {
    id: 1,
    name: 'Golden Horizon Necklace',
    slug: 'golden-horizon-necklace',
    price: 4500,
    category: 'Necklaces',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=85',
    description:
      'An elegant gold necklace designed for timeless everyday styling.',
  },
  {
    id: 2,
    name: 'Classic Gold Ring',
    slug: 'classic-gold-ring',
    price: 3200,
    category: 'Rings',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=85',
    description:
      'A minimal ring that brings understated elegance to every occasion.',
  },
  {
    id: 3,
    name: 'Pearl Drop Earrings',
    slug: 'pearl-drop-earrings',
    price: 2800,
    category: 'Earrings',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=85',
    description:
      'Beautiful pearl-inspired earrings with a sophisticated finish.',
  },
  {
    id: 4,
    name: 'Golden Charm Bracelet',
    slug: 'golden-charm-bracelet',
    price: 3800,
    category: 'Bracelets',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=85',
    description:
      'A delicate bracelet designed to complement your personal style.',
  },
];

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesCategory =
      selectedCategory.value === 'All' ||
      product.category === selectedCategory.value;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.value.toLowerCase());

    return matchesCategory && matchesSearch;
  });
});

useSeoMeta({
  title: 'AURELLE | Timeless Jewellery & Elegant Designs',
  description:
    'Discover timeless jewellery at AURELLE. Explore elegant necklaces, rings, earrings and bracelets.',
  ogTitle: 'AURELLE | Elegance in Every Detail',
  ogDescription: 'Discover our curated jewellery collection.',
  ogType: 'website',
});
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative flex min-h-[620px] items-center bg-[#eae5dc]">
      <img
        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1800&q=90"
        alt="Elegant gold jewellery collection"
        fetchpriority="high"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div class="absolute inset-0 bg-black/35"></div>

      <div class="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 text-white">
        <p class="text-xs uppercase tracking-[0.4em]">The art of elegance</p>

        <h1
          class="mt-6 max-w-2xl font-serif text-5xl leading-tight md:text-7xl"
        >
          Jewellery that tells your story.
        </h1>

        <p class="mt-6 max-w-md text-sm leading-7 text-white/85">
          Discover timeless pieces designed to make every moment unforgettable.
        </p>

        <a
          href="#collection"
          class="mt-10 inline-block bg-white px-9 py-4 text-xs uppercase tracking-widest text-black transition hover:bg-[#b58b52] hover:text-white"
        >
          Explore Collection
        </a>
      </div>
    </section>

    <!-- INTRODUCTION -->
    <section id="about" class="px-6 py-20 text-center">
      <p class="text-xs uppercase tracking-[0.3em] text-[#b58b52]">
        Welcome to AURELLE
      </p>

      <h2 class="mt-5 font-serif text-4xl">Beauty in the details.</h2>

      <p class="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
        Thoughtfully curated jewellery for those who appreciate simplicity,
        quality and timeless elegance.
      </p>
    </section>

    <!-- PRODUCTS -->
    <section id="collection" class="mx-auto max-w-7xl px-6 pb-24">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-[#b58b52]">
            Our collection
          </p>

          <h2 class="mt-3 font-serif text-4xl">Discover your style.</h2>
        </div>

        <input
          v-model="search"
          type="search"
          placeholder="Search jewellery..."
          class="border-b border-gray-400 bg-transparent px-2 py-3 text-sm outline-none focus:border-black"
        />
      </div>

      <!-- CATEGORY FILTERS -->
      <div class="my-10 flex flex-wrap gap-3">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="border px-5 py-2 text-xs transition"
          :class="
            selectedCategory === category
              ? 'border-[#25231f] bg-[#25231f] text-white'
              : 'border-gray-300 hover:border-black'
          "
        >
          {{ category }}
        </button>
      </div>

      <!-- PRODUCT GRID -->
      <div
        class="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
      >
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <p
        v-if="filteredProducts.length === 0"
        class="py-16 text-center text-gray-500"
      >
        No products found.
      </p>
    </section>

    <!-- BRAND MESSAGE -->
    <section class="bg-[#eeeae2] px-6 py-20 text-center">
      <h2 class="font-serif text-4xl">Made to be remembered.</h2>
      <p class="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-600">
        Every detail matters. Every piece tells a story. Find the jewellery that
        feels like you.
      </p>
    </section>
  </div>
</template>
