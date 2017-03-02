import angular from 'angular';
import Constants from './constants';
import Header from './header/header';
import Footer from './footer/footer';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Constants,
  Header,
  Footer,
  User,
])

.name;

export default commonModule;
