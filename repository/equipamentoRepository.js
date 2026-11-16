export async function criarEquipamento(equipamento) {
    const sql = "insert into equipamentos values codigoPatrimonio, nome, setor = (?, ?, ?, ?)"
}

export async function listarEquipamentos() {
    const sql = "select * from calibracoes"
    return sql
}

export async function buscarEquipamentoPorId(id) {
    const sql = "select * from equipamentos where id = (?)"
    return sql(id)
}

export async function atualizarEquipamento(id, equipamento) {
}

export async function excluirEquipamento(id) {
}
