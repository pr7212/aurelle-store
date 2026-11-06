<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const props = defineProps<{
  product: Product;
}>();

const { addToCart } = useCart();
</script>

<template>
  <article class="group">
    <NuxtLink :to="`/products/${product.slug}`">
      <div class="relative aspect-[4/5] overflow-hidden bg-[#eeeae2]">
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span
          class="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] uppercase tracking-widest"
        >
          {{ product.category }}
        </span>
      </div>

      <div class="mt-4">
        <h3 class="font-serif text-lg">{{ product.name }}</h3>
        <p class="mt-1 text-sm text-gray-500">
          KSh {{ product.price.toLocaleString() }}
        </p>
      </div>
    </NuxtLink>

    <button
      @click="
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        })
      "
      class="mt-4 w-full border border-[#25231f] py-3 text-xs uppercase tracking-widest transition hover:bg-[#25231f] hover:text-white"
    >
      Add to bag
    </button>
  </article>
</template>
