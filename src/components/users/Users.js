import React, { Component } from 'react';
import axios from 'axios';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const answer = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: answer.data,
    })
  }

  putRows = () => (
    this.state.users.map((user, id) => (
      <tr key={id}>
        <td>
          { user.name }
        </td>
        <td>
          { user.email }
        </td>
        <td>
          { user.website }
        </td>
      </tr>
    ))
  );

  render() {
    console.log(this.state.users);
    
    return (
      <div className='margen'>
        <table className='tabla'>
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Correo
              </th>
              <th>
                Enlace
              </th>
            </tr>
          </thead>
          <tbody>
            { this.putRows() }
          </tbody>
        </table>
      </div>
    );
  }
}