# E-Commerce Clothing API

# E-Commerce Clothing API

This API provides endpoints to manage products for an e-commerce clothing store.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/JitendraKumar1092/E-Commerce.git
cd E-Commerce
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
MONGO_URL=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

4. Start the server:

```bash
npm start
```

The server will start on port 3000 by default.

## Usage

### API Endpoints

- **GET /api/products**: Get all products.

- **GET /api/products/:query**: Get products by name or category. Replace `:query` with the name or category you want to search for.

### Example Requests

#### Get all products

```bash
GET /api/products
```

#### Get products by name

```bash
GET /api/products/Pants
```

This will return all products with "Pants" in their name.

#### Get products by category

```bash
GET /api/products/Tops
```

This will return all products in the "Tops" category.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

