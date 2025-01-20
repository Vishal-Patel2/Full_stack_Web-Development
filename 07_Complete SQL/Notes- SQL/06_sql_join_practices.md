# SQL Practice Exercise for Joins

## Learn and Community

Check out our wide range of courses.

We have a Discord community where you can ask questions and get help from the community.

---

## Chapter 6: Practice Exercise for Joins

### Create 2 Tables for a Chai Store

We will create 2 tables for a chai store so that we can practice joins. The tables will be:

- `chai`
- `orders`

---

### chai Table

```sql
CREATE TABLE chai (
    chai_id SERIAL PRIMARY KEY,
    chai_name VARCHAR(50),
    price DECIMAL(5, 2)
);
```

Let’s add some sample data to the `chai` table:

```sql
INSERT INTO chai (chai_name, price)
VALUES
('Masala Chai', 30.00),
('Green Chai', 25.00),
('Iced Chai', 35.00);
```

---

### orders Table

```sql
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    chai_id INT,
    customer_name VARCHAR(50),
    quantity INT,
    FOREIGN KEY (chai_id) REFERENCES chai(chai_id)
);
```

Let’s add some sample data to the `orders` table:

```sql
INSERT INTO orders (chai_id, customer_name, quantity)
VALUES
(1, 'Alice', 2),
(2, 'Bob', 1),
(1, 'Charlie', 3),
(3, 'David', 1);
```

---

### Join Challenges

#### 1. Inner Join
Get the list of all orders with the chai variety and customer details.

```sql
SELECT 
    orders.order_id, 
    orders.customer_name, 
    orders.quantity, 
    chai.chai_name, 
    chai.price
FROM 
    orders
INNER JOIN 
    chai 
ON 
    orders.chai_id = chai.chai_id;
```

---

#### 2. Left Join
Show all customers and their orders, but also include customers who haven’t ordered anything yet (if any).

```sql
SELECT 
    orders.customer_name, 
    orders.quantity, 
    chai.chai_name, 
    chai.price
FROM 
    orders
LEFT JOIN 
    chai 
ON 
    orders.chai_id = chai.chai_id;
```

---

#### 3. Right Join
Show all chai varieties, including those that haven’t been ordered yet.

```sql
SELECT 
    chai.chai_name, 
    chai.price, 
    orders.customer_name, 
    orders.quantity
FROM 
    orders
RIGHT JOIN 
    chai 
ON 
    orders.chai_id = chai.chai_id;
```

---

#### 4. Full Outer Join
List all customers and all chai varieties, with or without orders.

```sql
SELECT 
    orders.customer_name, 
    orders.quantity, 
    chai.chai_name, 
    chai.price
FROM 
    orders
FULL OUTER JOIN 
    chai 
ON 
    orders.chai_id = chai.chai_id;
