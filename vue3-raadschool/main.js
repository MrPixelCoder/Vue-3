Vue.createApp({
    data() {
      return {
        showModal:true,
        message: 'لیست انجام کارها',
        taskTitle:'',
        taskDesc:'',
        showDesc:true,
        doList:[
          {
            title:"Lorem, ipsum.",
            desc:'some description 1',
            completed:false,
          },
          {
            title:"Lorem, ipsum dolor.",
            desc:'some description 3',
            completed:false,
          },
          {
            title:"Lorem, ipsum dolor 4. ",
            desc:'some description 4',
            completed:true,
          },
          {
            title:"as4df6 Lorem, ipsum.",
            desc:'some description f',
            completed:false,
          },
        ]
      }
    },
    methods:{
      // add typed title to dolist
      addTask(e){
        e.preventDefault();
        if(this.taskTitle.length > 0) {
          // task var
          var task = {
            title:this.taskTitle,
            desc:this.taskDesc,
            completed:false,
          }
          // add task to doList array
          this.doList.unshift(task)
          // reset taskTitle value
          this.taskTitle = ''
          this.taskDesc = ''
        }
      },
      removeItem(){
        // console.log('remove item');
      },
      Cancel() {
        // console.log('CANCEL SUBMIT');
        this.showModal = false;
        this.$router.push({ d: 'users' });
      },
    }
  }).mount('#app')