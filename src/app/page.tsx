import FloatingNodes from '@/components/FloatingNodes';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNodes />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col text-center">
        <h1 className="text-6xl font-bold text-white">
          upStreamLLM: We Turn Decades of Engineering Experience into AI-Powered Business Triumphs.
        </h1>
        <p className="text-2xl text-white mt-4">
          Improving business and engineering processes using AI tools and processes, combining decades of experience with cutting-edge technology.
        </p>

        <section id="impact" className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-8">Real-World Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">1000% Increase in Online Sales</h3>
              <p>SEO Optimization for a Midwest manufacturing company.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">60% Faster FDA Filing</h3>
              <p>Accelerated 510K filing for a dental startup.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">75% Reduction in Production Time</h3>
              <p>Reduced production time for a large manufacturer's technical manuals.</p>
            </div>
          </div>
        </section>

        <section id="solutions" className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-8">Solutions for Your Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <a href="/services/ai-enhanced-engineering-analysis" className="p-6 rounded-lg hover:bg-blue-900/15 transition-colors">
              <div>
                <h3 className="text-xl font-semibold mb-3">Overcome Complex Data Hurdles</h3>
                <p>Efficient processing of complex data and in-depth risk assessment.</p>
              </div>
            </a>
            <a href="/services/llm-powered-documentation" className="p-6 rounded-lg hover:bg-blue-900/15 transition-colors">
              <div>
                <h3 className="text-xl font-semibold mb-3">Eliminate Documentation Bottlenecks</h3>
                <p>Rapid creation of technical reports, specifications, and user-friendly manuals.</p>
              </div>
            </a>
            <a href="/services/accelerated-product-development" className="p-6 rounded-lg hover:bg-blue-900/15 transition-colors">
              <div>
                <h3 className="text-xl font-semibold mb-3">Accelerate Your Product Development</h3>
                <p>AI-assisted concept generation, prototyping, and market analysis.</p>
              </div>
            </a>
            <a href="/services/ai-driven-project-management" className="p-6 rounded-lg hover:bg-blue-900/15 transition-colors">
              <div>
                <h3 className="text-xl font-semibold mb-3">Streamline Your Project Management</h3>
                <p>Intelligent resource allocation, risk assessment, and progress tracking.</p>
              </div>
            </a>
          </div>
        </section>

        <section id="data-enrichment" className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-8">AI-Powered Data Enrichment</h2>
          <p className="text-xl text-white">
            We start by understanding and structuring your most valuable data. Then, our custom AI models use that data to generate exceptional, context-aware insights that are tailored to your specific needs. The result is a transformative solution that drives efficiency and innovation.
          </p>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to transform your business?</h2>
          <p className="text-xl text-white mb-8">Schedule a free consultation to discover how our AI-powered engineering solutions can drive your success.</p>
          <div className="space-y-4">
            <div>
              <a href="mailto:jeffreymyers@upstreamllm.com" className="text-lg text-blue-400 hover:text-blue-500">
                jeffreymyers@upstreamllm.com
              </a>
            </div>
            <div>
              <a href="https://upstreamllm.com" className="text-lg text-blue-400 hover:text-blue-500">
                upstreamllm.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
