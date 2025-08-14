# Booking Micro-Service

## Project Setup

```bash
# Clone the repository
git clone https://github.com/DipakNanecha2005/Booking-Service.git

# Navigate into the folder
cd Booking-Service

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```ini
# Node environment
NODE_ENV=development #production

# port
PORT=5002

# Database Sync
SYNC_DB=false # true
```

> 💡 You can adjust the values as needed for your local setup.

### 3. Configure sequelize for MySQL

Create a `config.json` file in `src/config/` directory

```json
{
  "development": {
    "username": "YOUR_DATABASE_LOGIN_NAME",
    "password": "YOUR_DATABASE_PASSWORD",
    "database": "Booking_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

> 💡 Tip: The default MySQL username is usually "root" and the password may be empty on local setups if not set.

### 4. Create the Database

Once your `config.json` is set up, run the following command inside the `src/` directory to create the development database:

```bash
npx sequelize db:create
```

### 5. Run Migrations

Run Sequelize migrations to create the necessary tables:

```bash
npx sequelize db:migrate
```

### 6. Start the service

Now start the server:

```bash
npm start
```
