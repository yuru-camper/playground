<template>
    <div class="learning_videos_test">
        <div class="head">
            おすすめの学習系動画たち
        </div>
        <div class="videos">
            <a class="video" v-for="(video, i) in videos" :key="i" :href="video.url">
                <img :src="video.img" alt="">
                <div class="info">
                    <div class="title">
                        {{ video.title }}
                    </div>
                    <div class="description pc">
                        {{ video.description }}
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>


<style lang="scss">
@media screen and (min-width: $pc-width) {
    .learning_videos_test {
        width: 60%;
        margin: 80px auto;

        .head {
            font-size: 40px;
            text-align: center;
            letter-spacing: 0.05em;
            margin-bottom: 50px;
        }

        .videos {
            .video {
                display: flex;
                margin-bottom: 30px;
                text-decoration: none;

                img {
                    width: 320px;
                    height: 180px;
                    object-fit: cover;
                }

                .info {
                    color: $normal-color;
                    margin-left: 10px;

                    .title {
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: $sp-width) {
    .learning_videos_test {
        margin: 10vw 5vw;

        .head {
            font-size: 5vw;
            text-align: center;
            letter-spacing: 0.05em;
            margin-bottom: 8vw;
        }

        .videos {
            .video {
                margin-bottom: 5vw;
                text-decoration: none;
                display: block;

                img {
                    width: 90vw;
                    height: calc(90vw / 16 * 9);
                    object-fit: cover;
                }

                .info {
                    color: $normal-color;

                    .title {
                        font-size: 4vw;
                        margin-bottom: 3vw;
                    }
                }
            }
        }
    }
}
</style>


<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            videos: []
        }
    },
    created() {
        videos: {
            const db = firebase.firestore()
            db.collection('videos').get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        this.videos.push(doc.data())
                    });
                })
                .catch((err) => {
                    console.log('Error getting documents =>', err);
                });
        }
    }
}
</script>