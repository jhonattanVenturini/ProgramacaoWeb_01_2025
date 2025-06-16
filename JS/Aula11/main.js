//Sistema de Cadastro e Consulta de Usuários

// O sistema tem como objetivo registrar, armazenar e consultar dados de usuários, como nome, e-mail, data de nascimento e endereço. Os dados serão salvos em um banco de dados e poderão ser acessados e editados por meio de uma interface simples e intuitiva. O sistema permitirá a criação de novos usuários, a edição de informações, a exclusão de registros e a busca por usuários cadastrados.


const form = document.getElementById('formUsuario');
const lista = document.getElementById('listaUsuarios');
let usuarios = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const endereco = document.getElementById('endereco').value;

  const usuario = {
    nome,
    email,
    dataNascimento,
    endereco
  };

  usuarios.push(usuario);
  exibirUsuarios();
  form.reset();
});

function exibirUsuarios() {
  lista.innerHTML = '';
  usuarios.forEach((user, index) => {
    const li = document.createElement('li');
    li.textContent = `${user.nome} - ${user.email}`;
    lista.appendChild(li);
  });
}
