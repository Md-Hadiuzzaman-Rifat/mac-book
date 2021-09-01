let memory_16GB=document.getElementsByClassName('memory_16GB')[0]
let memory_free=document.getElementsByClassName('memory_free')[0]
let storage_free=document.getElementsByClassName("storage_free")[0]
let storage_512GB=document.getElementsByClassName("storage_512GB")[0]
let storage_1TB=document.getElementsByClassName("storage_1TB")[0]
let delivery_20=document.getElementsByClassName('delivery_20')[0]
let delivery_free=document.getElementsByClassName('delivery_free')[0]
let button=document.getElementsByTagName('button')[0]
let input=document.getElementsByTagName('input')[0]
let final_price=document.getElementsByClassName('final_price')[0]
let costTotal=0


function calculatePrice(product,value){
    const product_cost=document.getElementsByClassName(product+"_cost")[0]
    product_cost.innerHTML=value
    priceTotal()
}


function priceTotal(){
    let base_cost=parseInt(document.getElementsByClassName("base_cost")[0].innerHTML)
    let memory_cost=parseInt(document.getElementsByClassName("memory_cost")[0].innerHTML)
    let storage_cost=parseInt(document.getElementsByClassName("storage_cost")[0].innerHTML)
    let delivery_cost=parseInt(document.getElementsByClassName("delivery_cost")[0].innerHTML)
    let total_cost=document.getElementsByClassName("total_cost")[0]

    costTotal=base_cost+memory_cost+storage_cost+delivery_cost
    total_cost.innerHTML=costTotal
    final_price.innerHTML=costTotal

    return costTotal
}


function promoCode(){
    let getValue=input.value
    if(getValue=="stevekaku"){
        input.value=""
        discountPrice()
    }
    else{
        input.value=""
        
    }
}


function discountPrice(){
    final_price.innerHTML=priceTotal()*0.8
}


memory_free.addEventListener('click',function(){
    calculatePrice("memory",memory_free.value)
})
memory_16GB.addEventListener('click',function(){
    calculatePrice("memory",memory_16GB.value)
})
storage_free.addEventListener('click',function(){
    calculatePrice('storage',storage_free.value)
})
storage_512GB.addEventListener('click',function(){
    calculatePrice('storage',storage_512GB.value)
})
storage_1TB.addEventListener('click',function(){
    calculatePrice('storage',storage_1TB.value)
})
delivery_free.addEventListener('click',function(){
    calculatePrice("delivery",delivery_free.value)
})
delivery_20.addEventListener('click',function(){
    calculatePrice("delivery",delivery_20.value)
})
button.addEventListener('click',function(){
    promoCode()
})