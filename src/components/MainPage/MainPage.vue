<template>
    <div>
        <v-header :active.sync="active" :account.sync="account"></v-header>
        <router-view></router-view>
    </div>
</template>

<script>
import VHeader from '@/components/common/header/header'
export default {
    name: 'MainPage',
    computed: {
        account() {
            return this.$route.params.account;
        },
        user(){
            return this.$route.params.user;
        }
    },
    data () {
        return {
            active : 'UserInfo'
        }
    },
    components: {
        VHeader
    },
    methods: {
    },
    watch: {
        active (newVal){
            console.log(newVal);
            if(this.active == 'UserInfo'){
                this.$router.push({
                    name: 'UserInfo',
                    params: {
                        account: this.$route.params.account,
                        user: this.$route.params.user
                    }
                });
            }
            else if(this.active == 'ApplySchool'){
                var res = $.post('/api/getapply',{account:this.account, role:this.user.role}, (data)=>{
                    console.log(data);
                    this.$router.push({
                        name: 'ApplySchool',
                        params: {
                            account: this.account,
                            user: this.user,
                            schools: data.schools
                        }
                    });
                });
            }
            else if(this.active == 'AllSchool'){
                this.$router.push({
                    name: 'AllSchool',
                    params: {
                        account: this.$route.params.account,
                        user: this.$route.params.user
                    }
                });
            }
            else if(this.active == 'MessageCenter'){
                this.$router.push({
                    name: 'MessageCenter',
                    params: {
                        account: this.$route.params.account,
                        user: this.$route.params.user
                    }
                });
            }
            /*this.$router.push({
                path: `${this.active}`,
                name: this.active,
                params: {
                    account: this.$route.params.account,
                    user: this.$route.params.user
                }
            });*/
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>