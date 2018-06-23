<template>
    <div>
        <v-header :active.sync="active"></v-header>
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
            this.$router.push({
                path: `${this.active}`,
                name: this.active,
                params: {
                    account: this.$route.params.account,
                    user: this.$route.params.user
                }
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>