new Vue({
    el:'#app',
    data:{
        name:'putra',
        age : '24',
        result : false,
        types:[
            {name:'A', age:21},
            {name:'B', age:24}
        ]
    },
    methods:{
        alert:function(){
            alert('YOLOOOOO');
        }
    }
});