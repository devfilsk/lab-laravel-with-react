import React, { Component } from 'react'
import ReactDOM from "react-dom";

export default class Create extends Component{

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
    }
    handleEmailChange(e){
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)

        axios.post('/api/users', this.state).then(response => {
            console.log(response)
        }).then(error => {
            console.log(error)
        })

    }



    render(){
        return (
            <div>
                <form method="POST" action="" onSubmit={this.handleSubmit.bind(this)}>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Nome</label>

                        <div className="col-md-6">
                            <input id="name" type="text"
                                   className="form-control" name="name"
                                   value={this.state.name}
                                   onChange={this.handleNameChange.bind(this)}
                                   required autoFocus/>


                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email</label>

                        <div className="col-md-6">
                            <input id="email" type="email"
                                   className="form-control" name="email"
                                   value={this.state.email}
                                   onChange={this.handleEmailChange.bind(this)}
                                   required/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Senha</label>

                        <div className="col-md-6">
                            <input id="password" type="password"
                                   value={this.state.password}
                                   onChange={this.handlePasswordChange.bind(this)}
                                   className="form-control" name="password" required/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirmar Senha</label>

                        <div className="col-md-6">
                            <input id="password-confirm" type="password" className="form-control"
                                   name="password_confirmation" required/>
                        </div>
                    </div>

                    <div className="form-group row mb-0">
                        <div className="col-md-6 offset-md-4">
                            <button type="submit" className="btn btn-primary">
                                Registrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
if(document.getElementById('user_create')){
    ReactDOM.render(<Create/>, document.getElementById('user_create'));
}
