<?php

class MyClass
{
    public $id;

    public function __construct($id)
    {
        $this->id = $id;
    }
}

class MyClass2
{
    public $id;

    public function __construct($id)
    {
        $this->id = $id;
    }
}

$obj[] = new MyClass(1);
$obj[] = new MyClass(1);
$obj[] = new MyClass(1);
$obj[] = new MyClass(1);
$obj[] = new MyClass2(1);

var_dump($obj);
