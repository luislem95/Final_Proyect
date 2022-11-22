<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storages;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

    $products= Product::all();
    return $products;

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
        //
        $products= new Product();
        $url="http://localhost/proyectos/mustang_store/storage/app/";
        $products->name= $request->name;
        $products->author= $request->author;
        $products->description= $request->description;
        $products->img= $request->img;
        //para poder subir una imagen dentro del backend y subir el nombre de la imagencomo una url se usa el codigo siguiente
        //$url1=$request->file('img')->store('public/img');
        //$products->img=$url.$url1;
        $products->link= $request->link;


        $products->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $products= Product::findOrFail($id);
        $url="http://localhost/proyectos/mustang_store/storage/app/";
        $products->name= $request->name;
        $products->author= $request->author;
        $products->description= $request->description;
        $products->img= $request->img;
        //$products->img
        //$url1=$request->file('img')->store('public/img');
        //$products->img=$url.$url1;
        $products->link= $request->link;


       return $products;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

    $products=Product::find($id);
    return $products;
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
        //
        $products= Product::findOrFail($request->id);
        //$url="http://localhost/proyectos/mustang_store/storage/app/";
        $products->name= $request->name;
        $products->author= $request->author;
        $products->description= $request->description;
        $products->img= $request->img;
        $products->link= $request->link;


        $products->save();
        //$products->img
        //$url1=$request->file('img')->store('public/img');
        //$products->img=$url.$url1;


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $products= Product::destroy($id);
        return $products;
    }
}
