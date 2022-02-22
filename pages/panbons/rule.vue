<template>
    <div class="rule">
        <h1>PanBonsの遊び方</h1>
        <div class="container">
            <div class="title">
                楽しみ方
            </div>
            <div class="text">
                <p>PanBonsで使用しているAIは、ImageNet1Kと呼ばれるデータセットで学習されています。</p>
                <p>ImageNet1Kは1000クラスも分類がある非常に大規模なものですが、意外と身近なものが存在していません。</p>
                <p>例えば、「赤ブレストアイサ属のガモ」というやけに詳しい分類はありますが、「ティッシュ」はありません。</p>
                <p>そのため、もしティッシュの画像を分類しなければいけなくなった時、AIはティッシュが含まれていない1000個のクラスのいずれかに分類します。</p>
                <p>また、人とAIでは画像の見方に乖離があるため、人にはパンダに見えてもAIにはテナガザルに見える、といったことも起こります</p>
                <p>（表題は<a href="https://arxiv.org/abs/1412.6572">Adversarial Examples</a>という有名な論文のパロディですが、今回指しているものとは正確には異なります。）</p>
                <p>そこでPanBonsでは、AIによる分類を人間が推測して楽しむ、というゲームになっております。</p>
            </div>
        </div>
        <div class="container">
            <div class="title">ルール</div>
            <div class="text">
                <p>・入力欄に「AIが分類しそうなクラス」を入力します。</p>
                <p>・必ず「ひらがな」で入力してください。</p>
                <p>・入力はひらがなで行い、出てきた候補をクリックすることで選択が確定し、AIによる予測順位とスコアが出ます。</p>
                <p>・予測順位は、予測の確信度が上から何番目かをあらわし、スコアは確信度によって算出されます。</p>
                <p>・5回分のスコアの合計をできる限り大きくして、AIへの適合度を高めていきましょう。</p>
            </div>
        </div>
        <div class="container">
            <div class="title">クラス一覧</div>
            <div class="text">
                <p>
                    日本語のクラスには<a href="https://gist.github.com/PonDad/4dcb4b242b9358e524b4ddecbee385e9">こちら</a>を使用させていただきました。
                </p>
                <p>また、漢字の読み仮名はPyKakasiを使用させていただきました。</p>
                <p>（読み仮名を自動で決定しているので、「発射体」→「はっしゃからだ」などの読み違えがありますがご了承ください）</p>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
a {
    color: #fff;
}

@media screen and (max-width: 768px) {
    .rule {
        margin: 50px 4vw;

        h1 {
            margin-bottom: 40px;
        }

        .container {
            margin-bottom: 80px;

            .title {
                font-size: 25px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .text {
                font-size: 16px;

                p {
                    line-height: 1.5;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .rule {
        margin: 50px 4vw;

        h1 {
            margin-bottom: 40px;
        }

        .container {
            margin-bottom: 80px;

            .title {
                font-size: 25px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .text {
                font-size: 16px;

                p {
                    line-height: 1.5;
                }
            }
        }
    }
}
</style>


<script>
export default {
    layout: 'panBonLayout'
}
</script>