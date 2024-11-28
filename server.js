import express from "express";

const posts = [
    
  { id: 1, descricao: "Uma foto teste", image: "https://placecats.com/millie/300/150" },
  { id: 2, descricao: "Gato fazendo yoga", image: "https://placecats.com/millie/300/150" },
  { id: 3, descricao: "Gato fazendo panqueca", image: "https://placecats.com/millie/300/150" },
  // ... outros posts com o ID no início
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});