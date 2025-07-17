import FloatingNodes from '@/components/FloatingNodes';

export default function LLMPoweredDocumentation() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNodes />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col text-center">
        <h1 className="text-5xl font-bold text-white mb-8">LLM-Powered Documentation</h1>
        <p className="text-xl text-white mt-4 max-w-3xl">
          Our LLM-Powered Documentation service streamlines the creation of technical reports, specifications, and user-friendly manuals. We use advanced language models to generate clear, concise, and accurate documentation, saving you time and resources.
        </p>

        <section id="details" className="mt-16 text-left">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Automated Content Generation</h3>
              <p>Our language models can automatically generate high-quality content from your existing data, such as code, design documents, and user stories. This significantly reduces the time and effort required to create documentation.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Consistent and Accurate</h3>
              <p>We ensure that your documentation is consistent and accurate by using a centralized knowledge base and a set of predefined templates. This helps to reduce errors and improve the overall quality of your documentation.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Multi-format Publishing</h3>
              <p>We can publish your documentation in a variety of formats, including PDF, HTML, and Markdown. This makes it easy to share your documentation with a wide range of audiences.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Translation and Localization</h3>
              <p>Our language models can automatically translate your documentation into multiple languages, enabling you to reach a global audience.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to streamline your documentation process?</h2>
          <p className="text-xl text-white mb-8">Contact us today to learn more about how our LLM-Powered Documentation service can help you create high-quality documentation with ease.</p>
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
