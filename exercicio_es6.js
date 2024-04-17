const Alunos = [{
        aluno: 'Pedros',
        nota: 6
    },
    {
        aluno: 'Ana',
        nota: 7
    },
    {
        aluno: 'Lucia',
        nota: 4
    },
    {
        aluno: 'Lucas',
        nota: 10
    },
    {
        aluno: 'Felipe',
        nota: 3
    },
    {
        aluno: 'Amanda',
        nota: 4
    },
]

const GetAlunos = Alunos.filter(function(item) {
    return item.nota >= 6;
})
console.log(GetAlunos)