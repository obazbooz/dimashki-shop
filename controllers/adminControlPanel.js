const renderAdminControlPanel = (req, res) => {
  res.status(200);
  res.render('admin_control_panel', {});
};

export default renderAdminControlPanel;
