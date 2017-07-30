<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        $this->middleware('jwt.auth', ['except' => ['register', 'login']]);
    }

    public function index()
    {
        // Retrieve all the users in the database and return them
        $users = User::all();
        return $users;
    }

    public function register(Request $request, JWTAuth $auth)
    {
        $credentials = $request->only('email', 'password');

        var_dump($request->all());
        try {
            $user = User::create($credentials);
        } catch (JWTException $e) {
            return response()->json(['error' => 'User already exists.'], 422);
        }

        $token = $auth->fromUser($user);

        return response()->json(compact('token'));
    }

    public function login(Request $request, JWTAuth $auth)
    {
        $credentials = $request->only('email', 'password');

        try {
            // verify the credentials and create a token for the user
            if (! $token = $auth->attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // if no errors are encountered we can return a JWT
        return response()->json(compact('token'));
    }
}