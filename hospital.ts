namespace hospital{
    export class Hospital{
        private nomeHospital:string;
        private enfermeiros: Array<Enfermeiro> = [];
        private medicos: Array<Medico> = [];
        private pacientes: Array<Paciente> = [];

        getNomeHospital():string{
            return this.nomeHospital;
        }

        setNomeHospital(nome:string){
            this.nomeHospital = nome;
        }

        addEnfermeiro(enfermeiro:Enfermeiro):void{
            this.enfermeiros.push(enfermeiro);
        }

        getEnfermeiro(){
            return this.enfermeiros;
        }

        

    }
}