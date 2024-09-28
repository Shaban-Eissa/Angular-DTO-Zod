# Angular DTO & ZOD
<img width="190" src="https://github.com/user-attachments/assets/ef717d6f-420f-41c9-b72e-575139005bea" />
<img width="180" alt="Angular_gradient" src="https://github.com/user-attachments/assets/7a16864f-f6fc-492e-bc7d-16174725bcc8">


## Overview

This project is a demonstration of using DTOs (Data Transfer Object's) inside angular application and making validation of the api responses with zod.

## Features

- Data fetching from a sample API
- Validation using Zod schemas
- Transformation of data into application models
- Clean separation of concerns with DTOs and models
- User-friendly interface

## Technologies Used

- **Angular**: Frontend framework
- **Zod**: For runtime validation and schema definition
- **TypeScript**: For type safety
- **RxJS**: For reactive programming and handling asynchronous data

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shaban-Eissa/Angular-DTO-Zod
   ```

2. **Navigate to the project directory:**
    
    ```bash
    cd Angular-DTO-Zod
    ```
    
3. **Install the dependencies:**
    
    ```bash
    npm install
    ```
    
4. **Run the application:**
    
    ```bash
    ng serve
    ```
    
5. **Open your browser and visit:**
    
    ```arduino
    http://localhost:4200
    ```
    

## Project Structure

```bash
/src
  /app
    /components      # Angular components
    /models          # Data models
    /dtos            # Data Transfer Objects with Zod schemas
    /services         # Services for data fetching
    /mappers          # Mappers to make transformation on Data
  /assets            # Static assets (images, etc.)
  /environments      # Environment variables
```

## Usage

1. On loading the application, it fetches user data from the sample API.
2. The data is validated against the defined Zod schema.
3. Valid data is transformed into model instances for use throughout the application.
4. The user interface displays the transformed data.

## Contribution

Feel free to fork the repository and submit pull requests. Any contributions or suggestions for improvements are welcome!
