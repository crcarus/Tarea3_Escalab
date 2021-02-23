//Tarea3:
//1•Función que me permita encontrar todas las ordenes que contengan de ingredients lechuga y palta

const orderByIngredients = (ingre1,ingre2)=>{
    sandwichOrders.forEach(sandwichOrder => { //sandwichOrder = es el objeto de sandwichOrders
        const {id,ingredients} = sandwichOrder
        let valIngre1 = ingredients.includes(ingre1)
        let valIngre2 = ingredients.includes(ingre2)
        if (valIngre1 && valIngre2){
            console.log(`EL ID: ${id}; tienen ${ingre1} y ${ingre2}\n Sus ingredienteos son: ${ingredients}`);
        }
    })
}

//2•Función que me permita encontrar una orden a través del id y que me devuelva un string con el siguiente formato de ejemplo: 
//La orden fue realizada el (09-10-2020), la orden llevó (mechada) y (bagette). 
//En caso de no encontrar nada a través del id

const orderById= (ids) =>{
    const orderFind = sandwichOrders.find(sandwichOrder=>sandwichOrder.id===ids)
    if (orderFind) {
        const {ordered,bread,protein} = orderFind
    return `La orden con id ${ids} fue realizada el ${ordered}, la order llevo ${protein} y ${bread}.`;   
    } else {
        return "Error"
}}


//•	Función que me permita encontrar una orden a través del id y que me indique si la orden incluye pepinillos entre sus ingredients,
//debería devolver un true|false como respuesta.

const orderByIdIngredients = (ids) =>{
    const filtroId = sandwichOrders.find(sandwichOrder=>sandwichOrder.id===ids)
    const {id,ingredients}=filtroId
    const valPepinillos = ingredients.includes("pepinillos")

    if (valPepinillos) {
        return `La orden ${id} presenta pepinillos entre sus ingredientes : ->${ingredients}`
    }else{
        return `La orden ${id} NO presenta pepinillos`
    }
}

//Función que me permita encontrar todas las orden que se hicieron en un día en específico
//es decir, si yo coloco 20-10-2020, la función me debería devolver: Se encontraron N ordenes para la fecha 20-10-2020.

const orderByDate = (fecha) => {
    const funcionDate= sandwichOrders.filter(sandwichOrder=> sandwichOrder.ordered ===fecha)
    const count = funcionDate.length
    return `Se encontraron ${count} pedidos para la ${fecha}`
    
}    

//Función que me devuelva las fechas de todas las ordenes que tuvieron como proteina not burger y de ingredients cebolla caramelizada
const orderByOrderd = (prote1,ingre2)=>{
    sandwichOrders.forEach(sandwichOrder => { //sandwichOrder = es el objeto de sandwichOrders
        const {id,ingredients,protein,ordered} = sandwichOrder
        let valProtein = protein.includes(prote1)
        let valIngred = ingredients.includes(ingre2)
        if (valProtein&&valIngred){
            console.log(`Orden ${id}:Fecha ${ordered};\n Proteina: ${protein} Ingredietes: ${ingredients }`);
        }
    })
}

//Reduce: Función que me devuelva un objeto, con la cantidad correspondiente de ordenes por cada bread:
const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]
const cantidadPanes = breads.reduce((contador,id)=> {
    contador[id] = (contador[id] || 0)+1
    return contador

},{})
console.log(cantidadPanes);

















