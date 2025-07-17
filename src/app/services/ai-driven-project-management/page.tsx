import FloatingNodes from '@/components/FloatingNodes';

export default function AIDrivenProjectManagement() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNodes />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col text-center">
        <h1 className="text-5xl font-bold text-white mb-8">AI-Driven Project Management</h1>
        <p className="text-xl text-white mt-4 max-w-3xl">
          Our AI-Driven Project Management service helps you deliver projects on time and on budget. We use intelligent resource allocation, risk assessment, and progress tracking to streamline your project management process.
        </p>

        <section id="details" className="mt-16 text-left">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Intelligent Resource Allocation</h3>
              <p>Our AI models analyze your project requirements and team availability to recommend the optimal resource allocation. This helps you to make the most of your team's skills and experience.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Proactive Risk Assessment</h3>
              <p>We use AI to identify potential risks and issues before they impact your project. This allows you to take proactive measures to mitigate risks and keep your project on track.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Automated Progress Tracking</h3>
              <p>Our system automatically tracks your project's progress and provides you with real-time updates. This helps you to stay informed and make timely decisions.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Data-Driven Insights</h3>
              <p>We provide you with data-driven insights that help you to improve your project management process. This includes identifying bottlenecks, optimizing workflows, and improving team performance.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to streamline your project management?</h2>
          <p className="text-xl text-white mb-8">Contact us today to learn more about how our AI-Driven Project Management service can help you deliver successful projects.</p>
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
