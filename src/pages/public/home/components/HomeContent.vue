<template>

  <div id="tenis" class="titulo">
    <br>
    <br>
    <h1>Oficial Tenis da Nike</h1>
  </div>

  <div class="divTenis">
    <div class="divTenisFilho">
      <div>
        <img src="../../../../img/tenis1.jpg" alt="" />
      </div>

      <div class="dentro">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quae dolore mollitia quo numquam voluptates magni eius nihil doloribus. Nisi itaque incidunt laborum, quos perferendis asperiores cupiditate sunt dignissimos exercitationem reprehenderit iusto, enim ducimus animi eaque labore sequi. Totam quos ullam soluta sed quia atque sit cum magnam ipsa voluptatem explicabo illo placeat aliquid, nam incidunt, rerum nisi eligendi optio nobis accusamus vero delectus! Assumenda.</p>

        <p><span>R$ 399,99</span></p>
      </div>
    </div>
    <div class="divTenisFilho">
      <div>
        <img src="../../../../img/tenis2.jpg" alt="" />
      </div>

      <div class="dentro">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam vitae ab officiis
          nobis non, quod veniam doloribus recusandae hic dolorem!
        </p>

        <p><span>R$ 320,99</span></p>
      </div>
    </div>
    <div class="divTenisFilho">
      <div>
        <img src="../../../../img/tenis3.jpg" alt="" />
      </div>

      <div class="dentro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident in dolor ipsam, illo a ea similique minima officia, fugiat distinctio nam accusamus dolorem dignissimos! Modi accusantium eaque reiciendis facere! Optio amet, repellat ea corporis saepe quam eligendi illo atque, officiis soluta quae! Libero, atque. Odit expedita dicta nisi odio. Voluptatibus provident natus vitae ab nostrum aut, fuga voluptates error facere itaque cupiditate, possimus quis laudantium?
        </p>

        <p><span>R$ 409,99</span></p>
      </div>
    </div>
    <div class="divTenisFilho">
      <div>
        <img src="../../../../img/tenis4.jpg" alt="" />
      </div>

      <div class="dentro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, beatae quasi facere
          excepturi accusamus deserunt?
        </p>

        <p><span>R$ 259,99</span></p>
      </div>
    </div>
    <div class="divTenisFilho">
      <div>
        <img src="../../../../img/tenis5.jpg" alt="" />
      </div>

      <div class="dentro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia ullam dolor
          culpa.
        </p>

        <p><span>R$ 289,99</span></p>
      </div>
    </div>
    <div class="divTenisFilho">
      <div>
        <img src="../../../../img/tenis6.jpg" alt="" />
      </div>

      <div class="dentro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora voluptatum
          molestias minima quis dignissimos accusamus eveniet pariatur?
        </p>

        <p><span>R$ 439,99</span></p>
      </div>
    </div>
    <div class="divTenisFilho">
      <div>
        <img src="../../../../img/tenis7.jpg" alt="" />
      </div>

      <div class="dentro">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, iure. Inventore animi voluptate obcaecati amet? Eum cupiditate facere aut cumque asperiores delectus eligendi soluta totam aliquam dicta a distinctio, aspernatur culpa error perferendis, ducimus doloremque rem sequi. Dolor facere veritatis dignissimos doloribus quis voluptatum, fuga quas reprehenderit numquam officiis? Quis, delectus corrupti? Molestiae velit molestias sequi aspernatur corrupti repellat voluptas explicabo ea.
        </p>

        <p><span>R$ 359,99</span></p>
      </div>
    </div>
    <div class="divTenisFilho">
      <div>
        <img src="../../../../img/tenis8.jpg" alt="" />
      </div>

      <div class="dentro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque recusandae ipsam?
          Pariatur aspernatur modi ducimus?
        </p>

        <p><span>R$ 289,99</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

h1,
a,
p {
  color: white;
}

h1{
    text-align: center;
}

/*Mostruario*/

img{
    width: 200px;
}


.dentro p:hover:nth-child(2){
    cursor: pointer;
}

.divTenisFilho img:hover{
    cursor: pointer;
    border-radius: 1rem;
    transform: scale(1.1);
}

.divTenis{
    display: flex;
    max-width: 1400px;
    margin: 2% auto;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    
}

.divTenisFilho{
    width: 300px;
    margin: 10px 13px;
    background-color: white;
    flex-grow: 1;
    box-shadow: 5px 5px 20px #09364191;
    display: flex;
    flex-direction: column;
}

.divTenisFilho img{
    width: 100%;
    transition: 0.6s;
}

.divTenisFilho p{
    color: #093641e0;
    font-size: 1.2rem;
    text-align: center;
    background-color: white;
    padding: 15px 8px;
    font-family: Arial, Helvetica, sans-serif;
}

.divTenisFilho span{
    font-weight: bold;
    font-size: 2rem;
    color: #e08713;
}

.dentro{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;


}


img{
    width: 100%;
    
}

@media (max-width: 1350px) {

    .divTenisFilho{
        width: 300px;
        margin: 10px 6px;
        background-color: white;
    }
    
}

@media (max-width: 1270px) {

    .divTenisFilho{
        width: 280px;
        margin: 10px px;
        background-color: white;
    }
    
}

@media (max-width: 1200px) {


    .divTenisFilho{
        width: 300px;
        margin: 10px 5px;
        background-color: white;
    }

    .titulo{
        font-size: 1.2rem;
    }

    
    
}

@media (max-width: 955px){


    .divTenis{
        width: 100%;
    }

    .divTenisFilho{
        width: 30%;
        margin: 10px 5px;
    }

    .titulo{
        font-size: 1.2rem;
    }
}

@media (max-width: 720px){

    .divTenisFilho{
        width: 47%;
    }

    .titulo{
        font-size: 1.2rem;
    }

}

@media (max-width: 500px){



    .divTenisFilho{
        width: 90%;
    }


}
</style>
