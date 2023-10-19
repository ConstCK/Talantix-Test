<template>
  <establishment-form></establishment-form>
</template>

<script>
import EstablishmentForm from './components/EstablishmentForm.vue';
export default {
  components: {
    EstablishmentForm,
  }
}
</script>

<style>
@font-face {
  font-family: "Primary";
  src: url("/src/assets/fonts/Sorcerer.ttf");
}

@font-face {
  font-family: "Secondary";
  src: url("/src/assets/fonts/Tolkien.ttf");
}

body {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: content-box;

}
</style>
