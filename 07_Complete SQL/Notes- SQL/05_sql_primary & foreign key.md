# Primary Key and Foreign Key

## Learn and Community

Check out our wide range of our courses.  
We have a Discord community where you can ask questions and get help from the community.

---

## Chapter 5: SQL Joins and Keys

In relational databases, joins are used to combine rows from two or more tables based on a related column between them. There are several types of joins, each designed for specific purposes. Joins are a way to combine data from multiple tables to create a single result set.

### Types of Joins

There are several types of joins, each designed for specific purposes. Here are some common types of joins:

1. **Inner Join**: Combines rows from two tables based on a related column. Only rows with matching values in both tables are returned.
2. **Left Join**: Combines rows from two tables, returning all rows from the left table and matching rows from the right table. If no match is found, NULL values are used for the right table.
3. **Right Join**: Combines rows from two tables, returning all rows from the right table and matching rows from the left table. If no match is found, NULL values are used for the left table.
4. **Full Join**: Combines rows from two tables, returning all rows from both tables and matching rows. If no match is found, NULL values are used for the other table.
5. **Cross Join**: Combines rows from two tables, creating all possible combinations of rows. 

---

## Practice Exercise

### Tip

These practice exercises are designed to help you understand primary keys and foreign keys. To learn joins, we will use a simple two-table setup.

---

## Code Setup in SQL

We will create four tables for a chai store so that we can practice joins. The tables will be:

1. `customers`
2. `chai_store`
3. `orders`
4. `order_items`

### `customers` Table

```sql
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(50),
    contact_info VARCHAR(100)
);

INSERT INTO customers (customer_name, contact_info)
VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Charlie', 'charlie@example.com'),
('David', 'david@example.com'),
('Eve', 'eve@example.com');
```

### `chai_store` Table

```sql
CREATE TABLE chai_store (
    chai_id SERIAL PRIMARY KEY,
    chai_name VARCHAR(50),
    price DECIMAL(5, 2),
    chai_type VARCHAR(50)
);

INSERT INTO chai_store (chai_name, price, chai_type)
VALUES
('Masala Chai', 30.00, 'Spiced'),
('Green Chai', 25.00, 'Herbal'),
('Black Chai', 20.00, 'Classic'),
('Iced Chai', 35.00, 'Cold'),
('Oolong Chai', 40.00, 'Specialty');
```

### `orders` Table

```sql
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO orders (customer_id, order_date)
VALUES
(1, '2024-09-19'),
(2, '2024-09-18'),
(1, '2024-09-20'),
(4, '2024-09-17');
```

### `order_items` Table

```sql
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT,
    chai_id INT,
    quantity INT,
    price DECIMAL(5, 2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (chai_id) REFERENCES chai_store(chai_id)
);

INSERT INTO order_items (order_id, chai_id, quantity, price)
VALUES
(1, 1, 2, 30.00),
(1, 2, 1, 25.00),
(2, 3, 2, 20.00),
(3, 1, 1, 30.00),
(4, 5, 3, 40.00);
```

---

This is our sample setup for the chai store database, consisting of four tables: `customers`, `chai_store`, `orders`, and `order_items`. These tables store data about customers, chai varieties, orders, and the items in each order. The tables are linked together using foreign keys.

### Key Concepts

- **Primary Key**: Uniquely identifies each row in a table.
- **Foreign Key**: Establishes relationships between tables by linking columns based on related data.

---

## Summary

In this chapter, we have learned the basics of SQL joins. Additionally, we explored the roles of Primary Keys and Foreign Keys in relational databases. By the end of this chapter, you should have a solid understanding of how to use SQL joins and keys to manage and manipulate relational databases effectively.
