<?php

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

Route::get('/', function () {
    return view('home');
});

Route::group(['middleware' => ['web', 'auth']], function () {
    Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/router/home', 'Router\RouterController@routerHome')->name('router.home');
    Route::resource('users', 'User\UserController');
    Route::resource('api/users', 'Api\UserController');
});

Auth::routes();

