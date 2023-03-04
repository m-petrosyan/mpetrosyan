export default {
    data() {
        return {
            width: null,
            wClass: ''
        }
    },
    created() {
        this.width = window.innerWidth
        window.addEventListener("resize", this.myEventHandler);
    },
    methods: {
        myEventHandler(e) {
            this.width = e.currentTarget.innerWidth
        }
    },
    watch: {
        width(val) {
            if (val > 1280) {
                this.wClass = 'l'
            } else if (val < 580) {
                this.wClass = 's'
            } else if (val < 860) {
                this.wClass = 'm'
            }
        }
    }
}