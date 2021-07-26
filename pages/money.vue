<template>
  <div>
    <NuxtLink :to="{ name: 'history' }">Go to History</NuxtLink>
    <pre>{{ price }}</pre>
    <pre>{{ shipping }}</pre>
    <pre>{{ total }}</pre>
    <pre>{{ bahtTotal }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { dinero, add, convert, toFormat, Dinero } from 'dinero.js'
import { USD, THB } from '@dinero.js/currencies'

// https://martinfowler.com/eaaCatalog/money.html
// https://v2.dinerojs.com/docs
export default Vue.extend({
  data() {
    return {
      price: dinero({ amount: 0, currency: USD }) as Dinero<number>,
      shipping: dinero({ amount: 0, currency: USD }) as Dinero<number>,
      total: dinero({ amount: 0, currency: USD }) as Dinero<number>,
      rates: { THB: 31 },
      bahtTotal: ''
    }
  },
  methods: {
    format: (dineroObject: Dinero<number>) => {
      return toFormat(
        dineroObject,
        ({ amount, currency }) => `${currency.code} ${amount}`
      );
    }
  },
  mounted() {
    this.price = dinero({ amount: 5000, currency: USD })
    this.shipping = dinero({ amount: 100, currency: USD })
    this.total = add(this.price, this.shipping)
    this.bahtTotal = this.format(convert(this.total, THB, this.rates))
  }
})
</script>
