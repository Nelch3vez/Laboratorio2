<template>
<div class="Body"> 
        <font face="Arial"><b-alert show variant=""><h1>CONVERTIDOR DE MASA</h1></b-alert></font>
        <hr>
    <div class="Main">
        <div class="form-group">
				 <font face="Arial"><h6> Ingrese la cantidad que desea convertir:  <br> <br> <input type="number" v-model ="en" ></h6></font>
          <br>
				
			</div>
        <div>
            <font face="Arial"><span>De:</span></font>
        </div>
        <select v-="fromRate" class= box1>
            <option value="g">Gramos</option>
            <option value="kg">Kilogramos</option>
            <option value="onz">Onzas</option>
            <option value="lb">Libras</option>
            <option value="T">Toneladas</option>
        </select>
        <div>
            <font face="Arial"><span>Para:</span></font>
        </div>
        <select v-="toRate" class = boxx2>
            <option value="g">Gramos</option>
            <option value="kg">Kilogramos</option>
            <option value="onz">Onzas</option>
            <option value="lb">Libras</option>
            <option value="T">Toneladas</option>
        </select>
        <br>
        <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br><font face="Arial"><b-button v-b-modal.modal-1 variant="btn btn-info" v-on:click="calcular">Convertir</b-button></font>
    </div>
   <div>
  <b-modal id="modal-1" title="Resultado">
    <p class="my-4">El resultado de la conversión es: {{salida}}</p>
  </b-modal>
</div>
</div>
</template>
<script>
export default ({
    name:"Masa",
    data(){return{
            en:"",
            conversiones_gramos:{ "g":1,
                                  "kg":0.001,
                                  "onz":0.03528,
                                  "lb":0.002205,
                                  "T":0.000001102},    
            salida: "",
            ct: "g",
            cf:"kg"
        }},
        methods:{
            calcular:function(){
                let ct = this.conversiones_gramos[this.convertTo]
                let cf = this.conversiones_gramos[this.cf]
                var resultado = ((ct/cf))*this.en
                this.salida =resultado         
            }
        }
})
</script>
<style>
.boxx1 {
	width: 20vw;
	margin: auto;
	padding: 15px;
	border-radius: 5px;
	background-color: rgba(0, 238, 255, 0.472);
	color: rgb(0, 0, 0);
}
.boxx2 {
	width: 20vw;
	margin: auto;
	padding: 15px;
	border-radius: 5px;
	background-color: rgba(0, 255, 157, 0.472);
	color: rgb(0, 0, 0);
}
.Body {
	background-color: rgb(241, 246, 250);
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
    background-image: url(https://www.10wallpaper.com/wallpaper/1920x1080/1309/spot_light_bright-Design_HD_wallpaper_1920x1080.jpg);
	background-repeat: no-repeat;
}
.Main {
	width: 50vw;
	margin: auto;
	padding: 50px;
	border-radius: 30px;
    border-color:rgb(5, 5, 5);
	color: rgb(0, 0, 0);
}
#Resultado h2 {
	font-size: 45px;
}
</style>
