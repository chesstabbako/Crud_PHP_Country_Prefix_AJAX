<?php

class CartController
{

  public function index()
  {

    $data["title"] = "Phones";
    require_once "views/phones.php";
  } //function index()

  public function data()
  {

    $items = new CartModel();
    $data["phones"] = $items->get_phones();

    echo json_encode($data["phones"]);
  } //function data()

  public function create()
  {
    if (isset($_POST['prefix']) && isset($_POST['number']) && isset($_POST['name'])) {
      $prefix = $_POST['prefix'];
      $number = $_POST['number'];
      $name = $_POST['name'];
      $items = new CartModel();
      $create_phone = $items->create_phones($prefix, $number, $name);
      if ($create_phone === "Success") {
        echo json_encode($items->get_phones());
      }
    } else {

      echo "Something is wrong";
    }
  } //function create()

  public function dataById()
  {

    if (isset($_POST['id'])) {
      $id = $_POST['id'];
      $items = new CartModel();
      $data["phone"] = $items->get_by_id($id);
      echo json_encode($data["phone"][0]);
    }
  } //dataById()

  public function delete()
  {

    if (isset($_POST['id'])) {

      $id = $_POST['id'];
      $items = new CartModel();
      $create_phones = $items->delete_phone($id);

      echo "Deleted Successfully";
    } else {

      echo "No phone to delete";
    }
  }

  public function update()
  {

    if (isset($_POST['id']) && isset($_POST['prefix']) && isset($_POST['number']) && isset($_POST['name'])) {

      $id = $_POST['id'];
      $name = $_POST['name'];
      $number = $_POST['number'];
      $prefix = $_POST['prefix'];

      $items = new CartModel();
      $update_phone = $items->update_phone($id, $prefix, $number, $name);

      if ($update_phone === "Success") {
        echo json_encode($items->get_phones());
      }
    } else {

      echo "No phone to edit";
    }
  }

  public function search(){
          
    if(isset($_POST['number'])){
      $number= $_POST['number'];
      $items= new CartModel();
      $data["phones"]= $items->search_phone($number);
      echo json_encode($data["phones"]);
    }
  
  }//dataById()
}//Class CartController finishes
