<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Laravel\Ui\Presets\React;

class TaskController extends Controller
{
    //一覧表示
    public function index(){
        return Task::all();
    }

    //詳細ページ
    public function show(Task $task){
        return $task;           //Laravelが勝手にjson形式のレスポンスを返してくる
    }

    //新規登録
    public function store(Request $request){
        return Task::create($request->all());
    }

    //更新
    public function update(Request $request,Task $task){
        $task->update($request->all());
        return $task;
    }

    //削除
    public function destroy(Task $task){
        $task->delete();
        return $task;
    }
}
