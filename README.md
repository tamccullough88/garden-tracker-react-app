# Garden Tracker Frontend

## Overview

This is the frontend of the Garden Tracker application, built with React. It allows users to track their garden's plants and associated information through an interactive user interface.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript applications.
- **React Router**: A routing library for React applications.

## Architecture

The frontend is structured as a single-page application (SPA) using React. It interacts with the backend through a set of RESTful APIs. The state of the application is managed using Redux, and routing is handled by React Router. Axios is used to make HTTP requests to the backend.

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn (version 1.x or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tamccullough88/garden-tracker-react-app.git
   cd garden-tracker-react-app/frontend
   ```

2. Install dependencies:

  ```bash
  npm install
  ```

  or

  ```bash
  yarn install
  ```

The build artifacts will be stored in the build directory.


## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.


## License
This project is licensed under the MIT License.



# Garden Tracker Backend

## Overview

This is the backend of the Garden Tracker application, built with Django. It provides RESTful APIs to manage gardens, plants, and comments, and connects to a PostgreSQL database.

## Tech Stack

- **Django**: A high-level Python web framework.
- **Django REST Framework**: A powerful and flexible toolkit for building Web APIs.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Python**: The programming language used for writing Django applications.

## Architecture

The backend is structured as a Django project with several applications:
- **gardens**: Manages garden data.
- **plants**: Manages plant data and has a foreign key relationship with gardens.
- **comments**: Manages comments data and has a foreign key relationship with plants.

The backend exposes a set of RESTful APIs for the frontend to interact with. PostgreSQL is used as the database to store the data, and Gunicorn is used as the WSGI HTTP server.

## Getting Started

### Prerequisites

- Python (version 3.8 or higher)
- PostgreSQL
- pip (Python package installer)
- virtualenv (optional, but recommended)

### Installation

1. Clone the repository:

  ``` bash
  git clone https://github.com/tamccullough88/garden-tracker-react-app.git
  cd garden-tracker-react-app/backend
  ```

2. Create a virtual environment and activate it:

  ``` bash
  python -m venv env
  source env/bin/activate
  ```

3. Install dependencies:

  ``` bash
  pip install -r requirements.txt
  ```

4. Set up the PostgreSQL database:

- Create a database named gardentracker.
- Update the DATABASES setting in settings.py with your PostgreSQL configuration.

5. Apply database migrations:

   ```bash
   python manage.py migrate
   ```

### Running the Application
To start the development server, run:

   ```bash
   python manage.py runserver
   ```
The API will be available at http://localhost:8000.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License.


Feel free to modify any sections to better suit your project specifics.













