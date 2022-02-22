<template>
    <div class="link_prevue_test">
        <no-ssr>
            <link-prevue url="https://vuejs.org/"></link-prevue>
        </no-ssr>
    </div>
</template>


<script>
import LinkPrevue from 'link-prevue'

export default {
    components: {
        LinkPrevue
    }
}
</script>


<style>
    .link_prevue_test {
        width: 60%;
        margin: 80px auto;
    }
</style>