import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#f9f5fd] font-manrope selection:bg-[#39FF14] selection:text-[#0A0A0F]">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-[#1f1f26]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-space-grotesk text-2xl font-bold tracking-tighter text-[#39FF14]">VOID<span className="text-[#f9f5fd]">DROPS</span></div>
          <div className="hidden md:flex gap-8 font-space-grotesk text-sm uppercase tracking-widest text-[#acaab1]">
            <a href="#mint" className="hover:text-[#39FF14] transition-colors">Mint</a>
            <a href="#gallery" className="hover:text-[#39FF14] transition-colors">Gallery</a>
            <a href="#roadmap" className="hover:text-[#39FF14] transition-colors">Roadmap</a>
          </div>
          <button className="px-6 py-2 bg-[#39FF14] text-[#0d6100] font-space-grotesk font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Hero / Mint Section */}
      <section id="mint" className="pt-40 pb-20 px-6 relative flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-[#B026FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
        
        <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold tracking-tighter text-center mb-6 z-10">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#B026FF]">ARTIFACTS</span>
        </h1>
        
        {/* Countdown */}
        <div className="flex gap-4 mb-12 z-10 font-space-grotesk text-center">
          <div><div className="text-4xl text-[#39FF14]">04</div><div className="text-xs text-[#acaab1] uppercase tracking-widest">HOURS</div></div><div className="text-4xl text-[#1f1f26]">:</div>
          <div><div className="text-4xl text-[#39FF14]">20</div><div className="text-xs text-[#acaab1] uppercase tracking-widest">MINS</div></div><div className="text-4xl text-[#1f1f26]">:</div>
          <div><div className="text-4xl text-[#39FF14]">15</div><div className="text-xs text-[#acaab1] uppercase tracking-widest">SECS</div></div>
        </div>

        {/* Mint Card */}
        <div className="w-full max-w-lg bg-[#131319]/80 backdrop-blur-xl border border-[#1f1f26] p-10 z-10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#39FF14] to-[#B026FF]"></div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-space-grotesk uppercase tracking-widest">Public Mint</h2>
            <span className="px-3 py-1 bg-[#39FF14]/10 text-[#39FF14] text-xs font-bold uppercase tracking-widest border border-[#39FF14]/30">Live</span>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-xs font-space-grotesk uppercase text-[#acaab1] mb-2">
              <span>Supply Minted</span><span>4,500 / 10,000</span>
            </div>
            <div className="h-2 w-full bg-[#000000]"><div className="h-full bg-[#39FF14] shadow-[0_0_10px_#39FF14]" style={{width: '45%'}}></div></div>
          </div>

          <div className="flex justify-between items-center mb-8 border-t border-b border-[#1f1f26] py-4">
             <span className="text-[#acaab1] font-space-grotesk uppercase tracking-widest text-sm">Price</span>
             <span className="text-2xl font-bold font-space-grotesk">0.15 ETH</span>
          </div>

          <button className="w-full py-5 bg-[#39FF14] text-[#000000] font-space-grotesk font-bold uppercase tracking-[0.2em] text-lg hover:bg-white transition-colors">
            MINT 1 ARTIFACT
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-space-grotesk font-bold uppercase tracking-widest text-center mb-20 text-[#acaab1]">Discovered Artifacts</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
             {[
               {id: "001", height: "h-64", name: "Neon Samurai"},
               {id: "002", height: "h-96", name: "Void Drifter"},
               {id: "003", height: "h-72", name: "Data Ghost"},
               {id: "004", height: "h-80", name: "Chrome Oracle"},
               {id: "005", height: "h-64", name: "Synth Weaver"},
               {id: "006", height: "h-96", name: "Null Pointer"}
             ].map((art) => (
               <div key={art.id} className="break-inside-avoid bg-[#0A0A0F] border border-[#1f1f26] group hover:border-[#B026FF]/50 transition-colors">
                 <div className={`w-full bg-[#131319] relative overflow-hidden flex items-center justify-center ${art.height}`}>
                    <span className="text-[#1f1f26] font-space-grotesk text-xl opacity-50">[ IMAGE ]</span>
                    <div className="absolute inset-0 bg-[#B026FF] opacity-0 group-hover:opacity-10 mix-blend-screen transition-opacity"></div>
                 </div>
                 <div className="p-6">
                   <div className="text-xs text-[#39FF14] font-mono mb-2">#{art.id}</div>
                   <h3 className="text-xl font-space-grotesk uppercase tracking-widest">{art.name}</h3>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#1f1f26] text-center font-space-grotesk text-sm uppercase tracking-widest text-[#acaab1]">
        VOID DROPS © 2024 | ENTER THE UNKNOWN
      </footer>
    </main>
  );
}
