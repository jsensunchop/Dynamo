new Vue({


    el:".divlogin",
    data:{
        type:0,
        form:{
             //0 es login, 1 es registro, 2 es recuperacion de contraseña
            type:0,
            email: "",
            password: "",
            password2: ""
        }
    },
    methods:{
        sendForm(){
            //alert("Enviando Formulario"),
            if(this.validateType()){
                console.log(this.form)
            }
        },
        validateType(){
            if(this.form.type==0 && !this.validateEmail && !this.validatePassword){
                return true;
            } else if(this.form.type==1 && !this.validateEmail && !this.validateRepetirContra){
                return true;
            }
            else if(this.form.type==2 && !this.validateEmail){
                return true;
            }
            return false;
        }

    },
    computed:{
        validateEmail(){
            var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(exp.test(this.form.email)){
                return false;
            }   else{
                return true;
            }
        },

        validatePassword(){
            var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
            if(this.form.password==""){
                return true;
            }   else{
                return false;
            }
        },
        
        validateRepetirContra(){
            if(this.form.password==this.form.password2){
                return false;
            } else{
                return true;
            }
            
        },
        title(){
            return (this.form.type==0)?'Iniciar Sesión en Dynamo':(this.form.type==1)?'Crear una cuenta en Dynamo'
            :'Recuperar Contraseña';
        }
    }
});