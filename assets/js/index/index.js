/**
 * Created by chenzhe on 17/5/11.
 */
app.controller("index_controller",function($scope,$http,$service){
    $scope.date='';
    var tree = [
        {
            text: "Parent 1",
            state: {
                checked: true,
                disabled: false,
                expanded: true,
                selected: true
            },
            nodes: [
                {
                    text: "Child 1",
                    state:{
                        checked: true
                    },
                    nodes: [
                        {
                            text: "Grandchild 1"
                        },
                        {
                            text: "Grandchild 2"
                        }
                    ]
                },
                {
                    text: "Child 2"
                }
            ]
        },
        {
            text: "Parent 2",
            state:{
                checked: true
            }
        },
        {
            text: "Parent 3"
        },
        {
            text: "Parent 4"
        },
        {
            text: "Parent 5",
            state:{
                checked: true
            }
        }
    ];
    $('#tree').treeview({data: tree,showCheckbox:true});
    $('#firstname').datetimepicker({
        language:'zh-CN',
        format: 'yyyy-mm-dd hh:ii',
        autoclose:true
    }).on('changeDate', function(ev){
        var date=this.value;
        $scope.$apply(function () {
            $scope.date=date;
        });
    });
});