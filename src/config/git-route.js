(function(){
  angular.module('appGit').$inject = ['ngRoute'];

  angular.module('appGit').config(['$routeProvider' ,function ($routeProvider) {
    $routeProvider.when('/text',{
      template: '<h1>Hi</h1>'
    })
  }])
})();