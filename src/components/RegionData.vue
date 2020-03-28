<template>
  <div class="my-2">
    <vs-table
      stripe
      v-if="global"
      search 
      :data="data"
    >
       <template slot="header">
        <h3>
          {{ title }}
        </h3>
      </template>

      <template slot="thead">
        <vs-th sort-key="Country_Region">
          Negara
        </vs-th>
        <vs-th sort-key="Confirmed">
          Positif
        </vs-th>
        <vs-th sort-key="Recovered">
          Sembuh
        </vs-th>
        <vs-th sort-key="Deaths">
          Meninggal
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].Country_Region">
            <div class="d-flex align-items-center">
              <country-flag class="mr-1" :country="getFlag(data[indextr].Country_Region)" size="normal" />
              <span>{{ data[indextr].Country_Region }}</span>
            </div>
          </vs-td>

          <vs-td :data="data[indextr].Confirmed">
            {{data[indextr].Confirmed}}
          </vs-td>

          <vs-td :data="data[indextr].Recovered">
            {{data[indextr].Recovered}}
          </vs-td>

          <vs-td :data="data[indextr].Deaths">
            {{data[indextr].Deaths}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>

    <vs-table
      v-else
      search 
      :data="data"
    >
       <template slot="header">
        <h3>
          {{ title }}
        </h3>
      </template>

      <template slot="thead">
        <vs-th sort-key="Provinsi">
          Provinsi
        </vs-th>
        <vs-th sort-key="Kasus_Posi">
          Positif
        </vs-th>
        <vs-th sort-key="Kasus_Semb">
          Sembuh
        </vs-th>
        <vs-th sort-key="Kasus_Meni">
          Meninggal
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].Provinsi">
            {{data[indextr].Provinsi}}
          </vs-td>

          <vs-td :data="data[indextr].Kasus_Posi">
            {{data[indextr].Kasus_Posi}}
          </vs-td>

          <vs-td :data="data[indextr].Kasus_Semb">
            {{data[indextr].Kasus_Semb}}
          </vs-td>

          <vs-td :data="data[indextr].Kasus_Meni">
            {{data[indextr].Kasus_Meni}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCode, overwrite } from 'country-list'
import CountryFlag from 'vue-country-flag'

export default {
  name: 'RegionData',

  components: {
    CountryFlag
  },

  props: {
    global: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({
      indoRegionData: 'regionData/indoRegionData',
      globalRegionData: 'regionData/globalRegionData'
    }),
    title () {
      return this.global ? 'Kasus Corona Global' : 'Kasus Corona di Indonesia'
    },
    data () {
      return this.global ? this.globalRegionData : this.indoRegionData
    },
  },

  mounted () {
    overwrite([
      {
        code: 'US',
        name: 'US'
      },
      {
        code: 'IR',
        name: 'Iran'
      },
      {
        code: 'GB',
        name: 'United Kingdom'
      },
      {
        code: 'KR',
        name: 'Korea, South'
      },
      {
        code: 'RU',
        name: 'Russia'
      },
      {
        code: 'BO',
        name: 'Bolivia'
      },
      {
        code: 'BN',
        name: 'Brunei'
      },
      {
        code: 'MM',
        name: 'Burma'
      },
      {
        code: 'CG',
        name: 'Congo (Brazzaville)'
      },
      {
        code: 'CD',
        name: 'Congo (Kinshasa)'
      },
      {
        code: 'CI',
        name: `Cote d'Ivoire`
      },
      {
        code: 'XK',
        name: 'Kosovo'
      },
      {
        code: 'LA',
        name: 'Laos'
      },
      {
        code: 'MD',
        name: 'Moldova'
      },
      {
        code: 'SY',
        name: 'Syria'
      },
      {
        code: 'TW',
        name: 'Taiwan*'
      },
      {
        code: 'TZ',
        name: 'Tanzania'
      },
      {
        code: 'VE',
        name: 'Venezuela'
      },
      {
        code: 'VN',
        name: 'Vietnam'
      },
      {
        code: 'PS',
        name: 'West Bank and Gaza'
      }
    ])
  },

  methods: {
    getFlag (name) {
      return getCode(name)
    }
  }
}
</script>

<style>

</style>