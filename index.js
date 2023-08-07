import express from "express";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

let todos = [];

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.get('/add', (req, res) => {
  const newTodo = req.query.todo;
  if (newTodo) {
    todos.push(newTodo);
  }
  res.redirect('/');
});

app.get('/delete/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < todos.length) {
      todos.splice(index, 1);
    }
    res.redirect('/');
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
