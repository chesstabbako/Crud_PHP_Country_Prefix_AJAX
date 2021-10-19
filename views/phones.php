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
                    <input type="text" name="prefix" id="prefix" placeholder="Prefix" required>
                    <input type="text" name="number" id="number" placeholder="number" required>
                    <input type="text" name="name" id="name" placeholder="name" required>
                    <input type="button" value="Create new" class="btn_create">
                </form>
            </div>

            <div class="phones-list">

                <div id="form1">
                    <form action="#" method="POST" id='form_search'>
                        <input type="text" name="search" id="search" class="search" placeholder="Search Phone">
                    </form>
                </div>

                <table class="table">
                    <thead class="thead">
                        <tr>
                            <th>Id</th>
                            <th>Prefix</th>
                            <th>Number</th>
                            <th>Name</th>
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
                <input type="hidden" name="idU" id="idU" placeholder="id" value="" required>
                <input type="text" name="prefixU" id="prefixU" placeholder="Prefix" value="" required>
                <input type="text" name="numberU" id="numberU" placeholder="number" value="" required>
                <input type="text" name="nameU" id="nameU" placeholder="name" value="" required>
                <input type="submit" value="Edit phone" class="btn_edit">
            </form>
        </div>

    </main>

    <script src="assets/js/ajax/jquery/jquery-3.5.1.min.js"></script>
    <script src="assets/js/ajax/index.js"></script>
    <script src="assets/js/ajax/data_id.js"></script>
    <script src="assets/js/ajax/btn_create.js"></script>
    <script src="assets/js/ajax/btn_delete.js"></script>
    <script src="assets/js/ajax/btn_edit.js"></script>
    <script src="assets/js/ajax/btn_search.js"></script>

</body>

</html>