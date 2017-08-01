<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
  public function uploadImage(Request $request, $type, $type_id)
  {
    $imageName = $type_id . '.' .
      $request->file('image')->guessClientExtension();

    $path=$request->file('image')->storeAs("public/images/$type", $imageName);


    // update if row exists, create if none
      File::updateOrCreate([
        'type' => $type,
        'type_id' => $type_id,
        'url' => Storage::url($path),
      ]);

    return 'ok';
  }
}
