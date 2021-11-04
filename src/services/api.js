/*
* Arquivo de configuração do serviço que faz comunicação com a api, permitindo o consumo 
* da mesma no frontend. Código desenvolvido em um dos módulo do curso da blue e aprimorado
* para uma forma que faz mais sentido para o meu uso 
*/

export default {
    "baseURL": "https://rickandmortyapi.com/api",
    "list": function(){ 
        return fetch(this.baseURL + '/character')
    },
    "getOne": function(id){
        return fetch(`${this.baseURL}/character/${id}`)
    }
}
