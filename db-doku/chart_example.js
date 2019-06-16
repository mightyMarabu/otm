$(document).ready(function () {  
var lbl = [];  
var dat = [];  
$.ajax({  
url: "../Home/getData",  
type: "Post",  
dataType: "json",  
success: function (data) {  
$.each(data, function (key, value) {  
lbl.push(value.Item);  
dat.push(value.Price);  
//alert("Item" + lbl + " Price" + dat);  
})  
var myJSON = JSON.stringify(lbl);  
var xyz = lbl;  
var dat1 = dat;  
var ctx = document.getElementById("lineChart1");  
var lineChart = new Chart(ctx, {  
type: 'line',  
data: {  
labels: xyz,  
//["January", "February", "March", "April", "May", "June", "July"],  
//$.parseJSON(lbl),  
datasets: [{  
label: "My First dataset",  
backgroundColor: "rgba(38, 185, 154, 0.31)",  
borderColor: "rgba(38, 185, 154, 0.7)",  
pointBorderColor: "rgba(38, 185, 154, 0.7)",  
pointBackgroundColor: "rgba(38, 185, 154, 0.7)",  
pointHoverBackgroundColor: "#fff",  
pointHoverBorderColor: "rgba(220,220,220,1)",  
pointBorderWidth: 1,  
data: dat1  
}, {  
label: "My Second dataset",  
backgroundColor: "rgba(3, 88, 106, 0.3)",  
borderColor: "rgba(3, 88, 106, 0.70)",  
pointBorderColor: "rgba(3, 88, 106, 0.70)",  
pointBackgroundColor: "rgba(3, 88, 106, 0.70)",  
pointHoverBackgroundColor: "#fff",  
pointHoverBorderColor: "rgba(151,187,205,1)",  
pointBorderWidth: 1,  
data: dat1  
}]  
},  
});  
}  
});  
});  
