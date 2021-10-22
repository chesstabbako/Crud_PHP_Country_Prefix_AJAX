<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $data["title"]; ?></title>
    <link rel="stylesheet" href="assets/css/phones.css" type="text/css">
</head>

<body>

    <main>

        <section class="container-phones">

            <div class="createNew">
                <form action="#" method="POST" id="form-create">
                    <input type="text" name="prefix" id="prefix" placeholder="Prefix" autocomplete="off" required>
                    <input type="text" name="number" id="number" placeholder="number" autocomplete="off" required>
                    <input type="hidden" name="name" id="name" placeholder="name" autocomplete="off" required>
                    <input type="button" value="Create new phone" class="btn_create">
                </form>
            </div>

            <div class="phones-list">

                <div id="form1">
                    <form action="#" method="POST" id='form_search'>
                        <input type="text" name="search" id="search" class="search" placeholder="Search Phone Number" autocomplete="off">
                    </form>
                </div>

                <table class="table">
                    <thead class="thead">
                        <tr>
                            <th>Id</th>
                            <th>Prefix</th>
                            <th>Number</th>
                            <th>Country's name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody id="registers">

                    </tbody>

                </table>

            </div>

        </section>

        <div class="editNew">
            <form action="#" method="POST" id="form-update">
                <input type="hidden" name="idU" id="idU" placeholder="id" value="" autocomplete="off" required>
                <input type="text" name="prefixU" id="prefixU" placeholder="Prefix" value="" autocomplete="off" readonly required>
                <input type="text" name="numberU" id="numberU" placeholder="number" value="" autocomplete="off" required>
                <input type="text" name="nameU" id="nameU" placeholder="name" value="" autocomplete="off" readonly required>
                <input type="submit" value="Edit phone" class="btn_edit">
                <input type="submit" value="No edit" class="btn_cancel_edit">
            </form>
        </div>

    </main>

    <script src="assets/js/ajax/jquery/jquery-3.5.1.min.js"></script>
    <script src="assets/js/ajax/index.js"></script>
    <script src="assets/js/ajax/data_id.js"></script>
    <script src="assets/js/ajax/btn_create.js"></script>
    <script src="assets/js/ajax/btn_delete.js"></script>
    <script src="assets/js/ajax/btn_edit.js"></script>
    <script src="assets/js/ajax/btn_cancel_edit.js"></script>
    <script src="assets/js/ajax/btn_search.js"></script>

</body>

</html>