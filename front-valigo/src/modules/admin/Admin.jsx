import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardPage from './views/DashboardPage/DashboardPage';
import InventarioPage from './views/InventarioPage/InventarioPage';
import IngresosGastosPage from './views/IngresosGastosPage/IngresosGastosPage';
import ProveedoresPage from './views/ProveedoresPage/ProveedoresPage';
import ReportesPage from './views/ReportesPage/ReportesPage';
import VentasPage from './views/VentasPage/VentasPage';

export default class Admin extends Component {
    render() {
        return (
            <Switch>
                <Route path='/admin/ingresos-gastos-view' component={IngresosGastosPage} />
                <Route path='/admin/proveedores-view' component={ProveedoresPage} />
                <Route path='/admin/inventario-view' component={InventarioPage} />
                <Route path='/admin/reportes-view' component={ReportesPage} />
                <Route path='/admin/ventas-view' component={VentasPage} />
                <Route path='/admin' component={DashboardPage} />
            </Switch>
        )
    }
}
