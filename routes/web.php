<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/user', function () {
    return view('user');
})->middleware('auth');

Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

// Route::view('/{path?}', 'main');
// Route::get( '/{path?}', function(){
//     return view( 'view' );
// } )->where('path', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => ['auth','admin']],function(){
    Route::get('/{path?}', function () {
        return view('main');
    })->where('path', '.*');
});


