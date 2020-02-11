 
<template>
  <section class="apoio">
    <h2>Apoiadores da educação</h2>
    <ul class="list-parceiros">
      <li class="item">
        <a href="https://www.alura.com.br/">
          <img id="alura" :src="alura" alt="Alura" />
        </a>
      </li>
      <li>
        <a href="https://www.casadocodigo.com.br/">
          <img id="cdc" :src="cdc" alt="Casa do Código" />
        </a>
      </li>
    </ul>
    <div class="divulga">
      <h3>
        <a
          href="https://www.alura.com.br/formacao-vuejs"
          alt="Curso Vue.js com desconto!"
          target="_blank"
        >Evolua seus conhecimentos com a Formação Vue.js na Alura!</a>
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "Apoio",
  data() {
    return {
      alura: require("../img/alura.png"),
      cdc: require("../img/cdc.png")
    };
  }
};
</script>

<style>
.apoio {
  background-color: #f3f5f7;
  border-color: #42b983;
  padding: 1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  max-width: none !important;
}
.apoio h2 {
  display: block;
  font-size: 1.8em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: 780;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
}
.apoio img {
  height: 75px;
}
.apoio img:hover {
  height: 82px;
  -webkit-transition: all 0.3s cubic-bezier(0.4, 0.03, 0.515, 0.955);
  transition: all 0.4s cubic-bezier(0.4, 0.03, 0.515, 0.955);
}
.list-parceiros {
  list-style: none;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #eaecef;
}
.list-parceiros li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.list-parceiros a {
  padding: 15px;
  display: block;
}
.divulga {
  text-align: center;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.divulga a {
  text-decoration: none;
  font-weight: bold;
}
.divulga a:hover {
  font-weight: 900;
  -webkit-transition: 0.4s ease-in;
  transition: 0.4s ease-in;
}
</style>