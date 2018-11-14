<?php

namespace App\Http\Controllers\Router;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RouterController extends Controller
{
    public function routerHome(){
        return view('router.home');
    }
}
