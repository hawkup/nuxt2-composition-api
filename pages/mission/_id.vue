<template>
  <div>
    <p>{{ $dateFns.format(new Date(), 'MM/dd/yy iii EEEE') }}</p>
    <p>{{ $dateFns.format(new Date(), 'MM/dd/yyyy iii EEEE', { locale: 'th' }) }}</p>
    <p>{{ $dayjs().format('YYYY/MM/DD') }}</p>
    <p>{{ now }}</p>
    <p>This is mission detail page {{ status }}</p>
    <p>{{ company }}</p>
    <p>{{ mission }}</p>
    <div>
      <p>$device.isDesktop: {{ $device.isDesktop }}</p>
      <p>$device.isMobile: {{ $device.isMobile }}</p>
      <p>$device.isTablet: {{ $device.isTablet }}</p>
      <p>$device.isMobileOrTablet: {{ $device.isMobileOrTablet }}</p>
      <p>$device.isDesktopOrTablet: {{ $device.isDesktopOrTablet }}</p>
      <p>$device.isIos: {{ $device.isIos }}</p>
      <p>$device.isWindows: {{ $device.isWindows }}</p>
      <p>$device.isMacOS: {{ $device.isMacOS }}</p>
      <p>$device.isAndroid: {{ $device.isAndroid }}</p>
      <p>$device.isFirefox: {{ $device.isFirefox }}</p>
      <p>$device.isEdge: {{ $device.isEdge }}</p>
      <p>$device.isChrome: {{ $device.isChrome }}</p>
      <p>$device.isSamsung: {{ $device.isSamsung }}</p>
      <p>$device.isCrawler: {{ $device.isCrawler }}</p>
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
import { DateTime } from 'luxon'

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
  }
})
export default class MissionDetail extends Vue {
  company = {}
  mission = {}

  now = DateTime.fromISO('2014-08-06T13:07:04.054').toFormat('yyyy LLL dd')

  async fetch() {
    const id = this.$route.params.id

    try {
      this.mission = await this.$axios.$get(`/rest/mission/${id}`)
    } catch (e) {
      console.log(e)
    }

    try {
      const response = await this.$apollo.query({ query: companyQuery })
      this.company = response.data.company
    } catch (e) {
      console.log(e)
    }
  }

  mounted() {
    this.$gtm.push({ event: 'myEvent' })
  }
}
</script>
