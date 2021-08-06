var ze_login = new Vue({
    el: '#app-login-header',
    methods: {
        loginGoogle: function(){
            this.do('google', function(response){
                console.log(response);
            });
        },
        loginFacebook: function(){
            this.do('facebook', function(response){
                console.log(response);
            });
        },
        do: function( provider, callback ){
            window.open('/wp-admin/admin-ajax.php?action=social_login&provider=' + provider);
        },
        login: function( provider ){
            switch(provider){
                case 'facebook':
                    return this.loginFacebook();
                case 'google':
                    return this.loginGoogle();
            }
        }
    }
});