# SQL Practice Exercise

## Learn and Community

Check out our wide range of courses.
We have a Discord community where you can ask questions and get help from the community.

---

## Chapter 4: Practice Exercise

### Client Requirements:

You’ve been approached by a client who runs a small chai store and wants to set up a simple database to manage their chai offerings. The client has provided the following requirements:

#### Database Setup:

- Create a new database named `chai_store_db` for managing chai products.

#### Chai Table:

- Create a table called `chai_store` with the following columns:
  - `id`: A unique identifier for each chai (auto-incrementing).
  - `chai_name`: The name of the chai (e.g., “Masala Chai”, “Green Chai”).
  - `price`: The price of each chai.
  - `chai_type`: Type of chai (e.g., “Spiced”, “Herbal”, “Cold”).
  - `available`: Boolean value indicating if the chai is currently available or not.

#### Initial Data Insertion:

The client provides a list of their chai offerings and wants you to insert the following data:

| Chai Name     | Price | Type       | Available     |
|---------------|-------|------------|---------------|
| Masala Chai   | ₹30  | Spiced     | Available     |
| Green Chai    | ₹25  | Herbal     | Available     |
| Black Chai    | ₹20  | Classic    | Available     |
| Iced Chai     | ₹35  | Cold       | Not Available |
| Oolong Chai   | ₹40  | Specialty  | Available     |

#### Data Queries:

The client needs some reports:

1. Display all chai names and prices, using column aliases like “Chai Name” and “Cost in INR”.
2. Find all chai varieties that have the word “Chai” in their name.
3. List all chai varieties that cost less than ₹30.
4. Show chai varieties sorted by price from highest to lowest.

#### Data Updates:

- Update the price of “Iced Chai” to ₹38 and mark it as available.

#### Data Deletions:

- Discontinue “Black Chai” and remove it from the database.

---

## SQL Solution:

### Create a New Database for the Chai Store:
```sql
CREATE DATABASE chai_store_db;
```

### Create a New Table for the Chai Store:
```sql
CREATE TABLE chai_store (
    id SERIAL PRIMARY KEY,
    chai_name VARCHAR(100) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    chai_type VARCHAR(100) NOT NULL,
    available BOOLEAN NOT NULL
);
```

### Insert the Initial Data into the Chai Store Table:
```sql
INSERT INTO chai_store (chai_name, price, chai_type, available)
VALUES ('Masala Chai', 30, 'Spiced', TRUE),
       ('Green Chai', 25, 'Herbal', TRUE),
       ('Black Chai', 20, 'Classic', TRUE),
       ('Iced Chai', 35, 'Cold', FALSE),
       ('Oolong Chai', 40, 'Specialty', TRUE);
```

### Data Queries:

1. **Display all chai names and prices, using column aliases:**
   ```sql
   SELECT chai_name AS "Chai Name", price AS "Cost in INR"
   FROM chai_store;
   ```

2. **Find all chai varieties that have the word “Chai” in their name:**
   ```sql
   SELECT * FROM chai_store
   WHERE chai_name LIKE '%Chai%';
   ```

3. **List all chai varieties that cost less than ₹30:**
   ```sql
   SELECT * FROM chai_store
   WHERE price < 30;
   ```

4. **Show chai varieties sorted by price from highest to lowest:**
   ```sql
   SELECT * FROM chai_store
   ORDER BY price DESC;
   ```

### Data Updates:

- **Update the price of “Iced Chai” to ₹38 and mark it as available:**
  ```sql
  UPDATE chai_store
  SET price = 38, available = TRUE
  WHERE chai_name = 'Iced Chai';
  ```

### Data Deletions:

- **Delete “Black Chai” from the database:**
  ```sql
  DELETE FROM chai_store
  WHERE chai_name = 'Black Chai';
  ```

---

## Additional Resources:

- **To delete the entire table:**
  ```sql
  DROP TABLE chai_store;
  ```

- **To delete all rows from a table:**
  ```sql
  TRUNCATE TABLE chai_store;
  ```

- **To avoid accidental errors when dropping tables:**
  ```sql
  DROP TABLE IF EXISTS chai_store;
  ```

---

## Summary:

In this chapter, we have learned about the basics of SQL and how to use it to manage and manipulate relational databases. We have also learned about the different types of relationships in SQL and how to use them. By the end of this chapter, you should have a good understanding of how to use SQL to manage and manipulate relational databases effectively.
