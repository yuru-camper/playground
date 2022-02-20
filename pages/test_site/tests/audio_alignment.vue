<template>
    <div class="audio_alignment">
        <button @click="fft">fft</button>
        <svg
        ref="scope"
        :width="size.width"
        :height="size.height"
        xmlns="http://www.w3.org/2000/svg"
        baseProfile="full"
        >
            <rect x="0" y="0" :width="size.width" :height="size.height" fill="#fff" />
            <!-- 線の太さ、色はあらかじめセットしておく -->
            <path :d="svg.path" stroke="#00F23E" stroke-width="3" fill="none"></path>
        </svg>
        <a :href="download_btn.href" :download="download_btn.download">download</a>
    </div>
</template>


<style lang="scss">
    .audio_alignment {
        margin-left: 200px;
    }
</style>


<script>
import fft from 'fft-js'
import fftUtil from 'fft-js'

export default {
    data() {
        return {
            fft_data: [],
            context: null,
            analyser: null,
            data: null,
            svg: {
                path: 'M'
            },
            size: {
                width: 1000,
                height: 500
            },
            i: 0,
            source_sound_length: 2**12,
            buffer_length: 10,
            download_btn: {
                href: '',
                download: ''
            },
            recoding: false
        }
    },
    computed: {
    },
    methods: {
        fft() {
            this.context = new AudioContext();
            this.analyser = this.context.createAnalyser();

            //マイクの音を取得
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then((stream) => {
                    let source = this.context.createMediaStreamSource(stream);
                    // オーディオの出力先を設定
                    source.connect(this.analyser);
                })
                .catch(function (err) {
                    console.log('err', err);
                });

            this.getData();
        },
        getData(){
            let data = new Float32Array(this.buffer_length)
            // get waveform
            this.analyser.getFloatTimeDomainData(data)

            let d = ''
            data.forEach((y, i) => {
                const x = (i + this.buffer_length * this.i) * (this.size.width / this.source_sound_length)
                d += `${x} ${y * 100 + 100},`
                this.fft_data.push(y)
            })
            this.i += 1
            this.svg.path += d
            
            // animation
            if (this.i < this.source_sound_length / this.buffer_length) {
                requestAnimationFrame(this.getData);
            } else if (this.i >= this.source_sound_length / this.buffer_length) {
                this.download_btn.href = URL.createObjectURL(new Blob(this.fft_data, {type: 'audio/wav'}))
                this.download_btn.download = 'sample.wav'
                console.log(this.fft_data)
                this.context.close()
            }
        },
        saveAudio() {

        }
    }
}
</script>