<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    protected $fillable = [
        'lastName',
        'firstName',
        'area_id',
        'price',
        'note',
    ];

    public function area()
    {
        return $this->belongsTo(Area::class);
    }
}
