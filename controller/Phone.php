<?php

class PhoneController
{

  public function index()
  {

    $data["title"] = "Phones";
    require_once "views/phones.php";
  } //function index()

  public function data()
  {

    $items = new PhoneModel();
    $data["phones"] = $items->get_phones();

    echo json_encode($data["phones"]);
  } //function data()

  public function create()
  {
    if (isset($_POST['prefix']) && isset($_POST['number']) && isset($_POST['name'])) {
      $prefix = $_POST['prefix'];
      $number = $_POST['number'];
      $name = $_POST['name'];
      $items = new PhoneModel();
      $exist_phone = $items->get_by_prefix_number($prefix, $number);
      /* echo $exist_phone; */

      if ($exist_phone === 1) {
        $response = new stdClass();
        $response->exist = $exist_phone;
        $response->data = $items->get_phones();
        echo json_encode($response);
      } else {
        $create_phone = $items->create_phones($prefix, $number, $name);
        if ($create_phone === "Success") {
          $response2 = new stdClass();
          $response2->exist = 0;
          $response2->data = $items->get_phones();
          echo json_encode($response2);
        }
      }
    } else {
      echo "Something is wrong";
    }
  } //function create()

  public function dataById()
  {

    if (isset($_POST['id'])) {
      $id = $_POST['id'];
      $items = new PhoneModel();
      $data["phone"] = $items->get_by_id($id);
      echo json_encode($data["phone"][0]);
    }
  } //dataById()

  public function delete()
  {

    if (isset($_POST['id'])) {

      $id = $_POST['id'];
      $items = new PhoneModel();
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

      $items = new PhoneModel();
      $update_phone = $items->update_phone($id, $prefix, $number, $name);

      if ($update_phone === "Success") {
        echo json_encode($items->get_phones());
      }
    } else {

      echo "No phone to edit";
    }
  }

  public function search()
  {

    if (isset($_POST['number'])) {
      $number = $_POST['number'];
      $items = new PhoneModel();
      $data["phones"] = $items->search_phone($number);
      echo json_encode($data["phones"]);
    }
  } //dataById()
}//Class CartController finishes
