<template>
  <div class="access-map">
    <div class="am__inner">
      <GMap
        ref="gMap"
        :center="{ lat: mapData.lat, lng: mapData.lng }"
        :options="{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapData.styles,
        }"
        :zoom="mapData.zoom"
        @loaded="init()"
      >
        <GMapMarker
          :position="{ lat: mapData.lat, lng: mapData.lng }"
          :options="{ icon: mapData.icon }"
        />
      </GMap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccessMap',

  data() {
    return {
      mapData: {
        lat: 35.669791,
        lng: 139.614899,
        zoom: 18,
        icon: {
          url:
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2OSA4Ni41NSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5hIHsKICAgICAgICBmaWxsOiAjYWFhOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJhIiBkPSJNNjksMzQuNWMwLDE5LTM0LjQ5LDUyLjA1LTM0LjQ5LDUyLjA1UzAsNTMuNTUsMCwzNC41YTM0LjUsMzQuNSwwLDAsMSw2OSwwWiIvPgogICAgPHBhdGggZD0iTTQ5LjMsMjYuMjRhNi44Niw2Ljg2LDAsMSwwLDYuNyw3di0uMTdBNi43OCw2Ljc4LDAsMCwwLDQ5LjMsMjYuMjRabTAsMTEuMjVBNC40LDQuNCwwLDEsMSw1My42MSwzM3YuMDlhNC4zNSw0LjM1LDAsMCwxLTQuMyw0LjRaIi8+CiAgICA8cGF0aCBkPSJNMjcuNjMsMjYuMjRhMS4yMSwxLjIxLDAsMCwwLTEuMjIsMS4xOVYzOC43NWExLjIyLDEuMjIsMCwxLDAsMi40NCwwVjI3LjQzQTEuMjEsMS4yMSwwLDAsMCwyNy42MywyNi4yNFoiLz4KICAgIDxwYXRoIGQ9Ik0yNC43NiwzNC43OWE1LjM1LDUuMzUsMCwwLDAtMi4xNy00LjMxLDMuMzEsMy4zMSwwLDAsMCwuMTgtMS4wOCwzLjM2LDMuMzYsMCwwLDAtNi43MiwwLDMuMzEsMy4zMSwwLDAsMCwuMTgsMS4wOCw1LjM1LDUuMzUsMCwxLDAsOC41Myw0LjMxWm0tNi4yNy01LjQxYS45Mi45MiwwLDAsMSwxLjg0LDB2LjEzYS45MS45MSwwLDAsMS0xLC43Ny45LjksMCwwLDEtLjc3LS43N0EuNy43LDAsMCwxLDE4LjQ5LDI5LjM4Wm0uOTIsOC4zNmEyLjk0LDIuOTQsMCwxLDEsMi40Ny0xLjMzQTIuOTQsMi45NCwwLDAsMSwxOS40MSwzNy43NFoiLz4KICAgIDxwYXRoIGQ9Ik0zNS44Niw0MC4xNEE1LjM1LDUuMzUsMCwwLDAsMzksMzAuNDhhMy4zMSwzLjMxLDAsMCwwLC4xOC0xLjA4QTMuMzYsMy4zNiwwLDAsMCwzMi40NywyOWEyLjI4LDIuMjgsMCwwLDAsMCwuMzcsMy4zMSwzLjMxLDAsMCwwLC4xOCwxLjA4LDUuMzUsNS4zNSwwLDAsMCwzLjE3LDkuNjZabTAtMi40YTIuOTQsMi45NCwwLDEsMSwyLjQ3LTEuMzNBMi45NCwyLjk0LDAsMCwxLDM1Ljg2LDM3Ljc0Wk0zNSwyOS4zOGEuOTIuOTIsMCwwLDEsMS0uODIuOTMuOTMsMCwwLDEsLjgyLjgyLjI5LjI5LDAsMCwxLDAsLjEzLjkxLjkxLDAsMCwxLTEuODEsMEEuNTkuNTksMCwwLDEsMzUsMjkuMzhaIi8+CiAgPC9nPgo8L3N2Zz4K',
          size: null,
        },
        styles: [
          {
            stylers: [
              {
                hue: '#ff1a00',
              },
              {
                invert_lightness: true,
              },
              {
                saturation: -100,
              },
              {
                lightness: 33,
              },
              {
                gamma: 0.5,
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#2D333C',
              },
            ],
          },
        ],
      },
    }
  },

  computed: {
    googleMap() {
      const { gMap } = this.$refs
      return gMap && gMap.google
    },
  },

  watch: {
    googleMap(val) {
      console.log(val)
    },
  },

  mounted() {
    this.$nextTick(() => {
      //
    })
  },

  methods: {
    init() {
      const { gMap } = this.$refs
      console.log(gMap.google)
      this.mapData.icon.size = new gMap.google.maps.Size(25, 30)
      gMap.google.maps.event.trigger(gMap.google, 'resize')
    },
  },
}
</script>

<style lang="scss" scoped>
.access-map {
  overflow: hidden;
  border-radius: 15px;
}
</style>
