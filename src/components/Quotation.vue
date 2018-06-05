<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap  >
     <router-link to="/">
      <i aria-hidden="true" class="icon pink--text material-icons">arrow_back</i>      
     </router-link>
     <br>
      <v-flex xs12 sm3 md3 offset-xs3 offset-md2 offset-lg3  v-for="(item,index) in array" :key="index">
        <v-card dark color="primary">
          <v-card-text> 
            {{ item.tipo_plan }}
          </v-card-text>
           <v-card-text>$ {{ item.precio_plan }}</v-card-text>
        </v-card> 
      </v-flex>
    </v-layout>
    <v-layout >
      <v-flex row wrap v-for="(data,index) in 1" :key="index" >
        <v-card d-flex xs12 sm6 md6 v-for="(caracteristicas,key) in array[1].caracteristicas" :key="key">
          <v-card-title  primary class="titlex headx">{{ caracteristicas.caracteristica}} </v-card-title>
        </v-card>
      </v-flex>
      <v-flex>
        <v-layout >
          <v-flex row wrap xs12 sm3 md3 v-for="(item,index) in array" :key="index">
            <v-card  d-flex  v-for="(car,key) in array[index].caracteristicas" :key="key">
              <v-card-text class="pinkx">{{ 
                car.aplica}}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Vue from 'vue'
export default {
  props: [
        'array'
      ],
    data() {
        return {
           items:'j'
        }
    }
}
</script>
<style>
.pinkx{
    background-color: #FCE4EC;
}
.headx{
    background-color: #B2EBF2;
}
.card__title.titlex.headx {
    font-size: 10.5px;
}
.card__text.pinkx {
    font-size: 10.5px;
}
</style>