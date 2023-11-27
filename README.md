# Real-time-market
Overview
This project is a real-time financial data visualization application that connects to a WebSocket server to fetch and display live last traded price (LTP) updates for different financial instruments. It provides a user-friendly interface to view and analyze candlestick charts for selected instruments over various timeframes.

Features=>
WebSocket Connection: Establishes a connection to a WebSocket server to receive live LTP messages for different financial instruments.
Live LTP Updates: Displays real-time updates of LTP for Nifty, BankNifty, and FinNifty in the navigation bar every second.
Candlestick Charting: Allows users to select an instrument, timeframe (1 min, 3 min, 5 min), and generates candlestick charts.
Flexible UI: Adapts to UI changes and provides a responsive and intuitive design for chart visualization.


Functionality=>
WebSocket Connection: Uses Socket.IO library to connect to the provided WebSocket URL (wss://functionup.fintarget.in/ws?id=fintarget-functionup) and starts receiving LTP messages in string format.
Live LTP Display: Updates the LTP values for Nifty, BankNifty, and FinNifty in the navigation bar, refreshing every second.
Candlestick Chart Generation: Takes user input for instrument selection and timeframe to generate candlestick charts using Chart.js library for visualization.
Data Storage: Utilizes local storage to store candlestick data if necessary for improved user experience.


Usage=>
Installation: Clone the repository and install necessary dependencies using npm install.
Socket.IO: For establishing the WebSocket connection and handling real-time data updates.

Charting Library (e.g., Chart.js): To create candlestick charts based on the received data.

Starting the Application: Run the application using npm start and navigate to the provided URL.
WebSocket Connection: Upon loading, the application establishes a WebSocket connection and starts displaying live LTP updates in the navbar.
Generating Candlestick Charts: Use the provided interface to select an instrument and timeframe, then click "Generate Chart" to view the candlestick chart.



























