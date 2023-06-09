import React, { useContext, useState } from 'react';
import ClientsContext from '../context/ClientsContext';
import InputSelect from './inputSelect';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ProjectsContext from '../context/ProjectsContext';
import br from 'date-fns/locale/pt-BR';

registerLocale('br', br);

function ProjectFormModal() {

  const { 
    handleChangeTag,
    projectSubmit,
    inputError,
    toggleProjectForm,
    setInputError,
    projectEditTarget,
    setProjectEditTarget,
    setFocusProject,
  } = useContext(ProjectsContext);
  
  const { userClients } = useContext(ClientsContext);


  const [endDate, setEndDate] = useState(projectEditTarget ? new Date(projectEditTarget.initialDate) : new Date());
  const [initialDate, setInitialDate] = useState(projectEditTarget ? new Date(projectEditTarget.initialDate) : new Date());
  const [prevEndDate, setPrevEndDate] = useState(projectEditTarget ? new Date(projectEditTarget.initialDate) : new Date());

  const tags = [
    'Estrutura Metálica',
    'Cálculo de Vigas',
    'Revisão',
  ];

  const status = [
    'Negociando',
    'Fechado',
    'Entregue',
  ];

  const categories = [
    'Projeto Estrutural',
    'Consultoria',
  ];


  return (
    <div className=" modal">
      <form
        onSubmit={(e) => {
          setInputError();
          setFocusProject();
          projectSubmit(e);
        }}
        className="project-form">

        { inputError && <p className="input-error">{inputError}</p> }
        <div className="form-box">

          <label className="label"> Nome do Projeto:

            <input
              name="name"
              className="full" 
              type="text"
              placeholder="Casarão 3 Pav"
              defaultValue={projectEditTarget ? projectEditTarget.name : ''}
            />

          </label>
        </div>
        
        <div className="form-box">

          <div className="form-box">

            <label className="label"> Cliente:
              <InputSelect
                isDisabled={projectEditTarget !== undefined}
                name="clientId"
                options={userClients.map((i) => i.name )}
                optionsData={userClients}
              />
            </label>

            <label className="label"> Categoria:
              <InputSelect
                name="category"
                options={categories}
              />
            </label>
            <label className="label"> Status:
              <InputSelect
                name="status"
                options={status.map((i) => i )}
              />
            </label>
          </div>
        </div>

        <div className="form-box">
          <label className="label"> Tags:
            <div className="form-box">
              { tags.map((tag) => (
                <label key={tag} className="label sub-label"> { tag }

                  <input
                    defaultChecked={projectEditTarget ? projectEditTarget.tags.includes(tag) : false}
                    onChange={handleChangeTag}
                    value={tag} id="tags"
                    type="checkbox"
                    name="tags"
                  />

                </label>
              ))}
            </div>
          </label>
        </div>

        <div className="form-box">
          <label className="label"> Capturado através de:
            <input
              name="capturedBy"
              type="text"
              placeholder="Website"
              defaultValue={projectEditTarget ? projectEditTarget.capturedBy : ''}
            />
          </label>
        </div>

        <div className="form-box">
          <label className="label"> Valor ofertado:
            <input
              name="ofertedValue"
              type="number"
              placeholder={4500}
              defaultValue={projectEditTarget ? projectEditTarget.ofertedValue : ''}
            />
          </label>
          <label className="label"> Valor acordado:
            <input
              name="value"
              type="number"
              placeholder={4000}
              defaultValue={projectEditTarget ? projectEditTarget.value : ''}
            />
          </label>
        </div>

        <div className="form-box">

          <label className="label"> Data final acordada:
            <DatePicker locale={br} name="initialDate" selected={initialDate} onChange={(date) => setInitialDate(date)} />
          </label>

          <label className="label"> Data final prevista:
            <DatePicker locale={br} name="expectedEndDate" selected={prevEndDate} onChange={(date) => setPrevEndDate(date)} />
          </label>

          <label className="label"> Data final acordada:
            <DatePicker locale={br} name="endDate" selected={endDate} onChange={(date) => setEndDate(date)} />
          </label>

        </div>

        <div className="form-box spaced">
          <button type="button"
            className="cancel"
            onClick={() => {
              setProjectEditTarget();
              toggleProjectForm(false);
              setInputError(false);
            }}
          >
            Cancelar
          </button>

          <button
            className="submit"
            type="submit"
          >
              Enviar
          </button>
        </div>

      </form>
    </div>
  );
}

export default ProjectFormModal;