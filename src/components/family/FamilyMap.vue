<template>
  <div class="family-map__container">
      <!-- map -->
       <div class="family-map__map" id="map">

       </div>
  </div>
</template>

<script>
import leaflet from 'leaflet';
//import {onMounted} from 'vue';
export default {
    name:'familyMap',

    // setup(){
    //     let mymap;
    //     onMounted(()=>{
    //         mymap = leaflet.map('map').setView([51.505, -0.09], 13);
    //         leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXZpYXRldXIyMiIsImEiOiJja3dnbmFpbmswYW1jMndtZDh1OGhoYzFuIn0.m2bxVWn4qA9mGFK7fAuy3A', 
    //             {
    //                 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //                 maxZoom: 18,
    //                 id: 'mapbox/streets-v11',
    //                 tileSize: 512,
    //                 zoomOffset: -1,
    //                 accessToken: 'pk.eyJ1IjoiYXZpYXRldXIyMiIsImEiOiJja3dnbmFpbmswYW1jMndtZDh1OGhoYzFuIn0.m2bxVWn4qA9mGFK7fAuy3A'
    //             }).addTo(mymap);

    //     });
        
    // }

    data(){
        return{
            
        };
    },
    methods:{
        setMap: ()=>{     
            console.log(process.env.VUE_APP_MAPBOX_TOKEN)                  ;
            const mymap = leaflet.map('map').setView([51.505, -0.09], 13);
            leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.VUE_APP_MAPBOX_TOKEN}`,
                {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: `${process.env.VUE_APP_MAPBOX_TOKEN}`
                }).addTo(mymap);
        }
    },
    mounted(){ 
        this.setMap();  
    }
};
</script>

<style scoped>
    .family-map__map{

        height: 256px;

    }
</style>