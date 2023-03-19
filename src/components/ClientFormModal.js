import React, { useContext } from 'react';
import ClientsContext from '../context/ClientsContext';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import br from 'date-fns/locale/pt-BR';

registerLocale('br', br);

function ClientFormModal() {


  const { inputError, toggleClientForm, clientSubmit, setInputError } = useContext(ClientsContext);
  


  return (
    <div className=" modal">
      <form
        onSubmit={(e) => clientSubmit(e)}
        className="project-form">

        { inputError && <p className="input-error">{inputError}</p> }
        <div className="form-box">
          <label className="label"> Nome do Cliente*
            <input name="name" className="full" type="text" placeholder="João Carlos" />
          </label>
        </div>
        
        <div className="form-box">
          <label className="label"> Nome da companhia
            <input name="companyName" type="text" placeholder="Company Ltda" />
          </label>
          <label className="label"> Capturado através de
            <input name="capturedBy" type="text" placeholder="Website" />
          </label>
        </div>

        <div className="form-box">
          <label className="label"> Telefone
            <input name="phone" type="number" placeholder="31xxxxxxxx" />
          </label>
        </div>

        <div className="form-box">
          <label className="label"> Email de contato
            <input name="email" className="full" type="text" placeholder="contato@email.com" />
          </label>
        </div>

        <div className="form-box spaced">
          <button type="button"
            className="cancel"
            onClick={() => {
              toggleClientForm(false);
              setInputError(false);
            }}
          >Cancelar</button>
          <button className="submit" type="submit" >Enviar</button>
        </div>

      </form>
    </div>
  );
}

export default ClientFormModal;