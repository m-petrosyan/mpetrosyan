export default {
    methods: {
        getImg(img) {
            return `url('${'/src/assets/' + this.directory + '/' + img}')`
        },
        checkLength(text, limit = 50) {
            return text.length < limit ? text : text.slice(0, limit) + '...'
        },
    }
}