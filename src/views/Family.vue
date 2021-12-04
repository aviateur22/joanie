<template>
  
  <div class="container">    
    <section class="family_image">
        <FamilyImage/>
    </section>
    <section class="family__map">
      <FamilyMap/>
    </section>
    <section class="section family__member">
        <FamilyMember/>
    </section>
  </div>
  
</template>

<script>
import FamilyMember from '../components/family/FamilyMember.vue';
import FamilyImage from '../components/family/FamilyImage.vue';
import FamilyMap from '../components/family/FamilyMap.vue';
export default {
    components:{FamilyMember,FamilyImage,FamilyMap},

};
</script>

<style scoped>
.container{
  height: 100vh;
}

.family__map{

}
.family__member{

}

</style>