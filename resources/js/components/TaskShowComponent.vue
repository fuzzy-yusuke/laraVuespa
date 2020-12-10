<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form>
                    <!--以下、入力して受け取ったそれぞれのデータを「v-model」でVueインスタンスに連動させて表示-->
                    <div class="form-group row border-bottom">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-model="taskId">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="title" v-model="task.title">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="content" class="col-sm-3 col-form-label">content</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="content" v-model="task.content">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="person-in-charge" v-model="task.person_in_charge">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="task-date" class="col-sm-3 col-form-label">Task Date</label>
                        <input type="date" class="col-sm-9 form-control-plaintext" readonly id="task-date" v-model="task.task_date">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        taskId: String //taskIdをURLパラメータとして受け取る
    },
    data: function{
        return{
            task:{}
        }
    },
    methods:{
        getTask(){      //getTask()でAPIからタスクデータを取得
            axios.get('/api/tasks/'+this.taskId)
                 .then((res) => {
                     this.task=res.data;
                 });
        }
    },
    mounted(){
        this.getTask(); //画面が表示される時にメソッドが呼び出される
    }
}
</script>