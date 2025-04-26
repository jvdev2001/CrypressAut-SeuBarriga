

import { faker } from '@faker-js/faker'; 
const nome = faker.person.firstName(); 
const email = faker.internet.email({ firstName: nome }); 



describe("cadastro de usuário", () => { 
   it('Registrar usuario com sucesso', () => { 
      cy.visit("https://seubarriga.wcaquino.me/cadastro"); 
      cy.preencherCadastro(nome, email); 
      cy.validarMensagem('sucesso', 'Usuário inserido com sucesso'); 
   }); 


   it('Registro de usuário com e-mail já existente', () => { 
      cy.visit("https://seubarriga.wcaquino.me/cadastro"); 
      cy.preencherCadastro("Daniel Delfino", "danielmarrero3@gmail.com"); 
      cy.validarMensagem('erro', 'Endereço de email já utilizado'); 
   });


   it('Registro de usuário com campo nome vazio', () => { 
      cy.visit("https://seubarriga.wcaquino.me/cadastro"); 
      cy.get('#email').type("danielmarrero3@gmail.com"); 
      cy.get("#senha").type("12345678"); 
      cy.get(".btn.btn-primary").click(); 
      cy.validarMensagem('erro', 'Nome é um campo obrigatório'); 
   });


   it('Registro de usuário com campo email vazio', () => { 
      cy.visit("https://seubarriga.wcaquino.me/cadastro"); 
      cy.get('#nome').type("Daniel Delfino"); 
      cy.get("#senha").type("12345678"); 
      cy.get(".btn.btn-primary").click(); 
      cy.validarMensagem('erro', 'Email é um campo obrigatório'); 
   });

   
   it('Registro de usuário com campos vazios', () => { 
      cy.visit("https://seubarriga.wcaquino.me/cadastro"); 
      cy.get(".btn.btn-primary").click(); 
      cy.validarMensagem('erro', 'Nome é um campo obrigatório'); 
   }); 

});