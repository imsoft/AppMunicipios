-- Crear la tabla emergency_numbers
CREATE TABLE
    emergency_numbers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        image_url TEXT,
        phone_number TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Crear la tabla experiences
CREATE TABLE
    experiences (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        url TEXT,
        price REAL NOT NULL,
        description TEXT,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Crear la tabla restaurants
CREATE TABLE
    restaurants (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        url TEXT,
        price REAL NOT NULL,
        description TEXT,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Insertar datos en la tabla emergency_numbers
INSERT INTO
    emergency_numbers (name, image_url, phone_number)
VALUES
    (
        'Fire Department',
        'http://example.com/fire.jpg',
        '123-456-7890'
    ),
    (
        'Police Department',
        'http://example.com/police.jpg',
        '098-765-4321'
    );

-- Insertar datos en la tabla experiences
INSERT INTO
    experiences (name, url, price, description, image_url)
VALUES
    (
        'City Tour',
        'http://example.com/citytour',
        50.0,
        'A tour around the city',
        'http://example.com/tour.jpg'
    ),
    (
        'Museum Visit',
        'http://example.com/museum',
        30.0,
        'Visit to the local museum',
        'http://example.com/museum.jpg'
    );

-- Insertar datos en la tabla restaurants
INSERT INTO
    restaurants (name, url, price, description, image_url)
VALUES
    (
        'Italian Bistro',
        'http://example.com/italianbistro',
        25.0,
        'Authentic Italian cuisine',
        'http://example.com/bistro.jpg'
    ),
    (
        'Sushi Place',
        'http://example.com/sushiplace',
        40.0,
        'Fresh sushi and sashimi',
        'http://example.com/sushi.jpg'
    );