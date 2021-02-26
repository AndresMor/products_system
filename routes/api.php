<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/product','ProductController@index');
Route::post('/product/create',"ProductController@store");
Route::get('/product/edit/{id}',"ProductController@edit");
Route::put('/product/update/{id}',"ProductController@update");
Route::delete('/product/delete/{id}',"ProductController@destroy");

Route::post('/category','CategoryController@store');
Route::get('/category/index','CategoryController@index');

