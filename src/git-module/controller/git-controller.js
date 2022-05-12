

(function(){
    'use strict';
    angular
        .module('appGit')
        .controller('git-controller',gitController);
    
        gitController.$inject=['webService','$rootScope'];
    
        function gitController(webService,$rootScope){
            var vm=this;
            vm.data={};
            vm.count = '';
            vm.repos=[];
            vm.query='';
            vm.searchType=1;

            vm.searchQuery= searchQuery;
            
            function searchQuery(){
                webService.webToTransform(vm.query,vm.searchType)
                    .then((response)=>{
                        vm.repos=response.data;
                        vm.count = response.count;
                        console.log(vm.repos);
                        //$rootScope.$apply(); so as not to start another life cycle here that alters the web service
                    })
            }
        }
    })();