new Vue({
    el:'#app',
    data:{
        name:'putra',
        age : '24',
        result : false,
        types:[
            {name:'A', age:21},
            {name:'B', age:24}
        ],
        users:[]
    },

    created(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            this.users = data
        })
        .catch(err => console.log(err))
    },
    methods:{
        alert:function(){
            alert('YOLOOOOO');
        }
    }
});