<template>
  <div class="container-pokebola">
    <div class="top mitad"></div>
    <div class="bot mitad"></div>
    <div class="centro-w"></div>
    <div class="linea"></div>
    <div class="centro">
      <div class="centro-w">
        <div class="linea-central"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pokebola",
};
</script>

<style>
.container-pokebola {
  height: 200px;
  width: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-23deg);
  position: absolute;
}
.mitad {
  top: 0;
  position: absolute;
  height: calc(50% - 20px);
  width: calc(100% - 20px);
  border: 10px solid white;
  border-radius: 100px 100px 0 0;
}
.top {
  background-color: #eb2700;
}
.bot {
  background-color: #a7c5c9;
  top: 50%;
  transform: rotate(180deg);
}

.centro,
.centro-w {
  position: absolute;
  height: calc(50% - 10px);
  width: calc(50% - 10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.centro {
  background-color: #292b35;
}
.centro-w {
  background-color: white;
  border: 15px solid white;
}
.linea {
  width: calc(100% - 20px);
  height: 15px;
  background-color: #292b35;
  position: absolute;
  border: 10px solid white;
  border-radius: 10px;
}
.linea-central {
  border: 1px solid #333940;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>