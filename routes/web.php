<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', function () {
    return view('app');
}) -> where ('any','.*');                               //初回アクセス時はLaravel側でリクエストを受け取る
Route::get('/tasks','TaskController@index');            //一覧表示
Route::get('/tasks','TaskController@store');            //新規登録(データ追加だけどpost通信を使ってみる？)
Route::get('/tasks/{task}','TaskController@show');      //詳細ページ
Route::put('/tasks/{task}','TaskController@update');    //更新(リソースの更新の為、put通信を用いる)
Route::delete('/tasks/{task}','TaskController@destroy');//削除