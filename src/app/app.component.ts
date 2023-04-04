import { Component, ViewChild } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import {person} from './app.models'
import * as uuid from 'uuid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'forms-1';
    sexo: string = 'F';
    nombre = '';
    edad = 0;
    users_selected: object[] = [];
    generos = [{ label: 'Femenino', value: 'F' }, { label: 'Masculino', value: 'M' }];
    users: person[] = [
        {
            name: 'david',
            edad: 23,
            sexo: 'M',
            id: uuid.v4()
        },
    ]
    onListSelectionChange(ob: MatSelectionListChange) {
        this.users_selected = ob.source.selectedOptions.selected.map(item => (item.value));
    }
    AgregarUsuario() {
        let newDato = {
            name: this.nombre,
            edad: this.edad,
            sexo: this.sexo,
            id: uuid.v4(),
        };
        this.users.push(newDato);
        console.log(newDato);
    }
    selectedOptions = [];
    selectedOption = '';

    EliminarUser() {
        console.log("Eliminar");
        //console.log(this.users_selected);
        let result = eliminarDatos(this.users,this.users_selected)
        this.users = result;

    };

}
function eliminarDatos(arreglo1: any[], arreglo2: any[]): any[] {
    // Copia del arreglo1
    const copiaArreglo1 = [...arreglo1];

    // Filtrado de los elementos de arreglo2 en copiaArreglo1
    const resultado = copiaArreglo1.filter(elemento => !arreglo2.includes(elemento));

    // Retorno del resultado
    return resultado;
  }
