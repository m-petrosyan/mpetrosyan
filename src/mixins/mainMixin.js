export default {
    methods: {
        checkLength(text, limit = 50) {
            return text.length < limit ? text : text.slice(0, limit) + '...'
        },
    }
}