
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
                <BaseButtonComponent size="small" width="200px" layout="filled-base-button">Filtrar</BaseButtonComponent>
              </div>
            </div>
            <div className="tabelaAlunos">
              <table className="tableCustom">
                <thead className="headCustom">
                  <tr className="menuCustom">
                    <th>Número de série</th>
                    <th>Nome do aluno</th>
                    <th>Data de nascimento</th>
                    <th>Nota</th>
                    <th>Aula</th>
                    <th>Endereço residencial detalhado</th>
                    <th>Obs</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody className="bodyCustom">
                  <tr className="linhaCustom">
                    <td>Dado 1</td>
                    <td>Dado 2</td>
                    <td>Dado 3</td>
                    <td>Dado 4</td>
                    <td>Dado 5</td>
                    <td>Dado 6</td>
                    <td>Dado 7</td>
                    <td>X</td>
                  </tr>
                  <tr className="linhaCustom">
                    <td>Dado 1</td>
                    <td>Dado 2</td>
                    <td>Dado 3</td>
                    <td>Dado 4</td>
                    <td>Dado 5</td>
                    <td>Dado 6</td>
                    <td>Dado 7</td>
                    <td>X</td>
                  </tr>
                </tbody>
                {/* <tfoot>
                  <tr>
                    <td colSpan={3}>Rodapé da Tabela</td>
                  </tr>
                </tfoot> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
