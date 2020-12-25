//Hi stranger, don't judge the below pls. Designer by trade, so I know enough js to make things work, maybe not the best way to do it :)

var costPrice = document.getElementById("cost-price"); //turnip cost price
var buyCount = document.getElementById("buy-count"); //amount of turnips bought
var sellPrice = document.getElementById("sell-price"); //price turnips sold for

window.onload = function() {
    costPrice.value = localStorage.getItem('storeCostPrice');
    buyCount.value = localStorage.getItem('storeBuyCount');
    sellPrice.value = localStorage.getItem('storeSellPrice');
}

var btn = document.querySelector("#beep-boop");
var btnReset = document.querySelector("#reset");

spentText = document.querySelector("#spent-text"); // "that means you've spent"
profitOrLossText = document.querySelector("#profitOrLoss-text"); // "profit or loss"
walkAwayText = document.querySelector("#walkAway-text"); // "you're walking away with"

document.onkeyup = function() {
    localStorage.setItem('storeCostPrice', costPrice.value);
    localStorage.setItem('storeBuyCount', buyCount.value);
    localStorage.setItem('storeSellPrice', sellPrice.value);
}

btnReset.onclick = function() {

    costPrice.value = " ";
    buyCount.value = " ";
    sellPrice.value = " ";
    localStorage.clear();
    spentText.innerHTML = "0 Bells";
    profitOrLossText.innerHTML = "0 Bells";
    walkAwayText.innerHTML = "0 Bells";

}

btn.onclick = function() {

    //spent calc
    var spent = +costPrice.value * +buyCount.value;
    var spentString = spent.toLocaleString()+ " Bells";
    spentText.innerHTML = spentString;

    //profit calc
    var oldTotal = spent;
    var newTotal = +buyCount.value * +sellPrice.value;
    var difference = newTotal - oldTotal;
    
    var differenceText = difference.toLocaleString() + " Bells";
    var newTotalText = newTotal.toLocaleString() + " Bells";
    
    //returning specific things
    profitOrLossText.innerHTML = differenceText;
    walkAwayText.innerHTML =  newTotalText;

};


//tracking click / tap areas to focus cursor correctly

//step one - get the whole heckin div
var costPriceGroup = document.getElementById("cost-price-group"); 
var purchasedCountGroup = document.getElementById("purchased-count-group"); 
var soldPriceGroup = document.getElementById("sold-price-group");

//step two - when clicked said div, focus on correct field :)
costPriceGroup.onclick = function() {
    costPrice.focus();
};
purchasedCountGroup.onclick = function() {
    buyCount.focus();
};
soldPriceGroup.onclick = function() {
    sellPrice.focus();
};

