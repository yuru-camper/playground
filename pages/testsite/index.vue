<template>
    <div class="test_site">
        <div class="head">
            実験場
        </div>

        <div class="tests">
            <div class="test" v-for="(test, i) in tests" :key="i">
                <nuxt-link :to="'/testsite/tests/' + test.path">
                    <button>
                        {{ test.name }}
                        <!-- <img src="http://img.youtube.com/vi/x2tmrynUa8U/0.jpg" alt=""> -->
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@media screen and (min-width: $pc-width) {
    .test_site {
        width: 60%;
        margin: 80px auto;

        .head {
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            letter-spacing: 0.07em;
        }

        .tests {
            margin: 50px 0;
            .test {
                margin-bottom: 20px;
                button {
                    background: none;
                    outline: none;
                    border: none;
                    color: $link-color;
                    font-size: 18px;
                    cursor: pointer;
                }
            }
        }
    }
}

@media screen and (max-width: $sp-width) {
    .test_site {
        margin: 10vw 5vw;

        .head {
            font-size: 4.5vw;
            font-weight: bold;
            text-align: center;
            letter-spacing: 0.07em;
        }

        .tests {
            margin: 8vw 0;
            .test {
                margin-bottom: 5vw;
                button {
                    background: none;
                    outline: none;
                    border: none;
                    color: $link-color;
                    font-size: 4vw;
                    cursor: pointer;
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
            tests: [
                {
                    name: 'メールアドレスでサインイン',
                    path: 'sign_in_test'
                },
                {
                    name: 'リンクのプレビュー',
                    path: 'link_prevue_test'
                },
                {
                    name: '学習動画の実験',
                    path: 'learning_videos_test'
                },
                {
                    name: '文字色と背景色のコントラスト',
                    path: 'contrast'
                },
                {
                    name: '音声コーパスを作ろう',
                    path: 'audio_alignment'
                }
            ]
        }
    }
}
</script>