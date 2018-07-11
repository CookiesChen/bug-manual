<template>
    <div>
        <v-header :active.sync="active"></v-header>
        <router-view></router-view>
    </div>
</template>

<script>
import VHeader from '@/components/common/header/header'
import {mapState} from 'vuex'
export default {
    name: 'MainPage',
    computed: {
        ...mapState({
            logged: state => state.user.logged,
            account: state => state.user.account,
            schoolId: state => state.user.schoolId,
            phone: state => state.user.phone,
            role: state => state.user.role
        })
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
            if(this.active == 'UserInfo'){
                this.$router.push({
                    name: 'UserInfo'
                });
            }
            else if(this.active == 'ApplySchool'){
                var res = $.get('/api/user/getapply', (data)=>{
                    //vuex
                    this.$store.commit('setApply', data.data);
                    this.$router.push({
                        name: 'ApplySchool'
                    });
                });
            }
            else if(this.active == 'AllSchool'){
                var res = $.get('/api/user/getallschools', (data)=>{
                    this.$store.commit('setSchool', data.data.schools);
                    this.$router.push({
                        name: 'AllSchool',
                    });
                });
            }
            else if(this.active == 'MessageCenter'){
                var res = $.get('/api/user/getmessages', (data)=>{
                    this.$store.commit('setMessages', data.data.messages);
                    this.$router.push({
                        name: 'MessageCenter'
                    });
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