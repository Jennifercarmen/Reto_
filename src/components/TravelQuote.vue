<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm9 md8>
        <v-card >
          <v-toolbar class="quote">
            <v-btn icon>
              <img class="maleta" src="../assets/maleta.png" alt="maleta">
              <p class="tit">Cotiza el seguro de tu próximo viaje</p>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="pink">more_vert</v-icon>
            </v-btn>
          </v-toolbar>
              <Travel/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Travel from "./Travel";

  export default {
    components:{
            Travel
    }
  }
</script>

<style>
    .toolbar__content{
        background-color:#f0f6facc;
    }
    .maleta{
      width: 20px;
    }
    .tit{
      font-size: 12px;
      position: absolute;
      margin-left: 160px;
      color: #008bd4;
      font-weight: bold;
    }
</style>
