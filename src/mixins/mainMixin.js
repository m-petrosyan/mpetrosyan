export default {
    props: {
        wClass: String
    },
    methods: {
        getImg(img) {
            return `url('${'src/assets/images/' + this.directory + '/' + img}')`
        },
        checkLength(text, limit = 50) {
            return text.length < limit ? text : text.slice(0, limit) + '...'
        },
    }
}