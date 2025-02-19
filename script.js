function generateSignature() {
   const fullName = document.getElementById('fullName').value.trim();
   const position = document.getElementById('position').value.trim();
   const email = document.getElementById('email').value.trim();
   const phone = document.getElementById('phone').value.trim();
 
   // Link para o post -> https://imgur.com/a/6RTbvQZ --> <img class="signature-logo" src="https://i.imgur.com/rX2j9lQ.png" alt="Defesa Civil SC" />
  //  <div class="signature-name">${fullName}</div>
  //          <div class="signature-position">${position}</div>
  //          <div class="signature-contact">
  //            <a href="mailto:${email}">${email}</a><br/>
  //            <a href="tel:${phone}">${phone}</a>


   const signatureHTML = `
     <table class="signature-table" cellpadding="0" cellspacing="0">
       <tr>
         <td>
           <!-- Logo da Defesa Civil -->
            <img class="signature-logo" src="https://i.postimg.cc/SKxnnjYm/logo.jpg" alt="Defesa Civil SC" />
         </td>
         <td class="signature-info">
           <div class="signature-name">Arthur Vieira Ribeiro</div>
           <div class="signature-position">DBA Junior - GETIN</div>
           <div class="signature-contact">
             <a href="mailto:${email}">suporte.getin06@defesacivil.sc.gov.br</a><br/>
             <a href="tel:${phone}">48 9999-9999</a>
         </td>
       </tr>
     </table>
   `;
 
   // Mostra no div de preview
   document.getElementById('signature-preview').innerHTML = signatureHTML;
 }
 