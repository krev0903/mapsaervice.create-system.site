<?php

namespace App\Http\Controllers;

use App\Models\Area;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AreaController extends Controller
{
    public function index(Request $request)
    {
        $areaName = trim($request->input('Areas'));

        // エリア名を使ってデータベースを検索
        $areaPrice = Area::where('area_name', $areaName)->first();

        if ($areaPrice) {
            return response()->json(['price' => $areaPrice->price]);
        } else {
            \Log::error("エリア名が見つかりませんでした: " . $areaName);
            return response()->json(['error' => '指定されたエリア名は存在しません'], 404);
        }
    }

    public function edit ()
    {
        $areas = Area::all();
        return inertia::render('Components/Area/AreasEdit',[
            'areas' => $areas,
            'pageTitle' => 'エリア編集'
        ]);
    }
}