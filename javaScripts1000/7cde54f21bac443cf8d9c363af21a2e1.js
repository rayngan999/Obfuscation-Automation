var profile = new Vue({
	data: {
        profile_data: [],
        active_member: false,
        payment: {},
        logout_url: '',
		loggedin: false
	},
	mounted: function(){
        this.init();
	},
	methods: {
        init: function(){            
            try {
                this.get_profile();
            } catch(e) {
                console.log(e);
            }
        },
        get_assinatura: function(){
            try {
                axios.get('/wp-admin/admin-ajax.php', {
                    params: {
                        'action': 'info_assinatura',
                        '_': (new Date()).getTime()
                    }
                })
                .then(response => {
                    profile.payment = response.data;
                });
            } catch(e){
                console.log(e);
            }
        },
		get_profile: function(){
            try {
                axios.get('/wp-admin/admin-ajax.php', {
                    params: {
                        'action': 'get_profile',
                        '_': (new Date()).getTime()
                    }
                })
                .then(response => {
                    if(response.data.loggedin){
                        profile.loggedin = true;
                        profile.profile_data = response.data.profile.data;
                        profile.logout_url = decodeURIComponent(profile.profile_data.logout_url.replace(/&amp;/g, "&")); 
                        try {
                            var next = new Date(profile.profile_data.subscription._schedule_next_payment);
                            console.log(next.getTime() + ' = ' + (new Date()).getTime());
                            if(next.getTime() > (new Date()).getTime()){
                                profile.active_member = true;
                            } else {
                                profile.active_member = false;
                            }
                        } catch(e) {
                            profile.active_member = false;
                        }
                    } else {
                        profile.loggedin = false;
                        profile.profile_data = {};
                    }
                });
            } catch(e){
                console.log(e);
            }
		},
	}
});
profile.$mount('.ze-moleza-profile');


var cancelamento = new Vue({
	data: {
        payment: {},
        plano: 'Carregando',
        latest: []
	},
	mounted: function(){
        this.init();
	},
	methods: {
        init: function(){            
            try {
                this.get_assinatura();
            } catch(e) {
                console.log(e);
            }
        },
        get_assinatura: function(){
            try {
                axios.get('/wp-admin/admin-ajax.php', {
                    params: {
                        'action': 'info_assinatura',
                        '_': (new Date()).getTime()
                    }
                })
                .then(response => {
                    cancelamento.payment = response.data;
                    cancelamento.latest = response.data.info.data.latest;
                });
            } catch(e){
                console.log(e);
            }
        }
	}
});
cancelamento.$mount('.ze-moleza-profile-cancelamento');