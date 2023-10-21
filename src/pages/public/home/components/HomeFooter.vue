<template>
  <div>
    <div class="containerFooter">
      <section class="sideleft">
        <img src="../../../../assets/images/supply-logo.jpg" alt="img logo" width="400" height="100" />
        <ul>
          <li>Endereço: Av. Dr. Ussiel Cirilo, Vila Jacuí - SP</li>
          <li>Número de Telefone: (11) 98456-7890</li>
          <li>Horário de Funcionamento: Segunda a Sexta, das 9h às 18h</li>
          <li>E-mail de Contato: vendas@supply.com</li>
        </ul>
      </section>
      <section class="sideright">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58542.83330446472!2d-46.52495657832032!3d-23.499135799999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce616eb6243fcb%3A0xf58f03b4a1ebef94!2sUniversidade%20Cruzeiro%20do%20Sul!5e0!3m2!1sen!2sbr!4v1696081837066!5m2!1sen!2sbr"
          width="400"
          height="300"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>SUPPLY VENDAS ONLINE</p>
      </section>
    </div>
    <div class="containerdown">
      <p>SUPPLY 2023 © VENDAS INTERNACIONAIS</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.containerdown {
  background-color: #0e0d0d;
  color: white;
  text-align: center;
  padding: 0.75rem;
}

li {
  list-style-type: none;
}

.containerFooter {
  margin-top: 2px;
  background-color: #0e0e0e;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 1rem;
  font-size: 1.1rem;
}

.sideleft {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.sideright {
  text-align: center;
}
</style>
