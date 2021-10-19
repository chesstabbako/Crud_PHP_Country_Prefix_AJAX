<?php

class CartModel
{

    private $db;
    private $content;

    public function __construct()
    {

        require_once "config/connection.php";
        $this->db = Connection::Connect();
        $this->content = array();
    } //__construct() finishes

    public function get_phones()
    {
        $sql = "select * from `all_phone_book`";
        $result = $this->db->prepare($sql);
        $result->execute();

        while ($row = $result->fetchAll(PDO::FETCH_ASSOC)) {

            $this->content[] = $row;
        }

        return $this->content;
    } //get_phones() finishes

    public function get_by_id($id)
    {
        $sql= "SELECT * FROM `all_phone_book` WHERE id=:id";
        $result = $this->db->prepare($sql);
        $result->bindValue(":id",$id);
        $result->execute();

        while ($row = $result->fetchAll(PDO::FETCH_ASSOC)) {

            $this->content[] = $row;
        }
        return $this->content;
    } //get_by_id($id) finishes

    public function create_phones($prefix, $number, $name)
    {

        $sql = "INSERT INTO `all_phone_book` (`prefix`, `number`, `name`)
        VALUES (:prefix, :number_1, :name_1)";
        $result = $this->db->prepare($sql);

        $result = $this->db->prepare($sql);
        $result->bindValue(":prefix", $prefix);
        $result->bindValue(":number_1", $number);
        $result->bindValue(":name_1", $name);
        $result->execute();
        return "Success";
    } //create_phones($prefix, $number, $name) finishes

    public function delete_phone($id)
    {

        $sql = "DELETE FROM `all_phone_book` WHERE id= :id";
        $result = $this->db->prepare($sql);

        $result = $this->db->prepare($sql);
        $result->bindValue(":id", $id);
        $result->execute();
    }//delete_phone($id)

    public function update_phone($id, $prefix, $number, $name)
    {
        $sql = "UPDATE `all_phone_book`
        SET `name`=:name_u, `prefix`=:prefix_u,`number`=:number_u WHERE `id`=:id";
        $result = $this->db->prepare($sql);

        $result = $this->db->prepare($sql);
        $result->bindValue(":id", $id);
        $result->bindValue(":name_u", $name);
        $result->bindValue(":number_u", $number);
        $result->bindValue(":prefix_u", $prefix);
        $result->execute();
        return "Success";
    }

    public function search_phone($number)
    {
        $sql= "SELECT * FROM `all_phone_book`  WHERE `number` LIKE :number_u";
        $result = $this->db->prepare($sql);
        $result->bindValue(":number_u", $number);
        $result->execute();

        while ($row = $result->fetchAll(PDO::FETCH_ASSOC)) {

            $this->content[] = $row;
        }
        return $this->content;
    }
}
