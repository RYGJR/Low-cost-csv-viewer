//heart graph
const timeData_heart = [];
const value_heart = [];
const valueName_heart = 'Oximetery';
const uploadConfirm_heart = document.getElementById('uploadConfirm_heart').addEventListener('click', () =>{
    Papa.parse(document.getElementById('uploadfile_heart').files[0],
    {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results_heart){
      
            for(i = 0; i < results_heart.data.length; i++){
                timeData_heart.push(results_heart.data[i].Timestamp);
                value_heart.push(results_heart.data[i].Value);
            }
               
            //put there the function to draw chart
            console.log(value_heart);
            const ctx = document.getElementById('heartChart').getContext('2d');
            const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: timeData_heart,
                datasets: [{
                    label: valueName_heart,
                    data: value_heart,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)'
                        
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });

            
        }
    });
});

//Thermistor graph
//Flex graph






