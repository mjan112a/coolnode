import FloatingNodes from '@/components/FloatingNodes';

export default function AcceleratedProductDevelopment() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNodes />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Accelerated Product Development</h1>
        <p className="text-xl text-white mt-4 max-w-3xl">
          Our Accelerated Product Development service helps you bring your ideas to market faster. We use AI-assisted concept generation, prototyping, and market analysis to streamline the development process and reduce time-to-market.
        </p>

        <section id="details" className="mt-16 text-left">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Concept Generation</h3>
              <p>We use AI to generate a wide range of product concepts based on your ideas and market research. This helps you to explore new possibilities and identify the most promising concepts.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Prototyping</h3>
              <p>We create interactive prototypes that allow you to test and validate your ideas with real users. This helps you to gather valuable feedback and iterate on your design before committing to development.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Market Analysis</h3>
              <p>We use AI to analyze market trends, competitor activity, and customer feedback. This helps you to identify market opportunities and develop a winning product strategy.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Go-to-Market Strategy</h3>
              <p>We help you develop a comprehensive go-to-market strategy that covers everything from pricing and positioning to marketing and sales. This helps you to launch your product with confidence and maximize its chances of success.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to accelerate your product development?</h2>
          <p className="text-xl text-white mb-8">Contact us today to learn more about how our Accelerated Product Development service can help you bring your ideas to life.</p>
          <div className="space-y-4">
            <div>
              <a href="mailto:jeffreymyers@upstreamllm.com" className="text-lg text-blue-400 hover:text-blue-500">
                jeffreymyers@upstreamllm.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
