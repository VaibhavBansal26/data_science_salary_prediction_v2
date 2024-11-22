import psycopg2
from config import Config

# Connect to the database
connection = psycopg2.connect(
    host=Config.DB_HOST,
    port=Config.DB_PORT,
    database=Config.DB_NAME,
    user=Config.DB_USER,
    password=Config.DB_PASSWORD
)
cursor = connection.cursor()

# Create the predictions table
cursor.execute("""
CREATE TABLE IF NOT EXISTS predictions (
    id SERIAL PRIMARY KEY,
    experience INT NOT NULL,
    prediction NUMERIC NOT NULL
);
""")

connection.commit()
cursor.close()
connection.close()

print("Database initialized successfully.")
