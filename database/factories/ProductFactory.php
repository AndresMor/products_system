<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'price' => $faker->numberBetween($min = 1000, $max = 9000),
        'amount' => $faker->numberBetween($min = 1, $max = 50),
        'state' => $faker->boolean
    ];
});
