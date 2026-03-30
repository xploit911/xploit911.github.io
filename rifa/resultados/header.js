const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <nav class="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <img src="tu-logo.png" alt="Logotipo" class="h-10 w-auto object-contain">
        <span class="ml-3 font-bold text-slate-800 tracking-tight text-xl">TuAgencia</span>
      </div>
      
      <a href="https://wa.me/tu-numero" class="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-transform active:scale-95 shadow-md">
        Soporte WhatsApp
      </a>
    </div>
  </nav>
  <div class="h-20"></div>
`;

document.body.prepend(headerTemplate.content);
