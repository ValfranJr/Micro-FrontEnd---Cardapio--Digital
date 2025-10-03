# Micro Frontends – Cardápio / Pedido / Container

## 🚀 Como rodar cada micro

### 1) **Micro Cardápio** (porta `3001`)
```bash
cd catalogo
npm install
npm run dev
```
App: http://localhost:3001

Remote: http://localhost:3001/_next/static/chunks/remote_entry.js

### 2) **Micro Pedido** (porta `3002`)
```bash
cd pedido
npm install
npm run dev
```
App: http://localhost:3002

Remote: http://localhost:3002/_next/static/chunks/remote_entry.js

### 3) **Micro Container** (porta `3000`)
```bash
cd container-app
npm install
npm run dev
```
App: http://localhost:3000

Remote: http://localhost:3000/_next/static/chunks/remote_entry.js

## 🔎 Observação: o container importa os remotes configurados em next.config.js, apontando para os arquivos remote_entry.js expostos pelos micros.

## 🔗 Como funciona a comunicação entre eles

Canal: eventos globais do window

Evento disparado: add-to-cart

Payload (detail):
```js
{
  "id": "string",
  "nome": "string",
  "descricao": "string",
  "preco": "number"
}
```

## 📤 Emissor (Micro Cardápio)
```js
window.dispatchEvent(
  new CustomEvent('add-to-cart', { detail: item })
);
```

## 📥 Ouvinte (Micro Pedido)
```js
useEffect(() => {
  const handle = (e) =>
    setPedido((prev) => [...prev, e.detail]);

  window.addEventListener('add-to-cart', handle);
  return () => window.removeEventListener('add-to-cart', handle);
}, []);
```
---