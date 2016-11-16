#
# Copyright (c) Factchina Inc, 2015-2016
#
# This unpublished material is proprietary to Factchina Inc.
# All rights reserved. The methods and techniques described herein
# are considered trade secrets and/or confidential.
# Reproduction or distribution, in whole or in part,
# is forbidden except by express written permission of Factchina Inc.
#

this.views ?= {}
this.views.institutions ?= {}

test_01 = angular.module 'institutions.test_01', [
  'ui.bootstrap'
  'ui.parts'
  'ui.common'
  'api.helper'
]

.factory 'Test01Singleton', [
  'Alert'
  '$filter'
  (Alert, $filter) ->
    service                  = {}
    service.value            = {}
    service.load = (id) ->
      service.value.test  = id

    return service
]

.controller 'EventController', [
  '$scope'
  'Test01Singleton'
  ($scope, Test01Singleton) ->
    $scope.Singleton = Test01Singleton
    $scope.count = 0
    $scope.$on('MyEvent',() ->
      $scope.count++
  );

    return
]

angular.module('app').requires.push 'institutions.test_01'