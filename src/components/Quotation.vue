<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
     <router-link to="/">
      <i aria-hidden="true" class="icon pink--text material-icons">arrow_back</i>      
     </router-link>
     <br>
      <v-flex xs12 sm3 md3 offset-xs3 offset-md2 offset-lg3>
        <v-card dark color="primary">
          <v-card-text>Plan Estándar</v-card-text>
           <v-card-text>$ 54.2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm3 md3 offset-xs3 offset-lg2>
        <v-card dark color="green">
        <v-card-text>Plan Premium</v-card-text>
           <v-card-text>$ 74.2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md6>
        <v-card>
          <v-card-title  primary class="title headx">Cobertura 1</v-card-title>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm3 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card >
              <v-card-text class="pinkx">Sí</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
        <v-flex d-flex xs12 sm3 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card >
              <v-card-text class="pinkx" >No</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

export default {
    data(){
        return {
            items: []
        }
    },
    created () {
        EventBus.$on('items', (resp) => {
            console.log(resp);
            this.items = resp;
         });
    },
}
</script>
<style>
.pinkx{
    background-color: #FCE4EC;
}
.headx{
    background-color: #B2EBF2;
}
</style>