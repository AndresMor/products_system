<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $data = Product::with("category")->get();
            $response['data'] = $data;
            $response['success'] =true;
    
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = true;
        }
        
        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{    
            $insert['name'] = $request['name'];
            $insert['price'] = $request['price'];
            $insert['amount'] = $request['amount'];
            $insert['state'] = $request['state'];
            $insert['category_id'] = $request['category'];
            Product::insert($insert);
    
            $response['message'] = "Save succesfull";
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = true;
        }
        
        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try{
            $data = Product::with("category")->find($id);
            
            if($data){
                $response['data'] = $data;
                $response['message'] = "Load succesfull";
                $response['success'] = true;

            }else{
                $response['data'] = null;
                $response['message'] = "Not found data id => $id";
                $response['success'] = false;
            }

        }catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = true;
        }
        
        return $response;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $data['name'] = $request['name'];
            $data['price'] = $request['price'];
            $data['amount'] = $request['amount'];
            $data['state'] = $request['state'];
            $data['category_id'] = $request['category'];

            Product::where("id",$id)->update($data);
            $response['message'] = "Updated succesfull";
            $response['success'] = true;

        }catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = true;
        }
        
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $res = Product::where("id",$id)->delete();
            $response['res'] = $res;
            $response['message'] = "Deleted successful";
            $response['success'] = true; 

        }catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = true;
        }
        
        return $response;
    }
}
