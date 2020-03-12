namespace hospital{

    let p = new Paciente("Gabriel Palestrante","235.453.567-97");
    p.setCodPaciente(1);

    let p2 = new Paciente("Gabriel Watson","443.423.887-09");
    p2.setCodPaciente(2);

    let p3 = new Paciente("Gabriel Monster","234.253.577-87");
    p3.setCodPaciente(3);

    let e = new Enfermeiro("Sr Barriga","345.456.456-65");
    e.setCodFuncionario(2);
    e.setCoren(5434);

    let e2 = new Enfermeiro("Seu Madruga","454.389.474-53");
    e2.setCodFuncionario(453);
    e2.setCoren(666);

    let e3 = new Enfermeiro("Dona Florinda","563.856.894-76");
    e3.setCodFuncionario(45);
    e3.setCoren(433);

    let m = new Medico("Chaves","367.453.043-76")
    m.setCodFuncionario(23);
    m.setCrm(332);
    m.setEspecialidade("Neurocirurgião");
    
    let m2 = new Medico("Chiquinha","487.457.846-76")
    m2.setCodFuncionario(6);
    m2.setCrm(453);
    m2.setEspecialidade("Pediatra");

    let m3 = new Medico("Nhonho","457.635.423-78")
    m3.setCodFuncionario(8);
    m3.setCrm(645);
    m3.setEspecialidade("Clinico Geral");
    let h = new Hospital();
    h.setNomeHospital ("Hospital Sasuke Uchiha");
    h.addEnfermeiro(e);
    h.addEnfermeiro(e2);
    h.addEnfermeiro(e3);
    h.addMedico(m);
    h.addMedico(m2);
    h.addMedico(m3);
    h.addPaciente(p);
    h.addPaciente(p2);
    h.addPaciente(p3);
        
    document.getElementById("nomeHospital").textContent=h.getNomeHospital();

    let tbMedico = document.getElementById("medico");

    h.getMedico().forEach(h=>{
            let nome = h.getNome();
            let id = h.getCodFuncionario();
            let cpf = h.getCpf();
            let crm = h.getCrm();
            let especialidade = h.getEspecialidade();
            let html = "<tr><td>"+id+"</td><td>"+nome+"</td><td>"+cpf+"</td><td>"+especialidade+"</td><td>"+crm+"</td></tr>";
            tbMedico.innerHTML += html;
    });

    let tbEnfermeiro = document.getElementById("enfermeiro");

    h.getEnfermeiro().forEach(h=>{
            let nome = h.getNome();
            let id = h.getCodFuncionario();
            let cpf = h.getCpf();
            let crm = h.getCoren();
            let html = "<tr><td>"+id+"</td><td>"+nome+"</td><td>"+cpf+"</td><td>"+crm+"</td></tr>";
            tbEnfermeiro.innerHTML += html;
    });

    let tbPaciente = document.getElementById("paciente");

    h.getPaciente().forEach(h=>{
            let nome = h.getNome();
            let id = h.getCodPaciente();
            let cpf = h.getCpf();
            let html = "<tr><td>"+id+"</td><td>"+nome+"</td><td>"+cpf+"</td></tr>";
            tbPaciente.innerHTML += html;
    });
}