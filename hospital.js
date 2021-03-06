"use strict";
var hospital;
(function (hospital) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this.enfermeiros = [];
            this.medicos = [];
            this.pacientes = [];
        }
        Hospital.prototype.getNomeHospital = function () {
            return this.nomeHospital;
        };
        Hospital.prototype.setNomeHospital = function (nome) {
            this.nomeHospital = nome;
        };
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this.enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getEnfermeiro = function () {
            return this.enfermeiros;
        };
        Hospital.prototype.addPaciente = function (paciente) {
            this.pacientes.push(paciente);
        };
        Hospital.prototype.getPaciente = function () {
            return this.pacientes;
        };
        Hospital.prototype.addMedico = function (medico) {
            this.medicos.push(medico);
        };
        Hospital.prototype.getMedico = function () {
            return this.medicos;
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
