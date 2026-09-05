# Projeto Treina Mais
- Resumo do aplicativo/site:
  Inspirado em aplicativos como gymrats , Hevy e Fitfolio o Treina Mais busca ser um aplicativo para anotar os treinos dos mais diversos tipos de atividades física: Academia , Corrida , Artes Marciais. Os usuários vão poder anotar suas cargas/métricas de treino para a cada treino irem evoluindo. Além disso , os usuários serão capazes de postar a foto do treino , a cada foto postada gera uma sequência de treino, por exemplo , 7 dias , 15 dias , 30 mes , etc.
Funcionalidades iniciais:
- CRUD básico: Criar treino, Exibir treinos passado, Atualizar Treinos, Excluir treinos.
- O indivíduo vai poder adicionar um vídeo da execução do exercício( Aqui pensei em utilizar algum site que possua alguma API para adicionar informações de como executar o exercício ou alguma informação do site( Achei essa API:https://api-ninjas.com/api/exercises#allexercises-endpoint, porém so devolve textos, já a Wger API pode ser capaz de devolver vídeos de execção, gostaria da opinião do Professor)
- O usuário poderá criar um Gráfico de Evolução de seu peso, além da sua evolução nos parâmetros de cada exercício. Por exemplo, evolução de Carga do Supino Inclinado de 12,5kg para 20kg e será apresentado um gráfico de evolução. Caso o treino não seja de musculação, por exemplo, esportes aeróbicos, ou treinos funcionais, o usuário deve detalhar qual parâmetro é utilizado como "Carga". Porém esse tipo de treino ainda não tive uma ideia de como implentar um gráfico de evolução.
- Avaliação 1:
- 1. Quais tabelas você definiu inicialmente?
Duas tabelas: Treino e Usuario. Usuario pode deter vários treinos , porém cada treino só existe para um usuário.
Usei as tabelas em conjunto com o Prisma ORM , caso o professor tenha alguma indicação de material para estudar prisma agradeço. Ou uma sugestão para usar somente banco de dados , por exemplo PostgreeSQL.
- 2 Você utilizou migrations? Se sim, quantas migrations? Descreva em uma frase o que cada uma faz.
- Uma migration , que cria as duas tabelas.
3. Qual o caminho do arquivo que gera a seed do seu banco?
prisma/seed.ts
4. Quais os endpoints que você irá implementar inicialmente? Cada endpoint deve ser um método e um path. Explique em um parágrafo por que você resolveu priorizar a implementação desses endpoints.

= Ainda não pensei direito na criação dos endpoints totalmente, somente fiz um test com o metodo GET , onde eu posso obter todos usuarios e treinos.
5. Você está usando algum framework para escrever os endpoints da sua API? Se sim, qual?
Irei usar express J.S
