<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
                    <div class="form-group row">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-model="taskId">
                        <!--↑taskIdをパラメータで受け取り、ID欄にデータを表示-->
                    </div>
                    <div class="form-group row">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control" id="title" v-model="task.title">
                    </div>
                    <div class="form-group row">
                        <label for="content" class="col-sm-3 col-form-label">Content</label>
                        <input type="text" class="col-sm-9 form-control" id="content" v-model="task.content">
                    </div>
                    <div class="form-group row">
                        <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
                        <input type="text" class="col-sm-9 form-control" id="person-in-charge" v-model="task.person_in_charge">
                    </div>
                    <div class="form-group row">
                        <label for="task-date" class="col-sm-3 col-form-label">Task Date</label>
                        <input type="date" class="col-sm-9 form-control" id="task-date" v-model="task.task_date">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            taskId: String 
        },
        data:function(){
            return{
                task:{}
            }
        },
        methods:{
            getTask(){
                axios.get('/api/tasks/' + this.taskId)
                     .then((res) => {
                        this.task=res.data;
                    });
            },
            submit(){
                axios.put('/api/tasks/'  + this.taskId,this.task) //put送信でデータ更新
                     .then((res) => {
                         this.$router.push({name:'task.list'});
                     });
            }
        },
        mounted(){
            this.getTask();
        }
    }
</script>