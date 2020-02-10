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
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2OC45OSA4Ni41NSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5waW48L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJjb21wYW55X2V4cGFuZCI+PHBhdGggZD0iTTY5LDM0LjVjMCwxOS0zNC40OSw1Mi4wNS0zNC40OSw1Mi4wNVMwLDUzLjU1LDAsMzQuNWEzNC41LDM0LjUsMCwxLDEsNjksMFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00OS4zLDI2LjI0QTYuODYsNi44NiwwLDEsMCw1NiwzMy4wOSw2Ljc4LDYuNzgsMCwwLDAsNDkuMywyNi4yNFptMCwxMS4yNWE0LjQsNC40LDAsMSwxLDQuMzEtNC40QTQuMzUsNC4zNSwwLDAsMSw0OS4zLDM3LjQ5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI3LjYzLDI2LjI0YTEuMjEsMS4yMSwwLDAsMC0xLjIyLDEuMTlWMzguNzVhMS4yMiwxLjIyLDAsMCwwLDIuNDQsMFYyNy40M0ExLjIxLDEuMjEsMCwwLDAsMjcuNjMsMjYuMjRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQuNzYsMzQuNzlhNS4zNSw1LjM1LDAsMCwwLTIuMTctNC4zMSwzLjQ5LDMuNDksMCwwLDAsLjE4LTEuMDgsMy4zNiwzLjM2LDAsMCwwLTYuNzIsMCwzLjQ5LDMuNDksMCwwLDAsLjE4LDEuMDgsNS4zNSw1LjM1LDAsMSwwLDguNTMsNC4zMVptLTYuMjctNS40MWEuOTIuOTIsMCwwLDEsMS44NCwwYzAsLjA1LDAsLjA5LDAsLjEzYS45Mi45MiwwLDAsMS0xLjgyLDBTMTguNDksMjkuNDMsMTguNDksMjkuMzhabS45Miw4LjM2YTIuOTUsMi45NSwwLDAsMSwwLTUuODksMi44OSwyLjg5LDAsMCwxLDEuNjIuNDksMi45NCwyLjk0LDAsMCwxLTEuNjIsNS40WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM1Ljg2LDQwLjE0QTUuMzUsNS4zNSwwLDAsMCwzOSwzMC40OGEzLjIyLDMuMjIsMCwwLDAsLjE4LTEuMDgsMy4zNiwzLjM2LDAsMSwwLTYuNzEsMCwzLjIyLDMuMjIsMCwwLDAsLjE4LDEuMDgsNS4zNSw1LjM1LDAsMCwwLDMuMTcsOS42NlptMC0yLjRhMi45NCwyLjk0LDAsMCwxLTEuNjEtNS40LDIuOTEsMi45MSwwLDAsMSwzLjIzLDAsMi45NCwyLjk0LDAsMCwxLTEuNjIsNS40Wk0zNSwyOS4zOGEuOTIuOTIsMCwwLDEsMS44MywwLC41My41MywwLDAsMSwwLC4xMy45MS45MSwwLDAsMS0xLjgxLDBBLjUzLjUzLDAsMCwxLDM1LDI5LjM4WiIvPjwvZz48L2c+PC9zdmc+',
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
