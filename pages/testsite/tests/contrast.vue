<template>
    <div class="contrast" :style="{color: '#' + this.hex.text, background: '#' + this.hex.back}">
        <div class="texts">
            <div class="title">
                背景と文字の色を変えて見比べる
            </div>
            <div class="random">
                また東寺のように五大明王と呼ばれる主要な明王の中央に配されることも多い。
                ニューイングランド風は牛乳をベースとした白いクリームスープでありボストンクラムチャウダーとも呼ばれる。
                コンピュータゲームのメーカーや業界団体などに関連する人物のカテゴリ。
                サービスマネージャー導入駅のため大井町駅から遠隔監視している。
                シルバーサーファー襲撃事件までにリチャーズはチーム名と共に国際的にスーパーヒーローおよび有名人として認知されている。
            </div>
            <div class="title">
                Attention Is All You Need
            </div>
            <div class="random">
                The dominant sequence transduction models are based on complex recurrent or
                convolutional neural networks that include an encoder and a decoder. The best
                performing models also connect the encoder and decoder through an attention
                mechanism. We propose a new simple network architecture, the Transformer,
                based solely on attention mechanisms, dispensing with recurrence and convolutions
                entirely. Experiments on two machine translation tasks show these models to
                be superior in quality while being more parallelizable and requiring significantly
                less time to train. Our model achieves 28.4 BLEU on the WMT 2014 Englishto-German translation task, improving over the existing best results, including
                ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task,
                our model establishes a new single-model state-of-the-art BLEU score of 41.8 after
                training for 3.5 days on eight GPUs, a small fraction of the training costs of the
                best models from the literature. We show that the Transformer generalizes well to
                other tasks by applying it successfully to English constituency parsing both with
                large and limited training data.
            </div>
        </div>
        <div class="objects">
            <div class="text input_wrapper">
                <div class="obj_name">text</div>
                <div class="hex">
                    <span>#</span>
                    <input type="text" id="text" :value="this.hex.text" @input="convert('hex', 'text')">
                </div>
                <div class="rgb color_space">
                    <div class="color">
                        <div class="name">r</div>
                        <input type="range" min="0" max="255" v-model="rgb.text.r" @input="convert('rgb', 'text')">
                        <div class="value">{{ rgb.text.r }}</div>
                    </div>
                    <div class="color">
                        <div class="name">g</div>
                        <input type="range" min="0" max="255" v-model="rgb.text.g" @input="convert('rgb', 'text')">
                        <div class="value">{{ rgb.text.g }}</div>
                    </div>
                    <div class="color">
                        <div class="name">b</div>
                        <input type="range" min="0" max="255" v-model="rgb.text.b" @input="convert('rgb', 'text')">
                        <div class="value">{{ rgb.text.b }}</div>
                    </div>
                </div>
                <div class="hsv color_space">
                    <div class="color">
                        <div class="name">h</div>
                        <input type="range" min="0" max="360" v-model="hsv.text.h" @input="convert('hsv', 'text')">
                        <div class="value">{{ hsv.text.h }}</div>
                    </div>
                    <div class="color">
                        <div class="name">s</div>
                        <input type="range" min="0" max="100" v-model="hsv.text.s" @input="convert('hsv', 'text')">
                        <div class="value">{{ hsv.text.s / 100 }}</div>
                    </div>
                    <div class="color">
                        <div class="name">v</div>
                        <input type="range" min="0" max="100" v-model="hsv.text.v" @input="convert('hsv', 'text')">
                        <div class="value">{{ hsv.text.v / 100 }}</div>
                    </div>
                </div>
            </div>
            <div class="back input_wrapper">
                <div class="obj_name">background</div>
                <div class="hex">
                    <span>#</span>
                    <input type="text" id="back" :value="this.hex.back" @input="convert('hex', 'back')">
                </div>
                <div class="rgb color_space">
                    <div class="color">
                        <div class="name">r</div>
                        <input type="range" min="0" max="255" v-model="rgb.back.r" @input="convert('rgb', 'back')">
                        <div class="value">{{ rgb.back.r }}</div>
                    </div>
                    <div class="color">
                        <div class="name">g</div>
                        <input type="range" min="0" max="255" v-model="rgb.back.g" @input="convert('rgb', 'back')">
                        <div class="value">{{ rgb.back.g }}</div>
                    </div>
                    <div class="color">
                        <div class="name">b</div>
                        <input type="range" min="0" max="255" v-model="rgb.back.b" @input="convert('rgb', 'back')">
                        <div class="value">{{ rgb.back.b }}</div>
                    </div>
                </div>
                <div class="hsv color_space">
                    <div class="color">
                        <div class="name">h</div>
                        <input type="range" min="0" max="360" v-model="hsv.back.h" @input="convert('hsv', 'back')">
                        <div class="value">{{ hsv.back.h }}</div>
                    </div>
                    <div class="color">
                        <div class="name">s</div>
                        <input type="range" min="0" max="100" v-model="hsv.back.s" @input="convert('hsv', 'back')">
                        <div class="value">{{ hsv.back.s / 100 }}</div>
                    </div>
                    <div class="color">
                        <div class="name">v</div>
                        <input type="range" min="0" max="100" v-model="hsv.back.v" @input="convert('hsv', 'back')">
                        <div class="value">{{ hsv.back.v / 100 }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.contrast {
    padding-top: 100px;
    height: 100vh;

    .texts {
        margin-left: 300px;
        width: calc(100vw - 300px * 2);
        margin-bottom: 80px;
        letter-spacing: 0.04em;
        line-height: 1.5;

        .title {
            font-size: 30px;
            margin-bottom: 10px;
        } 

        .random {
            font-size: 16px;
            margin-bottom: 40px;
        }
    }

    .objects {
        display: flex;
        margin-left: 300px;
    }

    .input_wrapper {

        .obj_name {
            width: 500px;
            font-size: 22px;
            text-transform: capitalize;
            margin-bottom: 10px;
        }

        .hex {
            margin: 0 0 20px 9px;
            span {
                font-size: 20px;
            }
            input {
                font-size: 20px;
                letter-spacing: 0.04em;
                text-transform: uppercase;
                margin-left: 12px;
                width: 120px;
                padding: 4px 10px 3px;
                text-align: center;
                border-radius: 5px;
            }
        }

        .color_space {
            width: 250px;
            margin: 0 0 50px;

            .color {
                display: flex;
                margin-bottom: 10px;
                text-align: center;

                .name {
                    margin-right: 10px;
                    width: 30px;
                    font-size: 20px;
                    text-transform: uppercase;
                }

                .value {
                    margin-left: 10px;
                    font-size: 20px;
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
            rgb: {
                text: {r: 255, g: 255, b: 255},
                back: {r: 34, g: 34, b: 34}
            },
            hsv: {
                text: {h: 0, s: 0, v: 100},
                back: {h: 0, s: 0, v: 13}
            },
            hex: {
                text: 'ffffff',
                back: '222222'
            }
        }
    },
    methods: {
        convert(color_space, obj) {
            switch(color_space) {
                case 'rgb':
                    this.rgb2hsv(obj)
                    this.rgb2hex(obj)
                break

                case 'hsv':
                    this.hsv2rgb(obj)
                    this.rgb2hex(obj)
                break

                case 'hex':
                    this.hex2rgb(obj)
                    this.rgb2hsv(obj)
                break
            }
        },
        rgb2hsv(obj) {
            let r = this.rgb[obj].r / 255
            let g = this.rgb[obj].g / 255
            let b = this.rgb[obj].b / 255

            if (!(r + g + b)) {
                this.hsv[obj].h = 0
                this.hsv[obj].s = 0
                this.hsv[obj].v = 0
                return;
            }

            let max = Math.max(r, g, b)
            let min = Math.min(r, g, b)
            let diff = max - min

            let h = 0

            switch(max) {
                case min:
                    h = 0
                break
                
                case r:
                    h = (60 * ((g - b) / diff))
                break

                case g:
                    h = (60 * ((b - r) / diff)) + 120
                break

                case b:
                    h = (60 * ((r - g) / diff)) + 240
                break
            }

            if (h < 0) {
                h += 360
            }

            let s = diff / max
            let v = max

            this.hsv[obj].h = Math.round(h)
            this.hsv[obj].s = Math.round(s * 100)
            this.hsv[obj].v = Math.round(v * 100)
        },
        hsv2rgb(obj) {
            let h = this.hsv[obj].h
            let s = this.hsv[obj].s * 255 / 100
            let v = this.hsv[obj].v * 255 / 100

            let max = v
            let min = max - (s / 255) * max

            let rgb = {r: 0, g: 0, b: 0}
            switch(h / 60 | 0) {
                case 0:
                    rgb.r = max
                    rgb.g = (h / 60) * (max - min) + min
                    rgb.b = min
                break

                case 1:
                    rgb.r = ((120 - h) / 60) * (max - min) + min
                    rgb.g = max
                    rgb.b = min
                break

                case 2:
                    rgb.r = min
                    rgb.g = max
                    rgb.b = ((h - 120) / 60) * (max - min) + min
                break

                case 3:
                    rgb.r = min
                    rgb.g = ((240 - h) / 60) * (max - min) + min
                    rgb.b = max
                break

                case 4:
                    rgb.r = ((h - 240) / 60) * (max - min) + min
                    rgb.g = min
                    rgb.b = max
                break

                case 5:
                case 6:
                    rgb.r = max
                    rgb.g = min
                    rgb.b = ((360 - h) / 60) * (max - min) + min
                break
            }

            this.rgb[obj].r = Math.round(rgb.r)
            this.rgb[obj].g = Math.round(rgb.g)
            this.rgb[obj].b = Math.round(rgb.b)
        },
        rgb2hex(obj) {
            let rgb = [this.rgb[obj].r, this.rgb[obj].g, this.rgb[obj].b]
            this.hex[obj] = rgb.map((value) => {
                return ('0' + parseInt(value).toString(16)).slice(-2)
            }).join('')
        },
        hex2rgb(obj) {
            this.hex[obj] = document.getElementById(obj).value
            let hex = this.hex[obj]

            if (hex.length == 3) {
                hex = hex.slice(0,1) + hex.slice(0,1) + hex.slice(1,2) + hex.slice(1,2) + hex.slice(2,3) + hex.slice(2,3)
            }

            if (hex.length == 6) {
                let rgb = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(str => {
                    return parseInt(str, 16)
                })

                this.rgb[obj] = {r: rgb[0], g: rgb[1], b: rgb[2]}
            }
        }
    }
}
</script>