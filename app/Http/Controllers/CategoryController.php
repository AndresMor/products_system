<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{

    public function index()
    {
        $data = Category::get();
        $response['data'] = $data;
        $response['success'] =true;

        return $response;
    }

    public function store(Request $request)
    {
        try{
            $insert['name'] = $request['name'];
            Category::insert($insert);
    
            $response['message'] = "Save succesful";
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = true;
        }
        
        return $response;
    }
}
