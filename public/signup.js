

let app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        email: '',
        repassword: '',
        phone: '',
        error: '',
        loading: false
    },
    methods: {
        signUp() {
            this.error = ''
            this.loading = true
            if ((this.username != '' && this.password != '') && (this.password === this.repassword)) {
                axios.post('http://localhost/api/user',{
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    phone: this.phone
                }).then(function(res){
                    res = res.data
                    if (res.error != undefined) {
                        this.error.msg = res.msg
                        this.error.color = 'red'
                    }else{
                        $('#modal1').modal('open')
                        this.loading = false
                    }
                }).catch(function(err){
                    console.log(err)
                })
            }else{
                this.error = {
                    msg: 'please fill in all requried fields',
                    color: 'blue'
                }
            }
        }
    },
    created: function () {
        $(document).ready(function () {
             $('.modal').modal();
        });
    },
})