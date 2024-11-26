// Dados das unidades com a quantidade de funcionários
const unidades = [
    { nome: "Campinas", funcionarios: 150 },
    { nome: "Valinhos", funcionarios: 120 },
    { nome: "Sorocaba", funcionarios: 100 },
    { nome: "Paulinia", funcionarios: 110 },
    { nome: "Vinhedo", funcionarios: 90 },
    { nome: "Hortolândia", funcionarios: 130 },
    { nome: "São Paulo", funcionarios: 160 }
  ];
  
  // Variáveis para armazenar o gráfico e o contexto
  const ctx = document.getElementById('employeeChart').getContext('2d');
  
  // Função para criar o gráfico
  let employeeChart; // Variável para armazenar o gráfico atual
  
  function criarGrafico(dados) {
    if (employeeChart) {
      employeeChart.destroy(); // Destroi o gráfico anterior, se existir
    }
  
    // Cria o novo gráfico
    employeeChart = new Chart(ctx, {
      type: 'bar', // Tipo de gráfico: barras
      data: {
        labels: dados.map(unidade => unidade.nome), // Unidades no eixo X
        datasets: [{
          label: 'Funcionários',
          data: dados.map(unidade => unidade.funcionarios), // Quantidade de funcionários
          backgroundColor: '#3498db', // Cor das barras
          borderColor: '#2980b9', // Cor da borda das barras
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true, // Começar o eixo Y do zero
            title: {
              display: true,
              text: 'Quantidade de Funcionários'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Unidades'
            }
          }
        }
      }
    });
  }
  
  // Chama a função para renderizar o gráfico com todos os dados
  criarGrafico(unidades);
  
  // Função para atualizar o gráfico com base nas cidades selecionadas
  function updateChart() {
    const cidadeSelecionada = document.getElementById('city-selector').value;
  
    if (cidadeSelecionada) {
      // Filtra as unidades com base na cidade selecionada
      const unidadesFiltradas = unidades.filter(unidade => unidade.nome.toLowerCase() === cidadeSelecionada.toLowerCase());
  
      // Se não houver dados para a cidade selecionada, mostra todas as unidades
      if (unidadesFiltradas.length > 0) {
        criarGrafico(unidadesFiltradas);
      } else {
        alert('Nenhum dado disponível para esta cidade!');
        criarGrafico([]); // Cria um gráfico vazio se não houver dados
      }
    } else {
      // Se nenhuma cidade for selecionada, exibe todas as unidades
      criarGrafico(unidades);
    }
  }
  