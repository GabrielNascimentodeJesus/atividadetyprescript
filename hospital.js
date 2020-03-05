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
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
