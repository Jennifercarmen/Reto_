<template>
<v-container fluid>
  <form>
    <v-layout row wrap>
      <v-flex xs12 sm5 md6 >
        <multiselect
          v-model="Travel.destination"
          id="ajax"
          label="name"
          track-by="code"
          placeholder="Ingrese destino"
          open-direction="bottom"
          :options="Destination"
          :multiple="true"
          :searchable="true"
          :loading="isLoading"
          :internal-search="false"
          :clear-on-select="false"
          :close-on-select="false"
          :options-limit="300"
          :limit="6"
          :max="1"
          :limit-text="limitText"
          :max-height="600"
          :show-no-results="false"
          :hide-selected="true"
          @search-change="asyncFind"
      >
      
          <div
              class="multiselect__clear"
              v-if="selectedDestination.length"
              @mousedown.prevent.stop="clearAll(props.search)"
              @Close="clearAll(props.search)"
          ></div>
              
              <span slot="maxElements">Máximo de opciones seleccionadas. Primero elimine una opción seleccionada para seleccionar otra.</span>
              <span slot="noResult">No se encontraron elementos. Considera cambiar la consulta de búsqueda.</span>
              </multiselect>
              </v-flex>
              <v-flex xs12 sm5 md5 order-md4 order-sm2>
                  <v-text-field
                      v-model="Travel.passengers"
                      :rules="[rules.required]"
                      label="N° pasajeros"
                      max="15"
                  ></v-text-field>
              </v-flex>
              </v-layout>
              <v-layout row wrap>
                 <v-flex xs12 sm5 md5>
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="Travel.going"
          label="Ida"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="Travel.going" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal = false"  >Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(Travel.going)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-spacer></v-spacer>

    <v-flex xs12 sm5 md6>
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="Travel.return"
          label="Vuelta"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="Travel.return" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal = false"  >Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(Travel.return)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>       
                   <v-layout row wrap>
                       <v-flex xs12 sm10 md8 order-md4 order-sm2>
                          <v-btn class="pink white--text" @click="addToAPI">Cotizar</v-btn>   
                        </v-flex>
                    </v-layout>
   </form>
  </v-container>
</template>

<script>
import Multiselect from 'vue-multiselect';
import axios from 'axios';

import {
    getDestination,
    ajaxFindPlace
} from '../helpers/interseguroApi'

export default {
    data() {
        return {
            selectedDestination: [],
            Destination: [],
            isLoading: false,
            title: '',
            rules: {
                required: (value) => !!value || 'Required.',
            },
           date:null,
        menu: false,
           modal: false,
           menu2: false,
            Travel: {
                destination: '',
                going: null,
                return: null,
                passengers: ''
            }
        }
    },
    components: {
        Multiselect
    },
    methods: {
      limitText(count) {
          return `and ${count} other Destination`
      },
      asyncFind(query) {
          this.isLoading = true
          ajaxFindPlace(query).then(response => {
              this.Destination = response
              this.isLoading = false
          })
      },
      clearAll() {
          this.selectedDestination = [];
      },
      addToAPI() {
        let newTravel = {
            destination: '',
            going: '',
            return: '',
            passengers: ''
        }
        const self = this;
        console.log(newTravel);
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://testsoat.interseguro.com.pe/talentfestapi/cotizacion';
        axios.post(url, 
            {
                  destino: this.Travel.destination[0]['name'],
                  fecha_partida: this.Travel.going,
                  fecha_retorno: this.Travel.return,
                  cantidad_pasajeros: this.Travel.passengers
              }
          )
          .then((response) => {
              let envio = response.data;
              EventBus.$emit('items', envio);
              self.$router.push('/quotation');
          }).catch(function (error) {
              console.log(error);
        });
      }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
