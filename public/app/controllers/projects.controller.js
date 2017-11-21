(function() {

  'use strict';

  angular.module('website').controller('ProjectsController', ProjectsController);

  function ProjectsController() {

    var self = this;
    self.projects = [
      {
        title: 'Plataforma de gestão de ordem de serviços',
        description: 'Projeto interno voltado a atender demandas das equipes de comercial e atendimento, focado no lançamento de ordens de serviço, cadastro de clientes e controle de aparelhos.',
        positions: ['Desenvolvedor Back End', 'desenvolvedor Front End', 'Tester'],
        technologies: ['ASP.NET MVC', 'Selenium', 'JQuery', 'HTML', 'CSS', 'Javascript', 'Web Services (SOAP)']
      },
      {
        title: 'Motor de Notas Fiscais',
        description: 'Projeto interno voltado a automatizar o processo de geração e emissão de notas fiscais para o cliente, bem como a geração e emissão de boletos bancários. O fluxo completo incluia a extração dos dados na base, tratamento, construção de nota e boleto e, por fim, envio de e-mail com os documentos anexados.',
        positions: 'Desenvolvedor Back End',
        technologies: []
      }
    ];

  }


})();
