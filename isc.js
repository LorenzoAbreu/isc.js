var __Text_config = {
  title: 'Com qual gênero você se identifica?'
}

var __Id_config = {
  container: 'container-isc',
  modal: 'modal-isc',
  title: 'default-modal-text',
  submit: 'submit-isc',
  charToEdit: 'char-isc',
  form: {
    masculino: 'm-isc',
    feminino: 'f-isc',
    nao_binario: 'nb-isc'
  }
}

function getById(id){
  return document.getElementById(id);
}

function register(gender){
  localStorage.setItem('gender', gender);
}

function gender(){
  if (localStorage.getItem('gender')){
    return localStorage.getItem('gender');
  }
  else {
    return null;
  }
}

function setup(){
  const _Default_title = getById(__Id_config.title);
  _Default_title.innerText = __Text_config.title;

  const charToEdit = getById(__Id_config.charToEdit);

  var masculino = getById(__Id_config.form.masculino)
  var feminino = getById(__Id_config.form.feminino)
  var nao_binario = getById(__Id_config.form.nao_binario)
  
  if (gender() == 'm'){
    charToEdit.innerText = "o";
  }
  else if (gender() == 'f'){
    charToEdit.innerText = "a";
  }
  else if (gender() == 'nb'){
    try{
      charToEdit.innerText = localStorage.getItem('p');
    }
    catch{
      console.log('charToEdit não está sendo usado ou não foi definido corretamente.')
    }
  }

  if (gender() == null){
      getById(__Id_config.submit).addEventListener('click', () => {
        if (gender() != 'm' && gender() != 'f' && gender() != 'nb'){
          if ((masculino && feminino && nao_binario) && (masculino.checked || feminino.checked || nao_binario.checked)){
            if (masculino.checked){
              register('m');
              charToEdit.innerText = 'o';
            }
            else if (feminino.checked){
              register('f');
              charToEdit.innerText = 'a';
            }
            else{
              register('nb');
              localStorage.setItem('p', prompt('Digite o pronome que você quer ser chamado (exemplo: a, o, x, *, e)').substring(0,1));
              try{
                charToEdit.innerText = localStorage.getItem('p');
              }
              catch{
                console.log('charToEdit não está sendo usado ou não foi definido corretamente.')
              }
            }
            
            getById(__Id_config.container).style.display = 'none';
          }
        }
      })
  }
  else {
    getById(__Id_config.container).style.display = 'none';
  }
}
