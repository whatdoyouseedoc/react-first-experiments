import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import App from './App.jsx';

let data = [
    {id: 1, title: 'Angular 2', subtitle: 'Chill shit', imageUrl: 'https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=300&h=300'},
    {id: 2, title: 'React', subtitle: 'Cool shit', imageUrl: 'https://reactnative.training/static/reacticon.png'},
    {id: 3, title: 'Vue', subtitle: 'Hot shit', imageUrl: 'http://dl.hiapphere.com/data/icon/201703/HiAppHere_com_company.yak.vuejsdocumentation.png'},
    {id: 4, title: 'Ember', subtitle: 'Really good shit', imageUrl: 'https://cdn-images-1.medium.com/max/300/0*m0zzvBxDtHM4638k.png'}
];

ReactDOM.render(<App heroes={data}/>, document.getElementById('root'));