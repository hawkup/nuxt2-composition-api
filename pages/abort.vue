<template>
  <client-only>
    <div>
      <button @click="changeId('9D1B7E0')">9D1B7E0</button>
      <button @click="changeId('F4F83DE')">F4F83DE</button>
      <button @click="changeId('F3364BF')">F3364BF</button>
      <Abort :id="id" />
      -------------------------
      <AxiosCancel :id="id" />
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      id: ''
    }
  },
  methods: {
    changeId(id: string) {
      this.id = id
    }
  }
})
</script>
