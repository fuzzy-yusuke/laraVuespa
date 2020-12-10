<template>
    <div class="container">
        <div class="row justify-content-center">
            <form v-on:submit.prevent="submit">
            <!--フォーム送信時にsubmitメソッドが呼び出されることで、API送信される-->
                <div class="form-group row">
                    <!--taskデータとバイディングさせ、フォームにデータが入力されると下記のtaskデータが更新される-->
                    <label for="title" class="col-sm-3 col-form-label">Title</label>
                    <input type="text" class="col-sm-9 form-control" id="title" v-model="task.title">
                </div>
                <div class="form-group row">
                    <label for="person-in-charge" class="col-sm-3 col-form-label">Content</label>
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
</template>

<script>
export default {
    data:function(){
        return{
            task:{}
        }
    },
    methods:{
        submit(){
            axios.post('/api/tasks',this.task)              //taskデータを登録APIにPOST送信する
                .then((res) => {
                    this.$router.push({name:'task.list'});  //登録完了後、一覧ページへリダイレクト
                });
        }
    }
}
</script>