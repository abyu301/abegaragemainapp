import React from 'react'
// Import the AdminDashboardForm component 
import AdminDashboardForm from '../../components/Admin/AdminMenu/AdminDashboard';
// Import the AdminMenu component 
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';

function AdminDashboard() {
  return (
    <div>
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminMenu />
        </div>
        <div className="col-md-9 admin-right-side">
          <AdminDashboardForm />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminDashboard