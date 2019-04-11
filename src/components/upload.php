if (isset($_FILES['myFile'])) {
  move_uploaded_file($_FILES['myFile']['tmp_name'], 'uploads/' . $_FILES['myFile']['name']);
  echo 'OK';
} else {
  echo 'No file specified';
}
