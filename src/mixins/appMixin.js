export default {
    created() {
        this.width = window.innerWidth
        window.addEventListener("resize", this.myEventHandler);
    },
    methods: {
        myEventHandler(e) {
            this.width = e.currentTarget.innerWidth
        }
    },
}