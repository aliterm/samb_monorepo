## SAMB Inventory

A Simple Invetory App

### Database
First, you should create a database name by PGAdmin4 or DBeaver

#### Setup

Frontend
```
cd frontend/
cp env_example .env
npm install -g pnpm
pnpm install
```

Backend API
```
cd api/
cp env_example .env
go mod tidy
go run server.go
```


### Postman Collection

Simply import the Postman collection file `SAMB Inventory.postman_collection.json`.
