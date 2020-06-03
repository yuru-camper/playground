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
    @media screen and (min-width: $pc-width) {
        .navigator {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            padding: 100px 50px;
            
            a {
                button {
                    background: $bg-color;
                    border: none;
                    font-size: 18px;
                    color: $light-color;
                    outline: none;
                    padding: 7px 15px;
                    border-radius: 5px;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                }

                &.nuxt-link-exact-active {
                    button {
                        background: $normal-color;
                        color: $bg-color;
                    }
                }
            }
        }
    }

    @media screen and (max-width: $sp-width) {
        .navigator {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
            padding: 2vw 0 4vw;
            display: flex;
            justify-content: space-evenly;
            background: $bg-color;
            
            a {
                button {
                    background: $bg-color;
                    border: none;
                    font-size: 4vw;
                    color: $light-color;
                    outline: none;
                    padding: 1.5vw 2vw;
                    border-radius: 1vw;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                }

                &.nuxt-link-exact-active {
                    button {
                        background: $normal-color;
                        color: $bg-color;
                    }
                }
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
                    path: '/test_site/top'
                }
            ]
        }
    }
}
</script>