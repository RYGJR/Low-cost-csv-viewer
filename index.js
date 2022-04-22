//heart graph

const uploadConfirm_heart = document
  .getElementById("uploadConfirm_heart")
  .addEventListener("click", () => {
    Papa.parse(document.getElementById("uploadfile_heart").files[0], {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results_heart) {
        var data = [];
        var dataPoints = [];
        var dataSeries = { type: "line" };
        for (var i = results_heart.data.length - 1; i >= 0; i--) {
          //-unreversed the csv
          dataPoints.push({
            x: new Date(results_heart.data[i].Timestamp), // x: i+1;assuming one sec per data results_heart.data[i].Timestamp
            y: parseInt(results_heart.data[i].Value),
          });
          if(results_heart.data[i].Value < 100){
              console.log(new Date(results_heart.data[i].Timestamp),results_heart.data[i].Value)
          }
          
        }
        
        //put there the function to draw chart
        dataSeries.dataPoints = dataPoints;
        data.push(dataSeries);
        var options = {
          zoomEnabled: true,
          animationEnabled: true,
          title: {
            text: "Oximetry",
          },
          axisY: {
            lineThickness: 1,
          },
          data: data, // random data
        };

        var chart = new CanvasJS.Chart("chartContainer1", options);
        chart.render();
      },
    });
  });

//Thermistor graph
const uploadConfirm_thermistor = document
  .getElementById("uploadConfirm_thermistor")
  .addEventListener("click", () => {
    Papa.parse(document.getElementById("uploadfile_thermistor").files[0], {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results_thermistor) {
        var data = [];
        var dataPoints = [];
        var dataSeries = { type: "line" };
        for (var i = results_thermistor.data.length - 1; i >= 0; i--) {
          //-unreversed the csv
          dataPoints.push({
            x: new Date(results_thermistor.data[i].Timestamp), // x: i+1;assuming one sec per data results_heart.data[i].Timestamp
            y: parseInt(results_thermistor.data[i].Value),
          });
        }
        console.log(typeof dataPoints);
        console.log(dataPoints);

        dataSeries.dataPoints = dataPoints;
        data.push(dataSeries);

        console.log(dataSeries);
        //put there the function to draw chart

        var options = {
          zoomEnabled: true,
          animationEnabled: true,
          title: {
            text: "Thermistor temperature °C ",
          },
          axisY: {
            lineThickness: 1,
          },
          data: data, // random data
        };

        var chart = new CanvasJS.Chart("chartContainer2", options);
        chart.render();
      },
    });
  });
//Flex graph

const uploadConfirm_flex = document
  .getElementById("uploadConfirm_flex")
  .addEventListener("click", () => {
    Papa.parse(document.getElementById("uploadfile_flex").files[0], {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results_flex) {
        var data = [];
        var dataPoints = [];
        var dataSeries = { type: "line" };
        for (var i = results_flex.data.length - 1; i >= 0; i--) {
          //-unreversed the csv
          dataPoints.push({
            x: new Date(results_flex.data[i].Timestamp), // x: i+1;assuming one sec per data results_heart.data[i].Timestamp
            y: parseInt(results_flex.data[i].Value),
          });
        }
        console.log(typeof dataPoints);
        console.log(dataPoints);

        dataSeries.dataPoints = dataPoints;
        data.push(dataSeries);

        console.log(dataSeries);
        //put there the function to draw chart

        var options = {
          zoomEnabled: true,
          animationEnabled: true,
          title: {
            text: "Flex Bend ∠ ",
          },
          axisY: {
            lineThickness: 1,
          },
          data: data, // random data
        };

        var chart = new CanvasJS.Chart("chartContainer3", options);
        chart.render();
      },
    });
  });

function downloadPDF() {
  $("[id='input-group']").hide();
  var element = document.getElementById("charts");
  var opt = {
    margin: 0.5,
    filename: "user_graph.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 1, dpi: 400 },
    jsPDF: { unit: "in", format: "legal", orientation: "landscape" },
  };
  html2pdf().set(opt).from(element).save();
}

// $("#toggle").on("click",function(){
//     $("[id='input-group']").hide();
//  });
