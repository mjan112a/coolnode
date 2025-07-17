import FloatingNodes from '@/components/FloatingNodes';

export default function AIEnhancedEngineeringAnalysis() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNodes />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col text-center">
        <h1 className="text-5xl font-bold text-white mb-8">AI-Enhanced Engineering Analysis</h1>
        <p className="text-xl text-white mt-4 max-w-3xl">
          Our AI-Enhanced Engineering Analysis service leverages cutting-edge machine learning models to process complex datasets and deliver profound insights. We specialize in transforming raw data into actionable intelligence, enabling you to make informed decisions with confidence.
        </p>

        <section id="details" className="mt-16 text-left">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Predictive Modeling</h3>
              <p>We build and deploy predictive models to forecast trends, identify potential failures, and optimize performance. Our models are tailored to your specific industry and business needs, providing you with a competitive edge.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Risk Assessment</h3>
              <p>Our AI-driven risk assessment tools analyze vast amounts of data to identify potential risks and vulnerabilities. We provide you with a comprehensive overview of your risk landscape, enabling you to proactively mitigate threats.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Data Visualization</h3>
              <p>We create intuitive and interactive data visualizations that make it easy to understand complex data. Our visualizations are designed to help you identify patterns, trends, and outliers at a glance.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Natural Language Processing (NLP)</h3>
              <p>We use NLP to extract valuable insights from unstructured text data, such as technical reports, customer feedback, and social media. This enables you to gain a deeper understanding of your customers and market trends.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to get started?</h2>
          <p className="text-xl text-white mb-8">Contact us today to learn more about how our AI-Enhanced Engineering Analysis service can help you unlock the full potential of your data.</p>
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
