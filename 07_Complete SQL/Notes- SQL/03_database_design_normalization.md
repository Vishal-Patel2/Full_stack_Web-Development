
# Database Design and Normalization
## Learn and Community
Check out our wide range of our courses.  
We have a Discord community where you can ask questions and get help from the community.

---

## Chapter 3: Database Design and Normalization

### Understanding Database Design Principles
Good database design avoids data redundancy and ensures data integrity.

**Example:**  
Instead of storing the city name in every row for each chai type, store city details in a separate `Cities` table and link it with the `Chai` table using foreign keys.

---

### What is Normalization?
Normalization organizes a database into tables and columns to:

- **Eliminate data redundancy.**
- **Ensure data dependencies are logical.**

---

### First Normal Form (1NF)
1NF ensures that the data in a table is organized into rows and columns, with each column holding atomic (indivisible) values.

**Example:**  
A Chai table should have columns like `name`, `ingredients`, `price`, and each cell should contain a single value. You shouldn’t have multiple cities listed in one cell.

---

### Second Normal Form (2NF)
2NF ensures that each table depends on the primary key. There should be no partial dependencies (where a non-key column depends on part of a composite key).

**Example:**  
If a table has a composite key (`chai_id`, `city_id`), ensure all non-key columns (like `price`) depend on the entire key, not just one part.

---

### Third Normal Form (3NF)
3NF ensures that non-primary-key columns do not depend on other non-primary-key columns.

**Example:**  
A Chai table shouldn’t have both `city_name` and `city_population`. Instead, `city_name` and `city_population` should belong in a separate `City` table, and you can link it to the `Chai` table with a `city_id`.

---

### Entity Relationship Diagrams (ERDs)
ERDs are used to visually represent relationships between database entities.

**Example:**  
You might have two tables: `Chai` and `City`. An ERD would show a one-to-many relationship between cities and chai varieties.

#### One-to-Many Relationship:
One city can have many chai varieties, but each chai variety is sold in one city.

---

### Relationship in SQL
There are different types of relationships in SQL:

- **One-to-One Relationship:** One entity can have only one instance of another entity.
- **One-to-Many Relationship:** One entity can have multiple instances of another entity.
- **Many-to-Many Relationship:** One entity can have multiple instances of another entity, and vice versa.

---

### LMS Practice Exercise
We will create a fun practice database design for Learning Management System (LMS) using SQL. The LMS will have the following entities:

#### Users Table
```sql
CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100),
  userType ENUM('student', 'instructor', 'admin'),
  isPaid BOOLEAN,
  enrolledCourses INTEGER[] REFERENCES courses(_id),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);
```

#### Courses Table
```sql
CREATE TABLE courses (
  _id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  description TEXT,
  price NUMERIC,
  instructorId INTEGER REFERENCES users(_id),
  category VARCHAR(100),
  tags TEXT[],
  durationInHours INTEGER,
  videos INTEGER[] REFERENCES videos(_id),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);
```

#### Videos Table
```sql
CREATE TABLE videos (
  _id SERIAL PRIMARY KEY,
  courseId INTEGER REFERENCES courses(_id),
  title VARCHAR(100),
  description TEXT,
  url VARCHAR(200),
  durationInMinutes INTEGER,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);
```

#### Enrollments Table
```sql
CREATE TABLE enrollments (
  _id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(_id),
  courseId INTEGER REFERENCES courses(_id),
  enrollmentDate TIMESTAMP,
  progress NUMERIC,
  completedAt TIMESTAMP,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);
```

### Relationships:
- `users._id < enrollments.userId`
- `enrollments.userId > users._id`
- `courses._id < enrollments.courseId`
- `enrollments.courseId > courses._id`
- `courses._id < videos.courseId`
- `videos.courseId > courses._id`
- `users._id < courses.instructorId`
- `courses.instructorId > users._id`

---

### Summary
In this chapter, we have learned about database design and normalization. We have also learned about the basic data types and how to use them. We have also learned about the different types of relationships and how to use them. By the end of this chapter, you should have a good understanding of how to use database design and normalization in SQL.
