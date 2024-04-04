## Cryptocurrency Converter

This project is a simple cryptocurrency converter built with React, Tailwind CSS, and Vite. It allows users to convert one cryptocurrency to another based on the latest exchange rates fetched from an external API.

### Features

- **Currency Conversion**: Users can input the amount of cryptocurrency they want to convert and select the currencies they want to convert from and to.
- **Dynamic Exchange Rates**: The app fetches the latest exchange rates from an external API to ensure accurate conversion.
- **Swap Functionality**: Users can quickly swap the conversion currencies with a single click.
- **Responsive Design**: The app is designed to be responsive and work seamlessly across different screen sizes.

### Usage

1. **Input the Amount**: Enter the amount of cryptocurrency you want to convert in the "From" input box.
2. **Select Currencies**: Choose the currency you want to convert from and to using the dropdown menus.
3. **Swap**: Optionally, you can swap the currencies by clicking the "Swap" button.
4. **Convert**: Click the "Convert" button to see the converted amount in the selected currency.

### Installation

To run this project locally, follow these steps:

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone https://github.com/vinaychhabra/Cryptocurrency-Convertor.git
   cd currency-converter
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
4. Open your browser and visit http://localhost:3000 to view the app.

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript
- External API (https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies)
