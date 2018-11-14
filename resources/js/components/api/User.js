import React, { Component } from 'react'
import * as ReactDOM from "react-dom";

export default class User extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        let $this = this;

        axios.get('api/users').then(response => {
            $this.setState({
                data: response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render(){
        return (
          <div className="col-lg-12">
                <h3>Usuários </h3>
              <a href="/users/create" className="btn btn-primary">Cadastrar Usuario</a>
              <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                  <tbody>
                  { this.state.data.map((user, i) => (
                      <tr>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                              <a href="" className="btn btn-primary">Editar</a>
                              <a href="" className="btn btn-primary">Excluir</a>
                          </td>
                      </tr>
                    )
                  )}

                  </tbody>
              </table>
          </div>
        );
    }
}
//é necessário este tratamento
if (document.getElementById('users')) {
     // ReactDOM.render(<User />, document.getElementById('users'));
    ReactDOM.render(<User/>, document.getElementById('users'));
}