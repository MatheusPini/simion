
import { FaCircleUser } from "react-icons/fa6";
import "./dashboard.scss";
import { TextFieldComponent } from "../../components/inputs/text-field/text-field";
import { SelectComponent } from "../../components/inputs/select/select";
import { BaseButtonComponent } from "../../components/buttons/base-button/base-button";

export const Dashboad = () => {
  return (
    <div className="bodyContainer">
      <div className="navbar">
        <h2>Navbar</h2>
      </div>

      <div className="container">
        <div className="sidebar">
          <FaCircleUser className="faCircleUserStyle" />
          <p>Sidebar content</p>
        </div>

        <div className="bodyLayout">
          <div className="titlePageSection">
            <h1 className="titlePage">Sessão de Alunos</h1>
          </div>
          <div className="bodyPage">
            <div className="filtroPesquisa">
              <div className="inputGroup">
                <TextFieldComponent placeholder="Ex: Mariana" size="small" name="nome" label="Nome do Aluno" type="text" />
              </div>
              <div className="inputGroup">
                <SelectComponent label="Série do Aluno" name="serie" size="small">
                  <option value="1">1 Série</option>
                  <option value="2">2 Série</option>
                  <option value="3">3 Série</option>
                  <option value="4">4 Série</option>
                  <option value="5">5 Série</option>
                </SelectComponent>
              </div>
              <div className="inputGroup">
                <BaseButtonComponent size="200px" layout="filled-base-button">teste</BaseButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
