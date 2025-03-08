<?php

namespace App\Http\Controllers;

use App\Models\LGUProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LGUProfileController extends Controller
{
    public function index()
    {
        $res = LGUProfile::get();
        return response()->json([
            'response' => $res,
        ], 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->all();
        $url = null;

        if ($request->hasFile('logo')) {
            $image = $request->file('logo');
            $path = $image->store('thesis', 's3');
            $url = Storage::disk('s3')->url($path);
        }

        LGUProfile::updateOrCreate(
            ['lgu_user_id' => $validatedData['lgu_user_id']],
            array_merge($validatedData, ['logo' => $url])
        );

        return response()->json([
            'status' => 'success',
        ], 200);
    }


    public function show($id)
    {
        $res = LGUProfile::where('lgu_user_id', $id)->first();
        return response()->json($res, 200);
    }
    public function update(Request $request, $id)
    {
        $res = LGUProfile::where('id', $id)->first();
        $res->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function delete($id)
    {
        $res = LGUProfile::where('id', $id)->first();
        $res->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
