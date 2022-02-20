<template>
    <div class="audio_alignment">
        <button @click="startRecorder">start</button>
        <button @click="stopRecoder">stop</button>
        <a :href="dl_btn.href" :download="dl_btn.download">download</a>
        {{this.audio_data}}
    </div>
</template>


<style lang="scss">
    .audio_alignment {
        margin-left: 200px;
    }
</style>


<script>
export default {
    data() {
        return {
            sample_rate: 16000,
            audio_data: [],
            buffer_size: 1024,
            dl_btn: {
                href: '',
                download: ''
            },
            recoding: false,
            recorder: null,
            stream: null
        }
    },
    computed: {
    },
    methods: {
        stopRecoder() {
            this.recorder.addEventListener('dataavailable', e => {
                if (e.data.size > 0) {
                    
                    this.audio_data.push(e.data)
                    // let wav_data = this.makeWavData()
                    let obj = new Blob(this.audio_data, {type: 'audio/wav'})
                    this.dl_btn.href = URL.createObjectURL(obj)
                    this.dl_btn.download = 'sample.wav'
                    this.audio_data = []
                }
            })
            this.recorder.stop()
            // this.stream.getTracks().forEach(track => track.stop())
        },
        startRecorder() {
            this.recorder.start()
        },
        makeWavData() {
            this.joinSamples()

            let buffer = new ArrayBuffer(44 + this.audio_data.length * 2)
            let view = new DataView(buffer)

            // ファイルヘッダいじいじ
            this.writeString(view, 0, "RIFF")
            view.setUint32(4, 36 + this.audio_data.length * 2, true)
            this.writeString(view, 8, "WAVE")
            this.writeString(view, 12, "fmt ")
            view.setUint32(16, 16, true)
            view.setUint16(20, 1, true)
            view.setUint16(22, 1, true)
            view.setUint32(24, this.sample_rate, true)
            view.setUint32(28, this.sample_rate * 4, true)
            view.setUint16(32, 4, true)
            view.setUint16(34, 16, true)
            this.writeString(view, 36, "data")
            view.setUint32(40, this.audio_data.length * 2, true)

            this.floatTo16BitPCM(view, 44, this.audio_data)
            console.log(this.audio_data)

            return view
        },
        floatTo16BitPCM(output, offset, input) {
            for (let i = 0; i < input.length; i++, offset += 2) {
                let s = Math.max(-1, Math.min(1, input[i]))
                output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true)
            }
        },
        joinSamples() {
            let recordLength = this.audio_data.length * this.buffer_size
            let joinedSamples = new Float64Array(recordLength)
            let offset = 0

            for (let i = 0; i < this.audio_data.length; i++) {
                let sample = this.audio_data[i]
                joinedSamples.set(sample, offset)
                offset += sample.length
            }

            this.audio_data = joinedSamples
        },
        writeString(view, offset, string) {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i))
            }
        }
    },
    mounted() {
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        }).then(stream => {
            this.stream = stream
            this.recorder = new MediaRecorder(stream, {
                mimeType: 'audio/webm',
                audioBitsPerSecond: this.sample_rate
            })
        })

        
    }
}
</script>