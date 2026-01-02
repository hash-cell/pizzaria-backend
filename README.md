# 🍕 Sujeito Pizza - API Backend

API desenvolvida em Node.js para um sistema de pizzaria/restaurante. O sistema gerencia usuários, categorias, produtos, mesas e pedidos, permitindo o fluxo completo desde o garçom até a cozinha.

## 🚀 Tecnologias Utilizadas

- **Node.js** & **TypeScript**
- **Express** (Framework Web)
- **Prisma ORM** (Banco de Dados)
- **PostgreSQL** (Banco Relacional)
- **JWT** (Autenticação)
- **Multer** (Upload de imagens)
- **Bcrypt** (Criptografia de senhas)

## 📂 Estrutura do Banco de Dados

- **Users:** Usuários do sistema (Login/Senha).
- **Categories:** Categorias de produtos (Pizzas, Bebidas, etc).
- **Products:** Produtos com foto, preço e descrição.
- **Orders:** Mesas/Comandas abertas.
- **OrderItems:** Itens dentro de um pedido.

## 🛠️ Como Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/hash-cell/pizzaria-backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o Banco de Dados:**
    - Crie um arquivo `.env` na raiz baseado no exemplo.
    - Configure a `DATABASE_URL` com seu PostgreSQL.
    - Configure o `JWT_SECRET`.

4.  **Rode as Migrations:**
    ```bash
    npx prisma migrate dev
    ```

5.  **Inicie o Servidor:**
    ```bash
    npm run dev
    ```
    _O servidor rodará em `http://localhost:3333`_

---

## 🔗 Rotas da API

### 🔐 Autenticação
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/users` | Cria um novo usuário |
| `POST` | `/session` | Realiza login (Retorna Token JWT) |
| `GET` | `/me` | Retorna detalhes do usuário logado |

### 📦 Categorias & Produtos
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/category` | Cria uma nova categoria |
| `GET` | `/category` | Lista todas as categorias |
| `POST` | `/product` | Cria produto (Multipart Form - upload img) |
| `GET` | `/category/product` | Lista produtos por categoria (`?category_id=ID`) |

### 📝 Pedidos (Mesas)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/order` | Abre uma nova mesa |
| `DELETE` | `/order` | Deleta uma mesa |
| `POST` | `/order/add` | Adiciona item à mesa |
| `DELETE` | `/order/remove` | Remove item da mesa (`?item_id=ID`) |
| `PUT` | `/order/send` | Envia pedido para cozinha (`draft: false`) |
| `PUT` | `/order/finish` | Finaliza pedido (`status: true`) |
| `GET` | `/orders` | Lista pedidos pendentes na cozinha |
| `GET` | `/order/detail` | Detalhes do pedido (`?order_id=ID`) |

---

## 👨‍💻 Autor
Desenvolvido por **Victor Prado**.
