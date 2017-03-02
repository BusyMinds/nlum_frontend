import angular from 'angular';
import config from '../config';

let constantsModule = angular.module('Constants', [])

.constant('NLUMEndpoint', config.NLUM_URL)

.name;

export default constantsModule;
