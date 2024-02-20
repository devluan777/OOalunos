let alunos = [
    { nome: 'Luan', nota: 10 },
    { nome: 'Isabela', nota: 2 },
    { nome: 'Maria', nota: 9.5 },
    { nome: 'Matheus', nota: 5 }
];

let alunosAprovados =
    alunos.filter(aluno =>
        aluno.nota >= 6);



alunosAprovados.forEach
    (aluno => console.log(`Aluno:
    ${aluno.nome}, foi aprovado(a) com a Nota:
    ${aluno.nota}`));

let alunosReprovados =
    alunos.filter(aluno =>
        aluno.nota <= 6);

alunosReprovados.forEach
    (aluno => console.log(`Aluno:
        ${aluno.nome}, foi reprovado(a) com a Nota:
        ${aluno.nota}`));