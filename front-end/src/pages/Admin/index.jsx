import InputWithLabel from "../../components/InputWithLabel/index";


function Admin() {
    return (
        <form>
        <InputWithLabel
          labelText="Nome"
          type="text"
          testId="admin_manage__input-name"
          onChange={() => {}}

        />

        <InputWithLabel
          labelText="Email"
          type="text"
          testId="admin_manage__input-email"
          onChange={() => {}}
        />

        <InputWithLabel
          labelText="Senha"
          type="password"
          testId="admin_manage__input-password"
          onChange={() => {}}  
        />

        <select data-testid="admin_manage__select-role">       
           

        </select>

        <button data-testid="admin_manage__button-register" type="button">Cadastrar</button>

        </form>
    )
}

export default Admin