const app = {
    data() {
        return {
            header: 'Photo Gallery',

            tasks: [{image: 'images/img1.png',name: 'photo 1',done: false,
            location:'Location: Naverius'},
            {image: 'images/img2.png',name: 'photo 2' ,done: false,
            location:'Location: Wopal'},
            {image: 'images/img3.png',name: 'photo 3' ,done: false,
            location:'Location: Coast'},
            {image: 'images/img4.png',name: 'photo 4' ,done: false,
            location:'Location: Coast'},
            {image: 'images/img5.png',name: 'photo 5' ,done: false,
            location:'Location: Personal quarter'}],

        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countUndone(){
            return this.tasks.filter( t => !t.done ).length
        }
    }

}
Vue.createApp(app).mount('#app')