import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Header, Footer } from './Layouts'

export default class extends Component {
  render() {
    return <Fragment>
      <Header/>
      <Footer/>
    </Fragment>
  }
}
