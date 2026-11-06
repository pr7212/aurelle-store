<script setup lang="ts">
const {
  cart,
  cartCount,
  cartTotal,
  removeFromCart,
  updateQuantity
} = useCart()

const checkout = () => {
  alert('Thank you! Your demo checkout is successful.')
}

useSeoMeta({
  title: 'Shopping Bag | AURELLE',
  description: 'Review your selected AURELLE jewellery.'
})
</script>

<template>
  <section class="mx-auto min-h-[65vh] max-w-7xl px-6 py-16">

    <p class="text-xs uppercase tracking-[0.3em] text-[#b58b52]">
      Your selection
    </p>

    <h1 class="mb-12 mt-3 font-serif text-5xl">
      Shopping Bag
    </h1>

    <div v-if="cart.length === 0" class="py-20 text-center">
      <h2 class="font-serif text-3xl">Your bag is empty.</h2>

      <p class="mt-4 text-sm text-gray-500">
        Discover something beautiful.
      </p>

      <NuxtLink
        to="/#collection"
        class="mt-8 inline-block bg-[#25231f] px-8 py-4 text-xs uppercase tracking-widest text-white"
      >
        Explore Collection
      </NuxtLink>
    </div>

    <div v-else class="grid gap-12 lg:grid-cols-[1fr_350px]">

      <div class="space-y-8">
        <article
          v-for="item in cart"
          :key="item.id"
          class="flex gap-5 border-b border-gray-200 pb-8"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="h-32 w-28 object-cover"
          />

          <div class="flex flex-1 flex-col justify-between">
            <div>
              <h3 class="font-serif text-xl">{{ item.name }}</h3>

              <p class="mt-2 text-sm text-gray-500">
                KSh {{ item.price.toLocaleString() }}
              </p>
            </div>

            <div class="flex items-center gap-4">
              <button
                @click="updateQuantity(item.id, item.quantity - 1)"
                class="h-8 w-8 border"
              >
                -
              </button>

              <span>{{ item.quantity }}</span>

              <button
                @click="updateQuantity(item.id, item.quantity + 1)"
                class="h-8 w-8 border"
              >
                +
              </button>

              <button
                @click="removeFromCart(item.id)"
                class="ml-auto text-xs text-red-600 underline"
              >
                Remove
              </button>
            </div>
          </div>
        </article>
      </div>

      <aside class="h-fit bg-[#f0ede7] p-7">
        <h2 class="font-serif text-2xl">Order Summary</h2>

        <div class="mt-8 flex justify-between text-sm">
          <span>Items ({{ cartCount }})</span>
          <span>KSh {{ cartTotal.toLocaleString() }}</span>
        </div>

        <div class="mt-5 flex justify-between border-t border-gray-300 pt-5 font-semibold">
          <span>Total</span>
          <span>KSh {{ cartTotal.toLocaleString() }}</span>
        </div>

        <button
          @click="checkout"
          class="mt-8 w-full bg-[#25231f] py-4 text-xs uppercase tracking-widest text-white hover:bg-[#b58b52]"
        >
          Proceed to checkout
        </button>
      </aside>

    </div>
  </section>
</template>
