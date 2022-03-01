<template>
    <div class="longi">
        <br>
        <h1 style="color:black">CONVERTIDOR DE LONGITUDES</h1>
        <br>
        <input type="text" v-model ="numero_pensado" placeholder="Escriba un número">
        <br>
        <br>
        <div >
            <span>Convertir de:</span>
        </div>
        <br>

        <select v-="fromRate" class= box1>
            <option value="Kilometro">Kilómetro</option>
            <option value="Hectometro">Hectómetro</option>
            <option value="Decametro">Decámetro</option>
            <option value="Metro">Metro</option>
            <option value="Decimetro">Decímetro</option>
            <option value="Centimetro">Centímetro</option>
            <option value="Milimetro">Milímetro</option>
        </select>
        <br>
        <br><br><div>
            <span>A:</span><br>
            <br>
        </div>
        <select v-="toRate" class = box2>
             <option value="Metro">Metro</option>
            <option value="Decimetro">Decímetro</option>
            <option value="Centimetro">Centímetro</option>
            <option value="Milimetro">Milímetro</option>
            <option value="Kilometro">Kilómetro</option>
            <option value="Hectometro">Hectómetro</option>
            <option value="Decametro">Decámetro</option>
            
        </select>
        <br>
       <br> <button v-on:click="comprobar" class = .button>Comprobar<br></button><br>
        <br><h2>Resultado:<br></h2> 
        <input type="text" v-model ="salida_pensada">
        <br>
        <br>
    </div>
</template>
<script>
export default({
    name:"longitud",
     data(){return{
            numero_pensado:"",
            conversion_gramos:{ "Milimetro":0.001,"Centimetro":0.01,"Decimetro":0.1,"Metro":1,"Decametro":10,"Hectrometro":100,"Kilometro":1000},    
            salida_pensada: "",
            toRate: "Metro",
            fromRate:"Kilometro"
        }},
        methods:{
            calcular:function(){
                let toRate_ = this.conversion_gramos[this.toRate]
                let fromRate_ = this.conversion_gramos[this.fromRate]
                var resultado = ((toRate_/fromRate_))*this.numero_pensado
                this.salida_pensada =resultado         
            }
        }
})
</script>

<style>

.longi {
	background-color: red;
	background-position: center;
    margin: 100px;
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
    background-image: url(https://www.10wallpaper.com/wallpaper/1920x1080/1309/spot_light_bright-Design_HD_wallpaper_1920x1080.jpg);

}
.box1 {
	width: 20vw;
	margin: auto;
	padding: 15px;
	border-radius: 5px;
	background-color: rgba(0, 238, 255, 0.472);
	color: rgb(0, 0, 0);
}
.box2 {
	width: 20vw;
	margin: auto;
	padding: 15px;
	border-radius: 5px;
	background-color: rgba(0, 255, 157, 0.472);
	color: rgb(0, 0, 0);
}
.button {

  margin-top: 150px;
  margin-bottom: 75px;
  margin-right: 75px;
  margin-left: 75px;
}
</style>