# 📊 Sistema de Controle de Ativos

Este projeto consiste em um sistema **cliente-servidor** desenvolvido para auxiliar no controle de ativos de uma empresa, como **maquinário, móveis, equipamentos e outros bens**.  

O sistema permite gerenciar ativos, usuários e localizações, oferecendo recursos de autenticação, autorização e histórico de alocações.

---

## 🚀 Funcionalidades

- **Ativos**
  - Cadastro, edição, exclusão e consulta.
  - Associação de ativos a um usuário ou localidade.
  - Consulta com filtros: nome, responsável atual ou localização.

- **Usuários**
  - CRUD completo (cadastro, edição, exclusão e listagem).
  - Associação a cargos.
  - Controle de acesso por **níveis de permissão**.
  - Autenticação via **JWT**.

- **Localizações**
  - Cadastro, edição, exclusão e listagem.
  - Associação de ativos a locais específicos.

- **Histórico de Alocação**
  - Registro automático de movimentações de ativos.
  - Indicação de origem e destino (usuário e/ou localidade).
  - Rastreamento da vida útil dos ativos.

---

## 🛠️ Tecnologias Utilizadas

### Backend (API - Node.js + Express + Prisma)
- **Prisma ORM** (`@prisma/client`, `prisma`)
- **Express**
- **JWT (jsonwebtoken)**
- **Bcrypt** (hash de senhas)
- **Class-validator** e **Class-transformer**
- **Cors**
- **TypeScript**

### Frontend (React)
- **React 19**
- **React Router DOM**
- **React Hook Form + Yup**
- **Axios**
- **Bootstrap**
- **React Icons**
- **React Toastify**
- **TypeScript**

---

# 📊 Asset Management System

This project is a **client-server system** developed to assist in the management of company assets, such as **machinery, furniture, equipment, and other goods**.  

The system allows managing assets, users, and locations, providing authentication, authorization, and allocation history tracking.

---

## 🚀 Features

- **Assets**
  - Create, update, delete, and query.
  - Associate assets with a user or location.
  - Query with filters: name, current responsible user, or location.

- **Users**
  - Full CRUD operations (create, update, delete, list).
  - Association with roles.
  - Access control with **permission levels**.
  - Authentication via **JWT**.

- **Locations**
  - Create, update, delete, and list.
  - Associate assets with specific locations.

- **Allocation History**
  - Automatic record of asset movements.
  - Tracks origin and destination (user and/or location).
  - Allows monitoring of asset lifecycle.

---

## 🛠️ Technologies Used

### Backend (API - Node.js + Express + Prisma)
- **Prisma ORM** (`@prisma/client`, `prisma`)
- **Express**
- **JWT (jsonwebtoken)**
- **Bcrypt** (password hashing)
- **Class-validator** and **Class-transformer**
- **Cors**
- **TypeScript**

### Frontend (React)
- **React 19**
- **React Router DOM**
- **React Hook Form + Yup**
- **Axios**
- **Bootstrap**
- **React Icons**
- **React Toastify**
- **TypeScript**
