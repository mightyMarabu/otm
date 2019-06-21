
                    $(document).ready(function () {  
                        var lbl = [];  
                        var dat = [];  
                        $.ajax({  
                            url: "/getInsurData/",  
                            type: "GET",  
                            dataType: "json",  
                            success: function (data) {  
                            $.each(data, function (key, value) {  
                                lbl.push(value.versicherung);  
                                dat.push(value.sum);  

                                var myJSON = JSON.stringify(lbl);  
                                var xyz = lbl;  
                                var insurData = dat;  

                                function getRandomColor(n) {
                                    var letters = '0123456789ABCDEF'.split('');
                                    var color = '#';
                                    var colors = [];
                                    for(var j = 0; j < n; j++){
                                        for (var i = 0; i < 6; i++ ) {
                                            color += letters[Math.floor(Math.random() * 16)];
                                        }
                                        colors.push(color);
                                        color = '#';
                                    }
                                    return colors;
                                }
                                var ctx = document.getElementById('myChart').getContext('2d');
                                var chart = new Chart(ctx, {
                                    // The type of chart we want to create
                                    type: 'polarArea',
                                
                                    // The data for our dataset
                                    data: {
                                    //    labels: ['A', 'B', 'C', 'D', 'E'],
                                        labels: xyz,
                                        datasets: [{
                                            backgroundColor: getRandomColor(insurData.length),
                                            borderColor: 'gray',
                                        //    data: [1, 4, 5, 2, 3]
                                            data: insurData
                                        }]
                                    },

                                    // Configuration options go here
                                    options: {
                                        title: {
                                                display: true,
                                                text: 'Anzahl Versicherte pro Versicherung',
                                                },
                                        text: '19px',
                                        responsive: true
                                    }});
                            })}
                        })})