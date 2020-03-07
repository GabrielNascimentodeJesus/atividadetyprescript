namespace hospital{
    export class Paciente extends Pessoa{
        codPaciente: number;

        getCodPaciente(): number{
            return this.codPaciente;
        }
        setCodPaciente(cod:number):void{
            this.codPaciente = cod;
        }
    }
}