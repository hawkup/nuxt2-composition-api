<template>
  <div>
    <p>This is mission page {{ status }}</p>
    <p>{{ company }}</p>
    <div>
      <div class="border">
        <span>Group list</span>
        <PortalTarget name="12" multiple />
      </div>

      <PortalTarget name="others" multiple />

      <TodoList :items="[{ id: 1, name: 'one' }, { id: 2, name: 'two' }, { id: 3, name: 'three' }, { id: 4, name: 'four' }]">
        <template v-slot:default="slotProps">
          <Portal v-if="slotProps.item.id === 1" to="12">
            <div>{{ slotProps.item.name }}</div>
          </Portal>
          <Portal v-else-if="slotProps.item.id === 2" to="12">
            <div>{{ slotProps.item.name }}</div>
          </Portal>
          <Portal v-else to="others">
            <div>{{ slotProps.item.name }}</div>
          </Portal>
        </template>
      </TodoList>
    </div>
    <div>
      <Mission v-for="mission in missions" :key="mission.id" :data="mission" />
    </div>
    <div>
      <button @click="toggleStatus(true)">open</button>
      <button @click="toggleStatus(false)">close</button>
      <button @click="toggleStatus">toggle</button>
      <button @click="showToast">show toast</button>
      <button @click="clearToasts">clear toast</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { useToggle } from '@vueuse/core'
import { provideToast, useToast } from 'vue-toastification/composition'

import TodoList from '~/components/TodoList.vue'

import companyQuery from '~/graphql/queries/company.gql'

@Component({
  setup() {
    provideToast({ timeout: 3000 })

    const [status, toggleStatus] = useToggle()

    const toast = useToast()
    const showToast = () => toast.success("I'm a toast!")
    const clearToasts = () => toast.clear()

    return {
      status,
      toggleStatus,
      showToast,
      clearToasts
    }
  },
  async asyncData({ app }) {
    const missions = await app.$axios.$get('https://api.spacex.land/rest/missions')
    const response = await app.apolloProvider?.defaultClient.query({ query: companyQuery })
    const company = response?.data?.company

    return { missions, company }
  }
})
export default class MissionIndex extends Vue {}
</script>
