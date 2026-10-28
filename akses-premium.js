(function(){
  'use strict';
  function configuration(){return window.MPI_SEJARAH_CONFIG||{};}
  function premiumUrl(){
    const url=String(configuration().premiumUrl||'').trim();
    return /^https:\/\/script\.google\.com\/(?:a\/[^/]+\/)?macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url)?url:'';
  }
  function contactUrl(){
    const n=String(configuration().salesWhatsapp||'').trim();
    if(!/^62\d{7,13}$/.test(n))return '';
    return 'https://wa.me/'+n+'?text='+encodeURIComponent('Halo, saya ingin informasi lisensi MPI Jelajah Sejarah Indonesia.');
  }
  window.MPIBukaPremium=function(){
    const url=premiumUrl();
    if(url){window.open(url,'_blank','noopener,noreferrer');return;}
    const text='Akses premium sedang disiapkan. Silakan hubungi pengelola MPI untuk informasi aktivasi.';
    if(typeof app!=='undefined' && typeof app.showModal==='function'){
      app.showModal('Akses Premium',text+'<br><br><button class="btn" onclick="app.closeModal()">Kembali ke Demo</button>');
    }else{
      const msg=document.getElementById('premium-message');
      if(msg){msg.textContent=text;msg.hidden=false;msg.focus();}else alert(text);
    }
  };
  window.MPIHubungiPengelola=function(){const url=contactUrl();if(url)window.open(url,'_blank','noopener,noreferrer');};
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('[data-sales-contact]').forEach(el=>{el.hidden=!contactUrl();});
  });
})();
