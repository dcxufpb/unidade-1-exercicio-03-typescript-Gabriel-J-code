let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function imprime_dados_loja() {	
	if (!dados.nome_loja){
		return "O campo nome da loja é obrigatório"}
	
	if (!dados.logradouro){
		return "O campo logradouro do endereço é obrigatório"} 
		
	if (!dados.municipio){
		return "O campo município do endereço é obrigatório"} 

	if (!dados.estado){
		return "O campo estado do endereço é obrigatório"} 

	if (!dados.cnpj){
		return "O campo CNPJ da loja é obrigatório"} 	

	if (!dados.inscricao_estadual){
		return "O campo inscrição estadual da loja é obrigatório"} 

	var numero = (!dados.numero)? "s/n" : String(dados.numero)
	
	var complemento = (dados.complemento)? " " + dados.complemento : ""	

	var bairro = (dados.bairro)? dados.bairro + " - " : ""

	var cep = (dados.cep)? "CEP:" + dados.cep : ""
	
	var telefone = (dados.telefone)? "Tel " + dados.telefone : ""
	
	telefone = ( dados.cep && dados.telefone)? " " + telefone : telefone

	var observacao = (dados.observacao)? dados.observacao : ""

	var nota = `${dados.nome_loja}\n`
	nota += `${dados.logradouro}, ${numero}${complemento}\n`
	nota += `${bairro}${dados.municipio} - ${dados.estado}\n`
	nota += `${cep}${telefone}\n`
	nota += `${observacao}\n`
	nota += `CNPJ: ${dados.cnpj}\n`
	nota += `IE: ${dados.inscricao_estadual}\n`

	return nota;
}

module.exports = {
  dados: dados,
  imprime_dados_loja:  imprime_dados_loja
};
