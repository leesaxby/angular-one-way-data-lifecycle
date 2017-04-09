import angular from 'angular';
import organisation from './components/organisation/organisation.js';
import member from './components/member/member.js';

angular.module('app', [])
       .component('organisation', organisation)
       .component('member', member);

angular.bootstrap(document, ['app']);
