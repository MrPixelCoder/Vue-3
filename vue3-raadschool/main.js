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
        ],
        task : {
          title: '', description:'',
        },
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
      deleteEvent: function(index){
        console.log(index);
        console.log(this.doList);
        this.doList.splice(index, 1);
      },
      removeAll:function(task){
        this.doList.splice(this.task);
      },
      Cancel() {
        // console.log('CANCEL SUBMIT');
        this.showModal = false;
        this.$router.push({ d: 'users' });
      },
    }
  }).mount('#app')