<template>
    <div class="navigator">
        <div class="nav" v-for="(nav, i) in navs" :key="i">
            <nuxt-link :to="nav.path">
                <button>{{ nav.name }}</button>
            </nuxt-link>
        </div>
    </div>
</template>


<style lang="scss">
    .navigator {
        position: fixed;
        top: 0;
        left: 0;
        
        a {
            button {
                background: $bg-color;
                border: none;
            }
        }
    }
</style>


<script>
export default {
    data() {
        return {
            navs: [
                {
                    name: 'ホーム',
                    path: '/'
                },
                {
                    name: '実験場',
                    path: '/top'
                }
            ]
        }
    }
}
</script>