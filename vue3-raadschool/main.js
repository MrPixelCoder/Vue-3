Vue.createApp({
    data() {
      return {
        showModal:true,
        showModal:false,
        removeItemIndex:null,

        // title
        message: 'لیست انجام کارها',

        taskTitle:'',
        taskDesc:'',
        showDesc:true,
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
      // delete just a task from dolist
      deleteEvent(i){
        console.log(i);
        // console.log(this.doList);
        this.doList.splice(i, 1);
        this.removeItemIndex = i ;
        this.showModal = false;
      },
      // delete all task from dolist
      removeAll:function(task){
        this.doList.splice(this.task);
      },
      // cancel clearing
      Cancel() {
        // console.log('CANCEL SUBMIT');
        this.showModal = false;

      },
    }
  }).mount('#app')