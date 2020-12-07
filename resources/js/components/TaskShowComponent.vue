<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form>
                    <div class="form-group row border-bottom">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-bind:value="taskId">
                        <!--受け取ったtaskIdを「v-bind:value="taskId"」で動的に表示-->
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="title" value="title title">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="content" class="col-sm-3 col-form-label">content</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="content" value="content content">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="person-in-charge" value="Ichiro">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="task-date" class="col-sm-3 col-form-label">Task Date</label>
                        <input type="date" class="col-sm-9 form-control-plaintext" readonly id="task-date" value="2020-12-14">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        taskId: String //taskIdをURLパラメータとして受け取る
    }
}
</script>