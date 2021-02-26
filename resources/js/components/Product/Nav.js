import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark rounded" >
        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/product/index">List</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/product/form">Create Product</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/category/form">Create Category</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Admin
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/logout">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

