Vue.createApp({
    data() {
      return {
        showModal:true,
        message: 'لیست انجام کارها',
        taskTitle:'',
        taskDesc:'',
        showDesc:true,
        removeItemIndex:null,
        doList:[
          {
            title:"انجام یک کار مفید",
            desc:'اضافه کردن توضیحات',
            completed:false,
          },
          {
            title:"ساخت ویدِیو برای یوتویوب",
            desc:'اضافه کردن توضیحات',
            completed:false,
          },
          {
            title:"یادگیری Vue",
            desc:'اضافه کردن توضیحات',
            completed:false,
          },
          {
            title:"به اتمام رساندن کار قبلی",
            desc:'اضافه کردن توضیحات',
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
      addTask(){
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
        this.showModal = false;
      },
      removeAll:function(task){
        this.doList.splice(this.task);
      },
      Cancel() {
        // console.log('CANCEL SUBMIT');
        this.showModal = false;

      },
    }
  }).mount('#app')