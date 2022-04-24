Vue.createApp({
    data() {
        return {
            count:0,
            showModal:false,
            showAlert:false,
        }
    },
    methods: {
        plus() {
            this.count++
        },
        minus() {
            this.count--
            this.abs--
        },
        ShowModal() {
            this.showModal = true
        },
    },
    computed: {
        total() {
            return Math.abs(this.count) * 1000 * 1.09
        }
    },
    watch: {
        total(newVal, oldVal) {
            if (newVal > 2000) {
                this.showAlert = true;
                this.showModal = true;
            } 
            if (newVal < 2000) {
                this.showAlert = false;
            }
        },
    }
}).mount('#app')
