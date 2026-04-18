import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#f9f5fd] font-manrope relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#39FF14] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#B026FF] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 sticky top-0 z-50 bg-[#0A0A0F]/50 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-2xl font-space-grotesk font-bold tracking-tighter">
          <span className="w-4 h-4 bg-[#39FF14] shadow-[0_0_15px_#39FF14]"></span>
          NEON<span className="text-[#ACAAB1]">LAUNCH</span>
        </div>
        <div className="hidden md:flex gap-8 font-space-grotesk text-sm uppercase tracking-widest text-[#ACAAB1]">
          <span className="hover:text-[#f9f5fd] cursor-pointer transition-colors">Lore</span>
          <span className="hover:text-[#f9f5fd] cursor-pointer transition-colors">Gallery</span>
          <span className="hover:text-[#f9f5fd] cursor-pointer transition-colors">Roadmap</span>
        </div>
        <button className="px-8 py-3 bg-[#131319] hover:bg-[#1f1f26] text-[#39FF14] font-space-grotesk uppercase tracking-widest text-sm transition-all duration-300 relative group overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#39FF14] shadow-[0_0_10px_#39FF14] group-hover:h-full group-hover:opacity-10 transition-all duration-300"></div>
          Connect Wallet
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 flex flex-col items-center justify-center text-center z-10">
        
        {/* Countdown Timer */}
        <div className="mb-12 font-space-grotesk">
          <p className="text-[#ACAAB1] uppercase tracking-[0.3em] text-xs mb-4">Public Mint Opens In</p>
          <div className="flex gap-4 justify-center text-5xl md:text-7xl font-bold tracking-tighter">
            <div className="flex flex-col items-center">
              <span className="text-[#f9f5fd]">04</span>
              <span className="text-[10px] text-[#B026FF] uppercase tracking-widest mt-2">Hours</span>
            </div>
            <span className="text-[#39FF14] opacity-50">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[#f9f5fd]">20</span>
              <span className="text-[10px] text-[#B026FF] uppercase tracking-widest mt-2">Mins</span>
            </div>
            <span className="text-[#39FF14] opacity-50">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[#f9f5fd]">15</span>
              <span className="text-[10px] text-[#B026FF] uppercase tracking-widest mt-2">Secs</span>
            </div>
          </div>
        </div>

        {/* Central Mint Card (Glassmorphic) */}
        <div className="bg-[#131319]/40 backdrop-blur-2xl p-10 max-w-lg w-full relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF14] to-[#B026FF] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
             <h1 className="text-4xl font-space-grotesk font-bold uppercase tracking-tighter mb-2 text-[#f9f5fd]">Genesis Pass</h1>
             <p className="text-[#ACAAB1] text-sm mb-8">Unlock exclusive access to the hyper-light void.</p>
             
             {/* Progress Bar */}
             <div className="mb-8">
               <div className="flex justify-between text-xs font-space-grotesk tracking-widest uppercase mb-2">
                 <span className="text-[#39FF14]">Minted</span>
                 <span className="text-[#ACAAB1]">4500 / 10000</span>
               </div>
               <div className="h-1 w-full bg-[#000000] overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-[#106f00] to-[#39FF14] w-[45%] shadow-[0_0_15px_#39FF14]"></div>
               </div>
             </div>

             <div className="flex items-center justify-between bg-[#000000] p-4 mb-8">
               <span className="font-space-grotesk uppercase tracking-widest text-[#ACAAB1] text-xs">Price</span>
               <span className="font-space-grotesk text-xl font-bold text-[#f9f5fd]">0.15 ETH</span>
             </div>

             <button className="w-full py-5 bg-gradient-to-br from-[#8eff71] to-[#2ff801] text-[#064200] font-space-grotesk font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-shadow duration-300">
               MINT NOW
             </button>
          </div>
        </div>
      </section>

      {/* Masonry Gallery Preview */}
      <section className="px-10 pb-32 max-w-7xl mx-auto z-10 relative">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-space-grotesk uppercase tracking-tighter">The Artifacts</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#19191f] to-transparent"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {/* Gallery Item 1 */}
          <div className="break-inside-avoid bg-[#131319] group hover:bg-[#1f1f26] transition-colors duration-500 relative">
            <div className="absolute inset-0 bg-[#39FF14] opacity-0 group-hover:opacity-5 transition-opacity blur-lg"></div>
            <div className="h-80 bg-[#19191f] w-full"></div> {/* Placeholder for NFT Image */}
            <div className="p-6">
              <div className="font-space-grotesk uppercase tracking-widest text-xs text-[#ACAAB1] mb-2">#0014</div>
              <h3 className="font-space-grotesk text-xl text-[#f9f5fd]">Neon Samur.ai</h3>
            </div>
          </div>
          
          {/* Gallery Item 2 (Taller) */}
          <div className="break-inside-avoid bg-[#131319] group hover:bg-[#1f1f26] transition-colors duration-500 relative">
             <div className="absolute inset-0 bg-[#B026FF] opacity-0 group-hover:opacity-5 transition-opacity blur-lg"></div>
            <div className="h-96 bg-[#19191f] w-full"></div> {/* Placeholder for NFT Image */}
            <div className="p-6">
              <div className="font-space-grotesk uppercase tracking-widest text-xs text-[#ACAAB1] mb-2">#0892</div>
              <h3 className="font-space-grotesk text-xl text-[#f9f5fd]">Void Drifter</h3>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="break-inside-avoid bg-[#131319] group hover:bg-[#1f1f26] transition-colors duration-500 relative">
             <div className="absolute inset-0 bg-[#39FF14] opacity-0 group-hover:opacity-5 transition-opacity blur-lg"></div>
            <div className="h-64 bg-[#19191f] w-full"></div> {/* Placeholder for NFT Image */}
            <div className="p-6">
              <div className="font-space-grotesk uppercase tracking-widest text-xs text-[#ACAAB1] mb-2">#1024</div>
              <h3 className="font-space-grotesk text-xl text-[#f9f5fd]">Data Ghost</h3>
            </div>
          </div>
           {/* Gallery Item 4 */}
           <div className="break-inside-avoid bg-[#131319] group hover:bg-[#1f1f26] transition-colors duration-500 relative">
             <div className="absolute inset-0 bg-[#B026FF] opacity-0 group-hover:opacity-5 transition-opacity blur-lg"></div>
            <div className="h-72 bg-[#19191f] w-full"></div> {/* Placeholder for NFT Image */}
            <div className="p-6">
              <div className="font-space-grotesk uppercase tracking-widest text-xs text-[#ACAAB1] mb-2">#3333</div>
              <h3 className="font-space-grotesk text-xl text-[#f9f5fd]">Chrome Oracle</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
