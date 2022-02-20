<template>
    <div class="panbon">
        <script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
        <div class="pageTitle">
            <h1>PanBons</h1>
            <h2>〜これはパンダですか？<br class="sp">　いいえ、テナガザルです〜</h2>
            <p>
                PanBonsは、気難しいAIさんのお気持ちを読み取って、優れたスコアを目指すゲームです
            </p>
            <div class="infoWrapper">
                <nuxt-link to="/panbons/rule">遊び方</nuxt-link>
            </div>
        </div>
        <div class="loading" v-show="loading">
            <p>Loading...</p>
        </div>
        <main>
            <div class="imgWrapper">
                <div class="text">この画像はなに？</div>
                <img src="@/assets/imgs/panda.jpeg" alt="" id="inputImg">
            </div>
            <div class="answers">
                <div class="item" v-for="(answer, i) in answers" :key="i">
                    <input type="text" v-model="answers[i]['answer']" @focus="answer['focus'] = true" :disabled="answer['rank'] != '-'">
                    <div class="info">
                        <div class="rank">
                            予測順位：{{ answer['rank'] }} <span>/ 1000位</span>
                        </div>
                        <div class="confidence">
                            スコア：{{ answer['confidence'] }}<span>点</span>
                        </div>
                    </div>
                    <div class="autocomps" :class="{display: answer['focus']}">
                        <div class="ac_item" v-for="(al, j) in autocomp_list[i]" :key="`ac-${j}`" @click="autoCompItemClick(al[0], i), answer['focus'] = false">
                            {{al[0] + ' (' + al[1] + ')'}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="totalScore">
                合計スコア：<span>{{ totalScore }}</span>
            </div>
            <div class="comment">
                {{ comment }}
            </div>
        </main>
    </div>
</template>


<script>
import { CoolSelect } from "vue-cool-select";

export default {
    // https://gist.github.com/PonDad/4dcb4b242b9358e524b4ddecbee385e9
    layout: 'panBonLayout',
    components: {
        CoolSelect
    },
    data() {
        return {
            loading: true,
            pred_labels: null,
            answers: [
                {answer: '', rank: '-', confidence: '-', focus: false},
                {answer: '', rank: '-', confidence: '-', focus: false},
                {answer: '', rank: '-', confidence: '-', focus: false},
                {answer: '', rank: '-', confidence: '-', focus: false},
                {answer: '', rank: '-', confidence: '-', focus: false},
            ],
            fitness: 0,
            classes: require('@/assets/panbon/class_with_yomigana.json')
        }
    },
    computed: {
        autocomp_list() {
            const l = [
                this.getAutoCompList(this.answers[0]['answer']),
                this.getAutoCompList(this.answers[1]['answer']),
                this.getAutoCompList(this.answers[2]['answer']),
                this.getAutoCompList(this.answers[3]['answer']),
                this.getAutoCompList(this.answers[4]['answer']),
            ]
            return l
        },
        totalScore() {
            let ts = 0
            for (let a of this.answers) {
                if (a['confidence'] !=='-') {
                    ts += a['confidence']
                }
            }
            return Math.round(ts)
        },
        comment() {
            let comment = ''
            if (this.totalScore < 50) {
                comment =  'YOU ARE A HUMAN. そのままのあなたも素晴らしい'
            } else if (this.totalScore < 95 && this.totalScore >= 50) {
                comment =  'YOU ARE A PERFECT HUMAN. いつもありがとう'
            } else if (this.totalScore < 100 && this.totalScore >= 95) {
                comment =  'YOU ARE A ROBOT. こんなところに逸材が！'
            } else if (this.totalScore >= 100) {
                comment =  'YOU ARE A PERFECT ROBOT. これからの時代はあなたの時代です。きっと活躍できるでしょう！'
            }

            const checkAnswered = this.answers.filter(item => item['rank'] == '-')
            if (checkAnswered.length > 0) {
                return ''
            } else {
                return comment
            }
        }
    },
    methods: {
        // 解答確定ボタンを押した時
        confirmAnswer(answer, index) {
            console.log(answer, index)
            const en_ans = this.classes.filter(item => item['ja'] == answer)[0]['en']
            const en_label = this.pred_labels.map(el => {
                return el['label'].split(',')[0].replace(/ /g, '_')
            })
            const rank = en_label.findIndex(el => el == en_ans)
            const conf = this.pred_labels[rank]['confidence']

            this.$set(this.answers[index], 'rank', rank + 1)
            this.$set(this.answers[index], 'confidence', Math.round(conf * 10000) / 100 * (rank + 1))
        },
        // 解答入力中に解答の候補を得る
        getAutoCompList(answer) {
            let al = this.classes.filter(item => {
                return item['yomigana'].includes(answer)
            })
            al = al.map(item => {
                return [item['ja'], item['yomigana']]
            })
            return al
        },
        // 解答候補をクリックすると、解答が入力される
        autoCompItemClick(ac_item, index) {
            this.$set(this.answers[index], 'answer', ac_item)
            this.confirmAnswer(ac_item, index)
        },
        // isButtonDisable(autocomp_list, answer) {
        //     return (autocomp_list.length == 0 && answer['autocomp_clicked']) ? false : true
        // },
    },
    mounted() {
        console.log('_' == '_')
        const options = {
            version: 1,
            alpha: 1.0,
            topk: 1000,
        }
        const img = document.getElementById("inputImg");
        ml5
            .imageClassifier('MobileNet', options)
            .then(classifier => classifier.predict(img))
            .then(results => {
                this.pred_labels = results
                this.loading = false
            })
    }
}
</script>


<style scoped lang="scss">
.pageTitle {
    h1 {
        font-size: 50px;
    }

    .infoWrapper {
        text-align: center;
        margin-top: 10px;

        a {
            color: #fff;
            font-size: 20px;
        }
    }
}
.loading {
    width: 100vw;
    height: 100vh;
    background: $bg-color;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;

    p {
        color: #fff;
        font-size: 20px;
        display: inline;
        margin-bottom: 100px;
    }
}

.imgWrapper {
    .text {
        font-size: 18px;
        text-align: center;
        margin-bottom: 10px;
    }
}
.autocomps {
    max-height: 160px;
    overflow-y: scroll;
    width: 100%;
    position: absolute;
    top: 40px;
    background: #fff;
    z-index: 999;
    border-radius: 8px;
    border: solid 1px #000;
    display: none;

    .ac_item {
        color: black;
        margin-top: 5px;
        padding: 5px 10px;

        &.first-child {
            padding-top: 10px;
        }
    }

    &.display {
        display: block;
    }
}

.totalScore {
    font-size: 25px;
    font-weight: bold;
    margin-top: 50px;
}

.comment {
    margin: 10px 0 150px;
}
@media screen and (max-width: 768px) {
    .panbon {
        margin: 50px 4vw 0;
        .pageTitle {
            margin-bottom: 50px;
            h2 {
                font-size: 25px;
                margin-top: 5px;
            }

            p {
                margin-top: 20px;
            }
        }

        main {
            .imgWrapper {
                margin-bottom: 50px;
                img {
                    width: 100%;
                }
            }

            .answers {
                .item {
                    position: relative;
                    margin-bottom: 30px;
                    input {
                        font-size: 18px;
                        width: 100%;
                        padding: 8px;
                    }

                    .info {
                        display: flex;
                        font-size: 16px;
                        margin-top: 8px;

                        .rank {
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .panbon {
        margin: 50px 4vw 0;
        .pageTitle {
            margin-bottom: 50px;
            h2 {
                font-size: 25px;
                margin-top: 5px;
            }

            p {
                margin-top: 20px;
            }
        }

        main {
            max-width: 700px;
            margin: auto;
            
            .imgWrapper {
                margin-bottom: 50px;
                img {
                    width: 100%;
                }
            }

            .answers {
                .item {
                    position: relative;
                    margin-bottom: 30px;
                    input {
                        font-size: 18px;
                        width: 100%;
                        padding: 8px;
                    }

                    .info {
                        display: flex;
                        font-size: 16px;
                        margin-top: 8px;

                        .rank {
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>