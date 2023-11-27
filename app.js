
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('generateChartBtn').addEventListener('click', generateCandlestickChart);
//     const selectedTimeFrame = document.getElementById('timeFrame').value;
//     console.log(selectedTimeFrame);
//     const socket = io('wss://functionup.fintarget.in/ws?id=fintarget-functionup');

//     socket.on('connect', () => {
//         console.log('Connected to WebSocket');
//     });

//     socket.on('message', (data) => {
//         const ltpData = JSON.parse(data);
//         updateLTP(ltpData);
//     });

//     function updateLTP(ltpData) {
//         document.getElementById('Nifty').innerText = `Nifty: ${ltpData.Nifty}`;
//         document.getElementById('BankNifty').innerText = `BankNifty: ${ltpData.BankNifty}`;
//         document.getElementById('FinNifty').innerText = `FinNifty: ${ltpData.FinNifty}`;
//     }

//     function generateCandlestickChart() {
        

//         // Implement chart generation logic here
//         // Fetch historical data based on selectedInstrument and selectedTimeFrame
//         const historicalData = [
//             { time: '09:15', open: 19500, high: 19700, low: 19450, close: 19650 },
//             // Add more data points based on the selected time frame
//             // { time: '09:16', open: ..., high: ..., low: ..., close: ... },
//             // ...
//         ];
//         // Import Chart.js from a CDN
//                const script = document.createElement('script');
//                script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
//                document.head.appendChild(script);
//                script.onload = () => {
//         const ctx = document.getElementById('candlestickChartCanvas').getContext('2d');
//         const chart = new chart(ctx,{
//             type:'candlestick',
//             data:{
//                 datasets:[{
//                     label:selectedInstrument,
//                     data:historicalData.map(data => ({
//                         t: new Date(`2023-11-27T${data.time}:00Z`), // Change this date format as per your data
//                     o: data.open,
//                     h: data.high,
//                     l: data.low,
//                     c: data.close
//                     })),
//                     borderColor:'black',
//                     borderWidth:1
                
//                 }]
            
//             },
        
        
//             options:{
//                 scales:{
//                     x:{
//                         type:'time',// Use 'time' for time-scale
//                         time:{
//                             unit:'minute',// Display x-axis in minute intervals
//                             displayFormats:{
//                                 minutes:'HH:mm'// Format for display (hours:minutes)
//                             }
//                         },
//                         title:{
//                             display:true,
//                             text:'Time'// X-axis label
//                         }
//                     },
//                     y:{
//                         title:{
//                             display:true,
//                             text:'Price'// Y-axis label
//                         }
//                     }
//                 },
//                 plugins:{
//                     legend:{
//                         display:true,
//                         position:'top'// Position of the legend
//                     }
//                 }
//             }
//         });
//     }
//         // Use a charting library (e.g., Chart.js) to generate the candlestick chart
        
//     }
//     // Update the chart in the designated container on the UI
//     function updateChartWithData(newData) {
//         chart.data.datasets[0].data.push({
//             t: new Date(), // Update with the new time
//             o: newData.open,
//             h: newData.high,
//             l: newData.low,
//             c: newData.close
//         });
//         chart.update(); // Update the chart with new data
//     }
//     setTimeout(()=>{
//         updateChartWithData({ open: 19700, high: 19900, low: 19650, close: 19850 });
//     },5000)// Simulate receiving new data after 5 seconds (replace with actual data update logic)

    
// });
