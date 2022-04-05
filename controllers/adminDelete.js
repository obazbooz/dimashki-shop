const renderAdminDelete = (req, res) => {
  res.status(200);
  res.render('delete_product', {});
}

export default renderAdminDelete;