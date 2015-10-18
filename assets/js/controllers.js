angular.module("app.controllers", ["app.factories"])

.controller("homeCtrl", function($scope, PostsFactory)
{
    PostsFactory.get().
    success(function(res)
    {
        $scope.posts = res;
    })
    .error(function(error)
    {
        console.log(error)
    })
})

.controller("profileCtrl", function($scope)
{

})
