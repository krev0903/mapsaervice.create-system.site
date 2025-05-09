<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AreaController;
// use App\Http\controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::middleware('auth')->group(function () {
    Route::get('/areas_edit', [AreaController::class, 'edit'])->name('areas_edit');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/', [AreaController::class, 'index']);
    Route::post('/order',[OrderController::class, 'store'])->middleware('auth')->name('order');
});

Route::get('/', function (){return Inertia::render('Welcome',['pageTitle' => 'ポスティングエリアを選択して下さい',]);});
// Route::get('/areas_edit',function (){return Inertia::render('Components/Area/AreasEdit');});
// Route::middleware(['auth'])->get('/dashboard', [UserController::class, 'index'])->name('dashboard');

Route::get('/dashboard', [OrderController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';