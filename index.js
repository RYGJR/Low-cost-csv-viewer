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
            
            const ctx = document.getElementById('heartChart').getContext('2d');
            const heartChart = new Chart(ctx, {
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
const timeData_thermistor = [];
const value_thermistor = [];
const valueName_thermistor = 'Temperature';
const uploadConfirm_thermistor = document.getElementById('uploadConfirm_thermistor').addEventListener('click', () =>{
    Papa.parse(document.getElementById('uploadfile_thermistor').files[0],
    {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results_thermistor){
      
            for(i = 0; i < results_thermistor.data.length; i++){
                timeData_thermistor.push(results_thermistor.data[i].Timestamp);
                value_thermistor.push(results_thermistor.data[i].Value);
            }
               
            //put there the function to draw chart
            console.log(value_thermistor);
            const ctx1 = document.getElementById('thermistorChart').getContext('2d');
            const thermistorChart = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: timeData_thermistor,
                datasets: [{
                    label: valueName_thermistor,
                    data: value_thermistor,
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
//Flex graph
const timeData_flex = [];
const value_flex = [];
const valueName_flex = 'Flex Sensor';
const uploadConfirm_flex = document.getElementById('uploadConfirm_flex').addEventListener('click', () =>{
    Papa.parse(document.getElementById('uploadfile_flex').files[0],
    {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results_flex){
      
            for(i = 0; i < results_flex.data.length; i++){
                timeData_flex.push(results_flex.data[i].Timestamp);
                value_flex.push(results_flex.data[i].Value);
            }
               
            //put there the function to draw chart
            console.log(value_flex);
            const ctx2 = document.getElementById('flexChart').getContext('2d');
            const flexChart = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: timeData_flex,
                datasets: [{
                    label: valueName_flex,
                    data: value_flex,
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

function downloadPDF(){
    var element = document.getElementById('charts');
    var opt = {
      margin:       0.5,
      filename:     'user_graph.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 1, dpi: 400},
      jsPDF:        { unit: 'in', format: 'legal', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
    
}

$("#toggle").on("click",function(){
    $("[id='input-group']").hide(); 
 });

