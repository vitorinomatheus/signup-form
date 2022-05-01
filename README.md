#signup-form

This project's goal is to build a sign-up page model. It's theme is a made-up chess championship.

1 - I used flexblox to organize the overall layout, setting logo and bg-image on the left, and user's interaction space on the right;
2 - Relative positioning was used to adjust logo height;
3 - To avoid having required inputs styled as invalid before user's interaction, I used JavaScript's "onblur" method to create a
new class that contains invalid styling;
4 - I used a 'keydown' listener to mask the phone number;
5 - To make "confirm password" work, I used a keyup listener and a couple of methods to transform the inputs class and id;

PT-BR

O objetivo deste projeto é construir um modelo de página de inscrição. Seu tema é um campeonato imaginário de xadrez;

1 - Usei flexbox para organizar a estrutura geral da página, configurando à esquerda o logo e a imagem de backgroud, enquanto o painel de interação do usuário ficou à direita;
2 - Posicionamento "relative" foi usado para ajustar a altura do logo na página;
3 - Para evitar que os inputs obrigatórios fossem estilizados como invalidos antes da interação do usuário, usei o método "onblur" do JavaScript para criar uma nova classe que contém o estilo dos inputs inválidos;
4 - Usei um listener de 'keydown' para criar a máscara do número de telefone;
5 - Para fazer funcionar o "confirm password", usei um listener de "keyup" e alguns métodos para transformar a classe e o is dos inputs;